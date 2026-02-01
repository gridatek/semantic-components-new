# Alert Dialog Architecture

## Overview

The alert-dialog component uses a multi-signal architecture pattern to ensure smooth, complete animations before DOM cleanup. This document focuses on how animations are coordinated across the dialog content and backdrop using a signal counter to track completion of both animations.

## Component Structure

```
ScAlertDialogProvider (Root State Manager)
└── ScAlertDialogPortal (CDK Overlay Manager)
    ├── CDK Backdrop (Transparent - click blocking only)
    ├── ScBackdrop (Visual backdrop with animations)
    └── ScAlertDialog (Dialog Content)
        ├── ScAlertDialogHeader
        │   ├── ScAlertDialogMedia (Optional)
        │   └── ScAlertDialogTitle
        │   └── ScAlertDialogDescription
        └── ScAlertDialogFooter
            ├── ScAlertDialogCancel
            └── ScAlertDialogAction

Plus: ScAlertDialogTrigger (Opens dialog)
```

## The Multi-Signal Pattern

The core of the animation architecture is the separation of **logical state** from **physical state**, with a **coordination signal** to track animation completions.

### Signal 1: `open` (Logical State)

**Purpose:** Controls what the dialog _should_ be doing

```typescript
// In ScAlertDialogProvider
readonly open = model<boolean>(false);
```

**Responsibilities:**

- Represents user intent ("should the dialog be visible?")
- Triggers animation state changes
- When `true`: Triggers entry animations
- When `false`: Triggers exit animations

### Signal 2: `overlayOpen` (Physical State)

**Purpose:** Controls whether DOM exists

```typescript
// In ScAlertDialogProvider
readonly overlayOpen = signal<boolean>(false);
```

**Responsibilities:**

- Controls CDK overlay attachment/detachment
- Stays `true` during close animations (critical!)
- Only becomes `false` after animations complete
- Ensures animations can play before DOM removal

### Signal 3: `animationsCompleted` (Animation Coordination)

**Purpose:** Tracks completion of multiple animations

```typescript
// In ScAlertDialogProvider (private)
private readonly animationsCompleted = signal<number>(0);
```

**Responsibilities:**

- Counts completed animations during close sequence
- Target count: 2 (dialog + backdrop)
- Resets to 0 when opening (for next cycle)
- Triggers overlay closure when target reached

### Why Both Are Needed

**The Problem:**

CDK overlay's lifecycle is tied to DOM presence:

```typescript
// ❌ This doesn't work:
if (open()) {
  overlayRef.attach(portal); // DOM mounted
} else {
  overlayRef.detach(); // DOM removed IMMEDIATELY
  // Animation never plays - element is gone!
}
```

**The Solution:**

Separate signals allow animation completion:

```typescript
// ✅ This works:
if (overlayOpen()) {
  // Physical state
  overlayRef.attach(portal); // DOM mounted
} else {
  overlayRef.detach(); // DOM removed AFTER animations
}

// Meanwhile, open() controls animations:
if (open()) {
  // Logical state
  state = 'open'; // Entry animation
} else {
  state = 'closed'; // Exit animation (DOM still mounted!)
}
```

## Animation Architecture

### Three Layers (Separated by Concern)

1. **CDK Backdrop** (Transparent - No Animation)
   - Class: `cdk-overlay-transparent-backdrop`
   - Purpose: Click blocking and scroll prevention
   - Functional layer only, no visual styling

2. **ScBackdrop Component** (300ms fade animation)
   - Reusable component from `components/backdrop`
   - Fade effect via Tailwind animate classes
   - Positioned with `-z-10` (behind dialog)
   - Emits `animationComplete` output when close animation finishes

3. **Dialog Content Animation** (300ms)
   - Zoom + Fade effects
   - Managed by Tailwind animate classes
   - Completion detected via `animationend` event (triggers cleanup)

### Synchronization

Both ScBackdrop and Dialog animations:

- Start simultaneously when `open` changes
- Use same duration (300ms)
- Respond to same `data-state` attribute
- Inside same portal template (removed together)

### Dialog Content Animations

Applied via Tailwind classes in `alert-dialog.ts`:

```typescript
protected readonly class = computed(() =>
  cn(
    // Base styles
    'bg-background ring-foreground/10 ...',

    // Entry animation
    'animate-in fade-in-0 zoom-in-95 duration-300',

    // Exit animation (triggered by data-state="closed")
    'data-[state=closed]:animate-out',
    'data-[state=closed]:fade-out-0',
    'data-[state=closed]:zoom-out-95',
    'data-[state=closed]:duration-300',
  ),
);
```

**Animation Flow:**

1. `state` signal changes from `'open'` to `'closed'`
2. `data-state` attribute updates to `"closed"`
3. Tailwind applies exit animation classes
4. Animation plays for 300ms
5. `animationend` event fires

### ScBackdrop Component Animations

Managed via ScBackdrop component from `components/backdrop`:

```typescript
// In backdrop.ts
protected readonly class = computed(() =>
  cn(
    'fixed inset-0 -z-10 bg-black/10',
    'supports-backdrop-filter:backdrop-blur-xs',
    'animate-in fade-in-0 duration-300',
    'data-[state=closed]:animate-out',
    'data-[state=closed]:fade-out-0',
    'data-[state=closed]:duration-300',
  ),
);
```

**Animation Flow:**

1. Portal renders: `<div sc-backdrop [open]="provider.open()" (animationComplete)="..."></div>`
2. ScBackdrop receives `open` input
3. Sets `data-state` based on `open` value
4. Tailwind applies appropriate animation classes
5. Animation plays for 300ms
6. On `animationend`, emits `animationComplete` output
7. Portal forwards event to provider for coordination

**Why Separate Component?**

- Reusable across dialog, drawer, sheet, etc.
- Consistent animation pattern
- Single responsibility (visual layer only)
- CDK backdrop handles functionality separately

## Complete Animation Timeline

### Opening Sequence

```
User clicks trigger:
│
├─ t=0ms: Trigger calls open.set(true)
│  │
│  ├─ Provider effect:
│  │  └─ overlayOpen.set(true)  ← Effect responds immediately
│  │
│  └─ Portal effect (triggered by overlayOpen):
│     └─ overlayRef.attach(portal)  ← DOM mounted
│
├─ t=0ms: CDK adds .cdk-overlay-backdrop-showing
│  └─ Backdrop: opacity 0 → 1 (300ms)
│
├─ t=0ms: Dialog effect (triggered by open):
│  └─ state.set('open')
│     └─ data-state="open" → Entry animation starts
│        ├─ fade-in-0
│        ├─ zoom-in-95
│        └─ duration-300
│
├─ t=0-300ms: Both animations play
│
└─ t=300ms: Animations complete, dialog visible
```

### Closing Sequence (Coordinated Completion)

```
User clicks cancel/action:
│
├─ t=0ms: Button calls open.set(false)
│  │
│  ├─ Dialog effect (triggered by open):
│  │  └─ state.set('closed')  ← Triggers animation
│  │     └─ data-state="closed" → Exit animation starts
│  │        ├─ animate-out
│  │        ├─ fade-out-0
│  │        ├─ zoom-out-95
│  │        └─ duration-300
│  │
│  └─ Backdrop receives [open]="false" input:
│     └─ state.set('closed')  ← Triggers backdrop animation
│        └─ data-state="closed" → Backdrop fade-out (300ms)
│
├─ IMPORTANT: overlayOpen is STILL true!
│  └─ DOM remains mounted so animations can play
│  └─ animationsCompleted = 0 (waiting for both)
│
├─ t=0-300ms: Both animations play simultaneously
│
├─ t=~300ms: Dialog animation completes
│  └─ onAnimationEnd(event) fires
│     └─ if (state === 'closed' && target === element):
│        └─ provider.onDialogAnimationComplete()
│           └─ animationsCompleted.update(n => n + 1)  ← Count = 1
│
├─ t=~300ms: Backdrop animation completes
│  └─ backdrop emits (animationComplete)
│     └─ portal.onBackdropAnimationComplete()
│        └─ provider.onBackdropAnimationComplete()
│           └─ animationsCompleted.update(n => n + 1)  ← Count = 2
│
├─ Effect detects: animationsCompleted === 2 && !open()
│  └─ overlayOpen.set(false)  ← Cleanup triggered!
│  └─ animationsCompleted.set(0)  ← Reset for next cycle
│
└─ t=~300ms: Portal effect (triggered by overlayOpen):
   └─ overlayRef.detach()  ← DOM removed cleanly after BOTH complete
```

## Why Track Both Animations?

**Question:** Why coordinate two separate animations instead of using a single timer?

**Answer:** Explicit animation tracking is more robust and event-driven:

### The Problem with Single Timers

```typescript
// ❌ Old approach - assumes both animations finish together
onDialogAnimationComplete(): void {
  setTimeout(() => {
    this.overlayOpen.set(false);
  }, 300); // Hope backdrop finishes too!
}
```

**Issues:**

- Assumes backdrop takes exactly 300ms
- Browser rendering variations can cause timing differences
- Backdrop might take 305ms, getting cut off at 300ms
- No way to know if backdrop actually completed
- Might wait longer than necessary if backdrop finishes early

### The Solution: Signal Counter Pattern

```typescript
// ✅ New approach - explicitly track both completions
private readonly animationsCompleted = signal<number>(0);

onDialogAnimationComplete(): void {
  this.animationsCompleted.update(n => n + 1); // Count = 1
}

onBackdropAnimationComplete(): void {
  this.animationsCompleted.update(n => n + 1); // Count = 2
}

effect(() => {
  if (this.animationsCompleted() === 2 && !this.open()) {
    this.overlayOpen.set(false); // Both confirmed complete!
  }
});
```

**Benefits:**

1. **Event-driven**: Waits for actual completion, not estimated time
2. **Robust**: Handles browser timing variations (300ms vs 305ms)
3. **Accurate**: Both animations explicitly signal completion
4. **Extensible**: Easy to add more animations (just increase target count)
5. **No race conditions**: Counter resets on open for clean cycles

## State Synchronization

### Provider Constructor Effects

```typescript
constructor() {
  // Effect 1: Sync overlayOpen with open for OPENING
  effect(() => {
    if (this.open()) {
      // Opening: Mount DOM immediately
      this.overlayOpen.set(true);
      // Reset counter for next close cycle
      this.animationsCompleted.set(0);
    }
    // Note: When closing, overlayOpen stays true!
    // It will be set to false by the coordination effect below
  });

  // Effect 2: Close overlay when both animations complete
  effect(() => {
    const completed = this.animationsCompleted();
    if (completed === 2 && !this.open()) {
      // Both animations confirmed complete
      this.overlayOpen.set(false);
      // Reset for next cycle
      this.animationsCompleted.set(0);
    }
  });
}
```

### Dialog Constructor Effects

```typescript
constructor() {
  // Effect: Sync animation state with logical state
  effect(() => {
    const isOpen = this.alertDialogProvider.open();
    this.state.set(isOpen ? 'open' : 'closed');
  });

  // Auto-focus dialog when it opens
  setTimeout(() => {
    this.elementRef.nativeElement.focus();
  });
}
```

### Portal Constructor Effects

```typescript
constructor() {
  // Effect: Control overlay attachment based on overlayOpen
  effect(() => {
    if (this.alertDialogProvider.overlayOpen()) {
      this.attachDialog();
    } else {
      this.detachDialog();
    }
  });
}
```

**Backdrop Coordination:**

The portal doesn't need an effect for backdrop animation coordination. Instead, it:

1. **Binds backdrop input**: `[open]="alertDialogProvider.open()"` - Backdrop manages its own animation state
2. **Listens to completion**: `(animationComplete)="onBackdropAnimationComplete()"` - Forwards event to provider
3. **Keeps components decoupled**: Backdrop remains reusable, portal acts as coordinator

## Animation Completion Handling

### Dialog Component

```typescript
protected onAnimationEnd(event: AnimationEvent): void {
  // Only trigger cleanup when close animation completes
  if (
    this.state() === 'closed' &&
    event.target === this.elementRef.nativeElement
  ) {
    this.alertDialogProvider.onDialogAnimationComplete();
  }
}
```

**Why check `event.target`?**

- `animationend` bubbles from child elements
- We only care about the dialog's own animation
- Prevents false triggers from child element animations

### Portal Component

```typescript
// Template
<div
  sc-backdrop
  [open]="alertDialogProvider.open()"
  (animationComplete)="onBackdropAnimationComplete()"></div>

// Component
protected onBackdropAnimationComplete(): void {
  this.alertDialogProvider.onBackdropAnimationComplete();
}
```

**Why forward the event?**

- Backdrop is a reusable component with its own animation events
- Portal acts as coordinator between backdrop and provider
- Keeps backdrop decoupled from alert-dialog specifics
- Method must be `protected` (not `private`) for template access

### Provider Component

```typescript
/**
 * Called by dialog when its close animation completes
 */
onDialogAnimationComplete(): void {
  if (!this.open()) {
    this.animationsCompleted.update(n => n + 1);
  }
}

/**
 * Called by portal when backdrop close animation completes
 */
onBackdropAnimationComplete(): void {
  if (!this.open()) {
    this.animationsCompleted.update(n => n + 1);
  }
}
```

**Why check `!this.open()` before incrementing?**

- User might have reopened dialog during close animation
- Prevents counter from incrementing during new open cycle
- Guards against race conditions
- Example: User clicks cancel (close starts), then immediately clicks trigger again (reopens)
- Without this check, the counter would incorrectly increment for the new cycle

**Why use `update()` instead of `set()`?**

- Increment is relative to current value
- Safe if multiple updates happen
- Immutable update pattern
- Consistent with Angular signals best practices

## Comparison: Evolution of Animation Coordination

### Approach 1: Single Timer (Original)

```typescript
// ❌ Problems:
private async detachDialogWithAnimation() {
  if (this.overlayRef.hasAttached()) {
    const backdrop = this.overlayRef.backdropElement;
    backdrop?.classList.add('sc-backdrop-hiding');

    // Wait arbitrary 300ms
    await firstValueFrom(timer(300));

    this.overlayRef.detach();  // Might cut off dialog animation!
  }
}
```

**Issues:**

1. Single hardcoded timer for all animations
2. No detection of actual animation completion
3. Dialog animation might take longer or shorter
4. Not coordinated with dialog state
5. No way to cancel if reopened

### Approach 2: Event + Timer Hybrid (Previous)

```typescript
// ⚠️ Better, but still has timing assumptions:
onAnimationComplete(): void {
  if (!this.open()) {
    // Wait for dialog, then wait another 300ms for backdrop
    setTimeout(() => {
      if (!this.open()) {
        this.overlayOpen.set(false);
      }
    }, 300);
  }
}
```

**Issues:**

1. Dialog event-driven ✅
2. Backdrop still timer-based ⚠️
3. Assumes backdrop takes exactly 300ms
4. Might wait too long or cut off early
5. No explicit confirmation from backdrop

### Approach 3: Signal Counter (Current)

```typescript
// ✅ Both animations explicitly tracked:
private readonly animationsCompleted = signal<number>(0);

constructor() {
  // Effect 1: Open and reset
  effect(() => {
    if (this.open()) {
      this.overlayOpen.set(true);
      this.animationsCompleted.set(0);
    }
  });

  // Effect 2: Close when both complete
  effect(() => {
    if (this.animationsCompleted() === 2 && !this.open()) {
      this.overlayOpen.set(false);
      this.animationsCompleted.set(0);
    }
  });
}

// Both animations signal completion
onDialogAnimationComplete(): void {
  if (!this.open()) {
    this.animationsCompleted.update(n => n + 1);
  }
}

onBackdropAnimationComplete(): void {
  if (!this.open()) {
    this.animationsCompleted.update(n => n + 1);
  }
}
```

**Improvements:**

1. ✅ Both animations event-driven
2. ✅ No timing assumptions
3. ✅ Handles browser rendering variations
4. ✅ Explicit completion signals
5. ✅ Extensible (easy to add more animations)
6. ✅ Signal-based reactivity
7. ✅ Clean cycle management

## Key Design Decisions

### 1. Separation of Concerns

**Decision:** Split logical state (`open`) from physical state (`overlayOpen`)

**Why:**

- Logical state drives animations
- Physical state drives DOM lifecycle
- Animations need time to complete before DOM removal
- Clean separation makes flow easier to understand

### 2. Signal Counter Pattern

**Decision:** Use signal counter to track multiple animation completions

**Why:**

- Both animations explicitly signal completion
- No timing assumptions or hardcoded delays
- Reactive: effect triggers when counter reaches target
- Extensible: easy to add more animations (increase target)
- Debuggable: counter value visible in Angular DevTools

### 3. Event-Driven Completion

**Decision:** Both dialog and backdrop emit completion events

**Why:**

- Precise: no guessing when animations finish
- Robust: handles browser timing variations
- Decoupled: backdrop component remains reusable
- Portal coordinates events to provider
- No arbitrary timeouts or magic numbers

### 4. Guard Pattern for Counter Increments

**Decision:** Check `!open()` before incrementing animation counter

**Why:**

- Prevents counter increments during new open cycle
- User might reopen during close animation
- Without guard, counter would increment incorrectly for new cycle
- Example: Close starts → dialog completes → user reopens → backdrop completes would incorrectly increment counter for new open
- Effect checks both counter AND `!open()` for safety

### 5. Effect-Based Reactivity

**Decision:** Use Angular effects instead of manual subscriptions

**Why:**

- Automatic cleanup on component destruction
- Declarative: describes "what" not "how"
- Runs automatically when dependencies change
- Easier to reason about than imperative code

## Animation Classes Reference

### Dialog Content Classes

```typescript
// Entry animation
'animate-in fade-in-0 zoom-in-95 duration-300';

// Exit animation (via data-state="closed")
'data-[state=closed]:animate-out';
'data-[state=closed]:fade-out-0';
'data-[state=closed]:zoom-out-95';
'data-[state=closed]:duration-300';
```

### Backdrop Classes (CSS)

```css
/* Base */
.sc-backdrop {
  @apply bg-black/10;
  opacity: 0;
  transition: opacity 300ms ease-in-out;
}

/* Entry (CDK automatic) */
.cdk-overlay-backdrop-showing.sc-backdrop {
  opacity: 1;
}

/* Exit (manual) */
.sc-backdrop-hiding {
  opacity: 0 !important;
}
```

## Accessibility Considerations

The animation system preserves accessibility:

1. **Focus Management:** Dialog auto-focuses on mount
2. **ARIA Attributes:** Set before animations start
3. **Screen Readers:** Announce dialog immediately (not after animation)
4. **Keyboard:** Close works during animations
5. **Reduced Motion:** Could add `@media (prefers-reduced-motion)` support

## Performance Considerations

### Efficient Rendering

- Uses `ChangeDetectionStrategy.OnPush` everywhere
- Effects only run when dependencies change
- No manual subscriptions to manage
- Single overlay instance reused

### Animation Performance

- CSS animations (GPU accelerated)
- Opacity and transform (composited properties)
- No layout thrashing
- Minimal JavaScript during animation

### Memory Management

- Effects auto-cleanup on destroy
- Timeout cleared if reopened
- Overlay detached after use
- No memory leaks

## Future Enhancements

### Potential Improvements

1. **Variable Animation Durations:**
   - Input property for animation duration
   - Provider passes duration to dialog and backdrop
   - Dynamic `setTimeout` based on duration

2. **Animation Events:**
   - Output events for animation start/end
   - External components can react to animation state

3. **Reduced Motion Support:**
   - Detect `prefers-reduced-motion`
   - Instant show/hide if user prefers
   - Keep accessibility benefits

4. **Stacking Context:**
   - Support multiple overlapping dialogs
   - z-index management
   - Close all vs close top

5. **Custom Animations:**
   - Allow custom animation classes via input
   - Support different animation styles (slide, scale, etc.)

## Testing Considerations

### What to Test

1. **State Transitions:**
   - open: false → true → false
   - overlayOpen follows correctly
   - state syncs with open

2. **Animation Timing:**
   - Animations play for full duration
   - DOM not removed early
   - Backdrop fades correctly

3. **Edge Cases:**
   - Rapid open/close
   - Open during close animation
   - Close during open animation
   - Multiple dialogs

4. **Cleanup:**
   - No memory leaks
   - Effects unsubscribe
   - Timeouts cleared

### Testing Strategy

```typescript
// Example test structure
describe('AlertDialog Animations', () => {
  it('should keep DOM mounted during close animation', async () => {
    // Open dialog
    provider.open.set(true);
    fixture.detectChanges();

    // Close dialog
    provider.open.set(false);
    fixture.detectChanges();

    // Immediately after close - DOM should still exist
    expect(overlayRef.hasAttached()).toBe(true);

    // After animations complete - DOM should be removed
    await delay(700);
    expect(overlayRef.hasAttached()).toBe(false);
  });
});
```

## Summary

The alert-dialog animation architecture achieves smooth, reliable animations through:

1. **Two-signal pattern:** Separates intent (`open`) from DOM lifecycle (`overlayOpen`)
2. **Signal counter coordination:** Tracks completion of multiple animations (`animationsCompleted`)
3. **Event-driven completion:** Both dialog and backdrop explicitly signal when done
4. **Reactive updates:** Effects respond to state changes automatically
5. **Robust timing:** No assumptions, handles browser variations

This architecture provides:

- ✅ Reliable animation completion detection
- ✅ Clean separation of concerns
- ✅ Extensibility (easy to add more animations)
- ✅ No race conditions or timing assumptions
- ✅ Debuggable signal-based state
- ✅ Better user experience (smooth, never cut off)
