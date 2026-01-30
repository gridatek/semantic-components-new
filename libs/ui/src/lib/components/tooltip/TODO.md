# Tooltip Refactor Plan

## Current State

The current tooltip implementation uses a component-based approach with content projection, similar to hovercard. This creates redundancy since we now have a dedicated hovercard component for rich content tooltips.

## Goal

Create a simple directive-based tooltip that accepts plain text only. This aligns with the separation of concerns:

- **Tooltip (new)**: Simple text-only hints on hover
- **Hovercard**: Rich content popups with HTML, images, etc.

## New Implementation

### Location

Create a new implementation in a separate folder first:

```
libs/ui/src/lib/components/tooltip-new/
├── tooltip.directive.ts
├── tooltip.service.ts (for positioning/CDK overlay)
├── index.ts
├── README.md
└── demos/
    ├── basic-tooltip-demo.ts
    ├── positions-tooltip-demo.ts
    ├── delays-tooltip-demo.ts
    └── ... (demo containers)
```

### API Design

#### Simple Usage

```html
<button scTooltip="Save changes">Save</button>
```

#### With Options

```html
<button scTooltip="Save changes" tooltipPosition="top" tooltipDelay="500">Save</button>
```

#### Disabled State

```html
<button scTooltip="Save changes" [tooltipDisabled]="true">Save</button>
```

### Directive Interface

```typescript
@Directive({
  selector: '[scTooltip]',
  standalone: true,
})
export class ScTooltip {
  // Main content - text only
  readonly content = input.required<string>({ alias: 'scTooltip' });

  // Position
  readonly position = input<'top' | 'right' | 'bottom' | 'left'>('top', {
    alias: 'tooltipPosition',
  });

  // Show delay in milliseconds
  readonly showDelay = input<number>(200, { alias: 'tooltipDelay' });

  // Hide delay in milliseconds
  readonly hideDelay = input<number>(0, { alias: 'tooltipHideDelay' });

  // Disabled state
  readonly disabled = input<boolean>(false, { alias: 'tooltipDisabled' });

  // Custom class for tooltip container
  readonly class = input<string>('', { alias: 'tooltipClass' });
}
```

### Features

1. **Text Only**: No HTML content projection - keeps it simple
2. **Hover Trigger**: Shows on mouseenter, hides on mouseleave
3. **Focus Support**: Also shows on focus for keyboard accessibility
4. **Smart Positioning**: Uses CDK overlay for automatic positioning with fallbacks
5. **Delays**: Configurable show/hide delays to prevent flickering
6. **Disabled State**: Can be disabled programmatically
7. **Custom Styling**: Accepts custom classes via tooltipClass input
8. **Escape to Close**: Pressing Escape dismisses the tooltip
9. **Singleton**: Only one tooltip visible at a time globally

### Styling

Default styles:

- Dark background (`bg-popover` or `bg-slate-900`)
- White text (`text-popover-foreground`)
- Small padding (`px-3 py-1.5`)
- Rounded corners (`rounded-md`)
- Small text (`text-xs`)
- Arrow/pointer (optional, using CSS or positioned element)
- Fade in/out animation
- Max width constraint (`max-w-xs`)

### Implementation Details

#### CDK Overlay

- Use `@angular/cdk/overlay` for positioning
- Strategy: `FlexibleConnectedPositionStrategy`
- Positions with fallbacks:
  - top: `[{ originX: 'center', originY: 'top', overlayX: 'center', overlayY: 'bottom' }]`
  - right: `[{ originX: 'end', originY: 'center', overlayX: 'start', overlayY: 'center' }]`
  - bottom: `[{ originX: 'center', originY: 'bottom', overlayX: 'center', overlayY: 'top' }]`
  - left: `[{ originX: 'start', originY: 'center', overlayX: 'end', overlayY: 'center' }]`

#### Service Pattern

Create a `TooltipService` to:

- Manage overlay creation/destruction
- Ensure only one tooltip is visible at a time
- Handle global escape key listener
- Clean up on navigation

#### Accessibility

- `role="tooltip"` on overlay
- `aria-describedby` on trigger element pointing to tooltip
- Unique ID generation for aria attributes
- Screen reader friendly (content is read but not intrusive)

## Documentation

### README.md Structure

1. **Overview**: Simple text-only tooltips on hover
2. **Usage Examples**:
   - Basic tooltip
   - Different positions
   - Custom delays
   - Disabled state
   - Custom styling
3. **When to Use**:
   - Use tooltip for simple text hints
   - Use hovercard for rich content (images, formatted text, buttons, etc.)
4. **API Reference**: All inputs documented
5. **Accessibility**: ARIA attributes, keyboard support
6. **Styling**: How to customize appearance

### Demo Files

Create comprehensive demos showing:

1. **Basic**: Simple tooltip on button
2. **Positions**: All four positions (top, right, bottom, left)
3. **Delays**: Custom show/hide delays
4. **Disabled**: Toggling disabled state
5. **Custom Styling**: Using tooltipClass for custom appearance
6. **On Different Elements**: Button, link, icon, disabled button, etc.
7. **Long Text**: Handling long tooltip text with wrapping

## Migration Path

1. **Phase 1**: Create new tooltip in `tooltip-new/` folder
2. **Phase 2**: Add new tooltip to exports, mark old one as deprecated
3. **Phase 3**: Update all internal usage to new tooltip
4. **Phase 4**: Update showcase demos to show new tooltip
5. **Phase 5**: Remove old tooltip implementation
6. **Phase 6**: Rename `tooltip-new/` to `tooltip/`

## Breaking Changes

This is a complete API redesign:

### Old API (Component-based)

```html
<button sc-tooltip-trigger>
  Hover me
  <div sc-tooltip-content>Tooltip text</div>
</button>
```

### New API (Directive-based)

```html
<button scTooltip="Hover me">Button</button>
```

### Migration Guide for Consumers

Users will need to:

1. Replace component usage with directive
2. Convert content projection to string input
3. If they need rich content, use hovercard instead
4. Update position/delay attributes to new names

## Advantages

1. **Simpler API**: One directive vs multiple components
2. **Better Performance**: No component overhead for simple text
3. **Clearer Separation**: Tooltip = text, Hovercard = rich content
4. **Less Boilerplate**: Single line instead of multiple elements
5. **Type Safety**: Input validation for text content
6. **Consistent**: Follows directive pattern like other libraries

## Open Questions

1. **Arrow/Pointer**: Should tooltip have an arrow pointing to the element?
2. **Touch Devices**: How should tooltips behave on touch screens? (Consider long-press or disable)
3. **Animations**: Fade in/out duration? Use Angular animations or CSS transitions?
4. **Max Width**: Should max-width be configurable or fixed?
5. **Multiline**: How to handle very long tooltip text? Auto-wrap or truncate?

## Timeline

- **Estimated Effort**: 4-6 hours
  - Implementation: 2-3 hours
  - Demos: 1-2 hours
  - Documentation: 1 hour
- **Target**: Complete before next major release
