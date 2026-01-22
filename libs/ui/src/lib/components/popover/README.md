# ScPopover Components

A set of Angular components for creating accessible popovers with shadcn/ui styling.

## Architecture

The components follow a dependency injection (DI) pattern where child components inject the parent `ScPopover` to access shared state.

```
ScPopover (root wrapper - manages open state, side, align)
├── ScPopoverTrigger (button that toggles popover)
└── ScPopoverContent (floating panel)
    └── ScPopoverClose (optional close button)
```

## Components

| Component          | Selector                     | Description                          |
| ------------------ | ---------------------------- | ------------------------------------ |
| `ScPopover`        | `div[sc-popover]`            | Root wrapper, manages state          |
| `ScPopoverTrigger` | `button[sc-popover-trigger]` | Button that toggles the popover      |
| `ScPopoverContent` | `div[sc-popover-content]`    | Floating panel with animations       |
| `ScPopoverClose`   | `button[sc-popover-close]`   | Optional button to close the popover |

## Usage

### Basic Popover

```html
<div sc-popover>
  <button sc-popover-trigger>Open Popover</button>
  <div sc-popover-content>
    <h4 class="font-medium">Title</h4>
    <p class="text-sm text-muted-foreground">Content goes here.</p>
  </div>
</div>
```

### Different Sides

```html
<!-- Top -->
<div sc-popover side="top">
  <button sc-popover-trigger>Top</button>
  <div sc-popover-content>Content</div>
</div>

<!-- Right -->
<div sc-popover side="right">
  <button sc-popover-trigger>Right</button>
  <div sc-popover-content>Content</div>
</div>

<!-- Bottom (default) -->
<div sc-popover side="bottom">
  <button sc-popover-trigger>Bottom</button>
  <div sc-popover-content>Content</div>
</div>

<!-- Left -->
<div sc-popover side="left">
  <button sc-popover-trigger>Left</button>
  <div sc-popover-content>Content</div>
</div>
```

### Alignment

```html
<!-- Align start -->
<div sc-popover align="start">
  <button sc-popover-trigger>Align Start</button>
  <div sc-popover-content>Content</div>
</div>

<!-- Align center (default) -->
<div sc-popover align="center">
  <button sc-popover-trigger>Align Center</button>
  <div sc-popover-content>Content</div>
</div>

<!-- Align end -->
<div sc-popover align="end">
  <button sc-popover-trigger>Align End</button>
  <div sc-popover-content>Content</div>
</div>
```

### With Close Button

```html
<div sc-popover>
  <button sc-popover-trigger>Open</button>
  <div sc-popover-content class="relative">
    <button sc-popover-close>
      <svg><!-- X icon --></svg>
    </button>
    <p>Content with close button</p>
  </div>
</div>
```

### Controlled Popover

```typescript
@Component({
  template: `
    <div sc-popover [(open)]="isOpen">
      <button sc-popover-trigger>Toggle</button>
      <div sc-popover-content>Content</div>
    </div>
  `,
})
export class MyComponent {
  isOpen = signal(false);
}
```

### Form Popover

```html
<div sc-popover>
  <button sc-popover-trigger>Update dimensions</button>
  <div sc-popover-content>
    <div class="grid gap-4">
      <div class="space-y-2">
        <h4 class="font-medium leading-none">Dimensions</h4>
        <p class="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
      </div>
      <div class="grid gap-2">
        <div class="grid grid-cols-3 items-center gap-4">
          <label for="width">Width</label>
          <input id="width" value="100%" class="col-span-2" />
        </div>
        <div class="grid grid-cols-3 items-center gap-4">
          <label for="height">Height</label>
          <input id="height" value="25px" class="col-span-2" />
        </div>
      </div>
    </div>
  </div>
</div>
```

## Keyboard Navigation

| Key      | Action          |
| -------- | --------------- |
| `Escape` | Close popover   |
| `Tab`    | Navigate within |

## Side Options

| Side     | Description                     |
| -------- | ------------------------------- |
| `bottom` | Appears below trigger (default) |
| `top`    | Appears above trigger           |
| `left`   | Appears to the left of trigger  |
| `right`  | Appears to the right of trigger |

## Align Options

| Align    | Description                      |
| -------- | -------------------------------- |
| `center` | Centered with trigger (default)  |
| `start`  | Aligned to start edge of trigger |
| `end`    | Aligned to end edge of trigger   |

## How It Works

### State Management

`ScPopover` uses a `model` signal for the `open` state:

```typescript
readonly open = model<boolean>(false);
```

`ScPopoverTrigger` toggles the state on click:

```typescript
togglePopover(): void {
  this.popover.open.update((v) => !v);
}
```

### Positioning

`ScPopoverContent` uses CDK connected overlay with positions computed from `side` and `align`:

```typescript
protected readonly position = computed(() => {
  const side = this.popover.side();
  const align = this.popover.align();
  return positionMap[side][align];
});
```

### Outside Click

The popover closes when clicking outside:

```html
<ng-template (overlayOutsideClick)="closePopover($event)"></ng-template>
```

## Accessibility

- `role="dialog"` on the content
- `aria-haspopup="dialog"` on the trigger
- `aria-expanded` reflects open state on trigger
- Escape key closes the popover
- Click outside closes the popover

## Customization

All components accept a `class` input for custom styling:

```html
<div sc-popover-content class="w-96">
  <!-- wider popover -->
</div>
```
