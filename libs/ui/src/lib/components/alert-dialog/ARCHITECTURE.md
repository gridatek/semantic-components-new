# Alert Dialog Architecture

## Overview

The alert-dialog component uses a two-signal architecture pattern to ensure smooth, complete animations before DOM cleanup. This document focuses on how animations are coordinated across the dialog content and backdrop.

## Component Structure

```
ScAlertDialogProvider (Root State Manager)
└── ScAlertDialogPortal (CDK Overlay Manager)
    ├── CDK Backdrop (Managed by Angular CDK)
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

## The Two-Signal Pattern

The core of the animation architecture is the separation of **logical state** from **physical state**.

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

### Three Animation Layers

1. **Dialog Content Animation** (300ms)
   - Zoom + Fade effects
   - Managed by Tailwind animate classes
   - Completion detected via `animationend` event

2. **Backdrop Animation** (300ms)
   - Fade effect
   - Managed by CSS classes on CDK backdrop
   - Timed with `setTimeout(300)`

3. **Synchronization Layer**
   - Ensures both complete before DOM cleanup
   - Coordinates timing between content and backdrop

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

### Backdrop Animations

Managed via CSS in `cdk.css`:

```css
/* Base state - hidden */
.sc-backdrop {
  @apply bg-black/10;
  opacity: 0;
  transition: opacity 300ms ease-in-out;
}

/* Entrance - CDK automatically adds this class */
.cdk-overlay-backdrop-showing.sc-backdrop {
  opacity: 1;
}

/* Exit - manually added by portal */
.sc-backdrop-hiding {
  opacity: 0 !important;
}
```

**Animation Flow:**

1. Portal detects `open()` becomes `false`
2. Adds `.sc-backdrop-hiding` class to backdrop element
3. CSS transition triggers (300ms fade to opacity: 0)
4. No event detection needed - timed with `setTimeout`

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

### Closing Sequence (The Complex Part!)

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
│  └─ Portal backdrop effect (triggered by open):
│     └─ backdrop.classList.add('sc-backdrop-hiding')
│        └─ Backdrop fade: opacity 1 → 0 (300ms)
│
├─ IMPORTANT: overlayOpen is STILL true!
│  └─ DOM remains mounted so animations can play
│
├─ t=0-300ms: Both animations play simultaneously
│
├─ t=300ms: Dialog animation completes
│  └─ onAnimationEnd(event) fires
│     └─ if (state === 'closed' && target === element):
│        ├─ animationComplete.emit()  ← For external listeners
│        └─ provider.onAnimationComplete()  ← Critical call!
│
├─ provider.onAnimationComplete():
│  └─ if (!open()):  ← Double-check we're still closing
│     └─ setTimeout(300ms)  ← Wait for backdrop to finish
│
├─ t=300-600ms: Waiting for backdrop animation
│  └─ Backdrop continues fading (might already be done)
│
├─ t=600ms: setTimeout completes
│  └─ overlayOpen.set(false)  ← Finally!
│
└─ t=600ms: Portal effect (triggered by overlayOpen):
   └─ overlayRef.detach()  ← DOM removed cleanly
```

## Why 300ms + 300ms = 600ms?

**Question:** Why wait 600ms total when both animations are 300ms?

**Answer:** Conservative timing ensures all animations complete:

1. **Dialog animation**: 300ms (detected via event)
2. **Safety buffer**: 300ms (via setTimeout)
   - Ensures backdrop has enough time
   - Accounts for any timing variations
   - Better to wait slightly longer than cut off early

**Could we optimize?**

- Yes, we could detect backdrop animation end
- But `setTimeout` is simpler and reliable
- 300ms extra is imperceptible to users
- Simplicity > micro-optimization

## State Synchronization

### Provider Constructor Effects

```typescript
constructor() {
  // Effect 1: Sync overlayOpen with open for OPENING
  effect(() => {
    if (this.open()) {
      // Opening: Mount DOM immediately
      this.overlayOpen.set(true);
    }
    // Note: When closing, overlayOpen stays true!
    // It will be set to false by onAnimationComplete()
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
  // Effect 1: Control overlay attachment based on overlayOpen
  effect(() => {
    if (this.alertDialogProvider.overlayOpen()) {
      this.attachDialog();
    } else {
      this.detachDialog();
    }
  });

  // Effect 2: Control backdrop animation based on open
  effect(() => {
    const backdrop = this.overlayRef.backdropElement;
    if (backdrop) {
      if (this.alertDialogProvider.open()) {
        // Opening: Remove hiding class
        backdrop.classList.remove('sc-backdrop-hiding');
      } else {
        // Closing: Add hiding class (triggers fade)
        backdrop.classList.add('sc-backdrop-hiding');
      }
    }
  });
}
```

## Animation Completion Handling

### Dialog Component

```typescript
protected onAnimationEnd(event: AnimationEvent): void {
  // Only emit when close animation completes
  if (
    this.state() === 'closed' &&
    event.target === this.elementRef.nativeElement
  ) {
    this.animationComplete.emit();  // External listeners
    this.alertDialogProvider.onAnimationComplete();  // Cleanup
  }
}
```

**Why check `event.target`?**

- `animationend` bubbles from child elements
- We only care about the dialog's own animation
- Child elements might have their own animations

### Provider Component

```typescript
onAnimationComplete(): void {
  // Only close the overlay if we're not supposed to be open
  if (!this.open()) {
    // Wait 300ms for backdrop fade animation to complete
    setTimeout(() => {
      // Double-check we're still closing (user might have re-opened)
      if (!this.open()) {
        this.overlayOpen.set(false);
      }
    }, 300);
  }
}
```

**Why double-check `open()`?**

- User might have reopened dialog during animation
- Prevents race condition where we'd close a newly-opened dialog
- Example: User clicks cancel, then immediately clicks open again

## Comparison: Before vs After

### Old Approach (Timer-Based)

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

### New Approach (Event-Driven + Coordinated)

```typescript
// ✅ Benefits:
constructor() {
  // Respond to state changes
  effect(() => {
    if (overlayOpen()) {
      attachDialog();
    } else {
      detachDialog();
    }
  });

  // Coordinate backdrop with logical state
  effect(() => {
    if (open()) {
      backdrop.classList.remove('sc-backdrop-hiding');
    } else {
      backdrop.classList.add('sc-backdrop-hiding');
    }
  });
}

// Dialog detects its own animation completion
onAnimationEnd(event) {
  provider.onAnimationComplete();
}

// Provider waits for all animations
onAnimationComplete() {
  setTimeout(() => {
    overlayOpen.set(false);  // Safe cleanup
  }, 300);
}
```

**Improvements:**

1. Event-driven animation detection
2. Coordinated timing between content and backdrop
3. Can handle variable animation durations
4. State changes trigger updates automatically
5. Can cancel/restart cleanly

## Key Design Decisions

### 1. Separation of Concerns

**Decision:** Split logical state (`open`) from physical state (`overlayOpen`)

**Why:**

- Logical state drives animations
- Physical state drives DOM lifecycle
- Animations need time to complete before DOM removal
- Clean separation makes flow easier to understand

### 2. Event + Timer Hybrid

**Decision:** Use `animationend` for dialog + `setTimeout` for backdrop

**Why:**

- Dialog: Event is precise, no polling needed
- Backdrop: CDK doesn't expose backdrop animation events
- `setTimeout` is simple and reliable for backdrop
- Hybrid approach balances precision and simplicity

### 3. Conservative Timing

**Decision:** Wait full 300ms even after dialog animation completes

**Why:**

- Ensures backdrop has plenty of time
- Accounts for browser rendering variations
- 300ms is imperceptible to users
- Simpler than detecting backdrop animation end

### 4. Double-Check Pattern

**Decision:** Check `open()` state before closing overlay

**Why:**

- Prevents race conditions
- User might reopen during close animation
- Effect might trigger multiple times
- Safety over performance

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

1. **Two-signal pattern:** Separates intent from DOM lifecycle
2. **Hybrid timing:** Events for dialog, timer for backdrop
3. **Coordinated cleanup:** Waits for all animations before detach
4. **Reactive updates:** Effects respond to state changes automatically
5. **Conservative timing:** Ensures animations complete fully

This architecture is more complex than a simple timer, but provides:

- Reliable animation completion
- Clean state management
- Extensibility for future features
- Better user experience
