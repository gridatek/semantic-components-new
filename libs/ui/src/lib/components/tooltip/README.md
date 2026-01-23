# ScTooltip Components

A set of Angular components for creating accessible tooltips with shadcn/ui styling.

## Architecture

The components follow a dependency injection (DI) pattern where child components inject the parent `ScTooltipProvider` to access shared state. Positioning is handled via CDK Overlay.

```
ScTooltipProvider (root wrapper - manages open state, side, delay)
├── ScTooltipTrigger (directive on element that triggers tooltip on hover/focus)
└── ScTooltipPortal (overlay portal for positioning)
    └── ScTooltip (tooltip content with role="tooltip")
```

## Components

| Component           | Selector                   | Type      | Description                                 |
| ------------------- | -------------------------- | --------- | ------------------------------------------- |
| `ScTooltipProvider` | `div[sc-tooltip-provider]` | Component | Root wrapper, manages state and positioning |
| `ScTooltipTrigger`  | `[sc-tooltip-trigger]`     | Directive | Element that shows tooltip on hover/focus   |
| `ScTooltipPortal`   | `div[sc-tooltip-portal]`   | Component | CDK overlay portal for tooltip positioning  |
| `ScTooltip`         | `div[sc-tooltip]`          | Component | Tooltip content panel with animation        |

## Usage

### Basic Tooltip

```html
<div sc-tooltip-provider>
  <button sc-tooltip-trigger>Hover me</button>
  <div sc-tooltip-portal><div sc-tooltip>Add to library</div></div>
</div>
```

### Different Sides

```html
<!-- Top (default) -->
<div sc-tooltip-provider side="top">
  <button sc-tooltip-trigger>Top</button>
  <div sc-tooltip-portal><div sc-tooltip>Tooltip on top</div></div>
</div>

<!-- Bottom -->
<div sc-tooltip-provider side="bottom">
  <button sc-tooltip-trigger>Bottom</button>
  <div sc-tooltip-portal><div sc-tooltip>Tooltip on bottom</div></div>
</div>

<!-- Left -->
<div sc-tooltip-provider side="left">
  <button sc-tooltip-trigger>Left</button>
  <div sc-tooltip-portal><div sc-tooltip>Tooltip on left</div></div>
</div>

<!-- Right -->
<div sc-tooltip-provider side="right">
  <button sc-tooltip-trigger>Right</button>
  <div sc-tooltip-portal><div sc-tooltip>Tooltip on right</div></div>
</div>
```

### Custom Delay

```html
<!-- 500ms delay -->
<div sc-tooltip-provider [delayDuration]="500">
  <button sc-tooltip-trigger>Slow tooltip</button>
  <div sc-tooltip-portal><div sc-tooltip>This appears after 500ms</div></div>
</div>

<!-- No delay (instant) -->
<div sc-tooltip-provider [delayDuration]="0">
  <button sc-tooltip-trigger>Instant tooltip</button>
  <div sc-tooltip-portal><div sc-tooltip>This appears instantly</div></div>
</div>
```

### Icon Button with Tooltip

```html
<div sc-tooltip-provider>
  <button sc-tooltip-trigger class="icon-button">
    <svg><!-- icon --></svg>
    <span class="sr-only">Add item</span>
  </button>
  <div sc-tooltip-portal><div sc-tooltip>Add item</div></div>
</div>
```

### On Any Element

The trigger can be applied to any element, not just buttons:

```html
<div sc-tooltip-provider>
  <span sc-tooltip-trigger class="underline cursor-help">What is this?</span>
  <div sc-tooltip-portal><div sc-tooltip>This is an explanation</div></div>
</div>
```

## Trigger Events

| Event        | Action       |
| ------------ | ------------ |
| `mouseenter` | Show tooltip |
| `mouseleave` | Hide tooltip |
| `focus`      | Show tooltip |
| `blur`       | Hide tooltip |

## Side Options

| Side     | Description                     |
| -------- | ------------------------------- |
| `top`    | Appears above trigger (default) |
| `bottom` | Appears below trigger           |
| `left`   | Appears to the left             |
| `right`  | Appears to the right            |

## How It Works

### State Management

`ScTooltipProvider` uses a signal for the `open` state:

```typescript
readonly open = signal<boolean>(false);

show(): void {
  this.open.set(true);
}

hide(): void {
  this.open.set(false);
}
```

### Delay Handling

`ScTooltipTrigger` schedules showing after the delay:

```typescript
private scheduleShow(): void {
  this.cancelShow();
  this.showTimeout = setTimeout(() => {
    this.tooltip.show();
  }, this.tooltip.delayDuration());
}
```

### Hover Persistence

The tooltip stays open when hovering over the content itself:

```typescript
// In ScTooltip
onMouseEnter(): void {
  this.tooltip.show();
}

onMouseLeave(): void {
  this.tooltip.hide();
}
```

### Positioning

`ScTooltipPortal` uses CDK Connected Overlay to position the tooltip relative to the trigger based on the configured `side`.

## Accessibility

- `role="tooltip"` on the `ScTooltip` content
- Tooltip appears on keyboard focus (not just hover)
- Screen readers announce tooltip content

## Customization

All components accept a `class` input for custom styling:

```html
<div sc-tooltip-portal><div sc-tooltip class="bg-destructive text-destructive-foreground">Warning: This action cannot be undone</div></div>
```
