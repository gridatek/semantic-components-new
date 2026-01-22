# ScTooltip Components

A set of Angular components for creating accessible tooltips with shadcn/ui styling.

## Architecture

The components follow a dependency injection (DI) pattern where child components inject the parent `ScTooltip` to access shared state.

```
ScTooltip (root wrapper - manages open state, side, delay)
├── ScTooltipTrigger (element that triggers tooltip on hover/focus)
└── ScTooltipContent (floating tooltip panel)
```

## Components

| Component          | Selector                  | Description                           |
| ------------------ | ------------------------- | ------------------------------------- |
| `ScTooltip`        | `div[sc-tooltip]`         | Root wrapper, manages state           |
| `ScTooltipTrigger` | `[sc-tooltip-trigger]`    | Element that shows tooltip on hover   |
| `ScTooltipContent` | `div[sc-tooltip-content]` | Floating tooltip panel with animation |

## Usage

### Basic Tooltip

```html
<div sc-tooltip>
  <button sc-tooltip-trigger>Hover me</button>
  <div sc-tooltip-content>Add to library</div>
</div>
```

### Different Sides

```html
<!-- Top (default) -->
<div sc-tooltip side="top">
  <button sc-tooltip-trigger>Top</button>
  <div sc-tooltip-content>Tooltip on top</div>
</div>

<!-- Bottom -->
<div sc-tooltip side="bottom">
  <button sc-tooltip-trigger>Bottom</button>
  <div sc-tooltip-content>Tooltip on bottom</div>
</div>

<!-- Left -->
<div sc-tooltip side="left">
  <button sc-tooltip-trigger>Left</button>
  <div sc-tooltip-content>Tooltip on left</div>
</div>

<!-- Right -->
<div sc-tooltip side="right">
  <button sc-tooltip-trigger>Right</button>
  <div sc-tooltip-content>Tooltip on right</div>
</div>
```

### Custom Delay

```html
<!-- 500ms delay -->
<div sc-tooltip [delayDuration]="500">
  <button sc-tooltip-trigger>Slow tooltip</button>
  <div sc-tooltip-content>This appears after 500ms</div>
</div>

<!-- No delay (instant) -->
<div sc-tooltip [delayDuration]="0">
  <button sc-tooltip-trigger>Instant tooltip</button>
  <div sc-tooltip-content>This appears instantly</div>
</div>
```

### Icon Button with Tooltip

```html
<div sc-tooltip>
  <button sc-tooltip-trigger class="icon-button">
    <svg><!-- icon --></svg>
    <span class="sr-only">Add item</span>
  </button>
  <div sc-tooltip-content>Add item</div>
</div>
```

### On Any Element

The trigger can be applied to any element, not just buttons:

```html
<div sc-tooltip>
  <span sc-tooltip-trigger class="underline cursor-help">What is this?</span>
  <div sc-tooltip-content>This is an explanation</div>
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

`ScTooltip` uses a signal for the `open` state:

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
  this.showTimeout = setTimeout(() => {
    this.tooltip.show();
  }, this.tooltip.delayDuration());
}
```

### Hover Persistence

The tooltip stays open when hovering over the content itself:

```typescript
// In ScTooltipContent
onMouseEnter(): void {
  this.tooltip.show();
}

onMouseLeave(): void {
  this.tooltip.hide();
}
```

## Accessibility

- `role="tooltip"` on the content
- Tooltip appears on keyboard focus (not just hover)
- Screen readers announce tooltip content

## Customization

All components accept a `class` input for custom styling:

```html
<div sc-tooltip-content class="bg-destructive text-destructive-foreground">Warning: This action cannot be undone</div>
```
