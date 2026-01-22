# ScCollapsible Components

A set of Angular components for creating accessible collapsible sections with shadcn/ui styling.

## Architecture

The components follow a dependency injection (DI) pattern where child components inject the parent `ScCollapsible` to access shared state.

```
ScCollapsible (root wrapper - manages open state)
├── ScCollapsibleTrigger (button that toggles open/closed)
└── ScCollapsibleContent (content that shows/hides)
```

## Components

| Component              | Selector                         | Description                     |
| ---------------------- | -------------------------------- | ------------------------------- |
| `ScCollapsible`        | `div[sc-collapsible]`            | Root wrapper, manages state     |
| `ScCollapsibleTrigger` | `button[sc-collapsible-trigger]` | Button that toggles the content |
| `ScCollapsibleContent` | `div[sc-collapsible-content]`    | Content that expands/collapses  |

## Usage

### Basic Collapsible

```html
<div sc-collapsible class="w-[350px] space-y-2">
  <div class="flex items-center justify-between">
    <h4 class="text-sm font-semibold">Can I use this?</h4>
    <button sc-collapsible-trigger>
      <svg><!-- chevron icon --></svg>
    </button>
  </div>
  <div sc-collapsible-content>
    <p>Yes. It's free and open source.</p>
  </div>
</div>
```

### Initially Open

```html
<div sc-collapsible [open]="true">
  <button sc-collapsible-trigger>Toggle</button>
  <div sc-collapsible-content>This content is visible by default.</div>
</div>
```

### Disabled

```html
<div sc-collapsible [disabled]="true">
  <button sc-collapsible-trigger>Toggle (disabled)</button>
  <div sc-collapsible-content>This cannot be toggled.</div>
</div>
```

### Controlled

```typescript
@Component({
  template: `
    <div sc-collapsible [(open)]="isOpen">
      <button sc-collapsible-trigger>Toggle</button>
      <div sc-collapsible-content>Content</div>
    </div>
    <button (click)="isOpen.set(!isOpen())">External Toggle</button>
  `,
})
export class MyComponent {
  isOpen = signal(false);
}
```

### With Chevron Animation

```html
<div sc-collapsible #collapsible="scCollapsible">
  <button sc-collapsible-trigger class="flex items-center gap-2">
    <span>Toggle</span>
    <svg class="size-4 transition-transform duration-200" [class.rotate-180]="collapsible.open()">
      <path d="m6 9 6 6 6-6" />
    </svg>
  </button>
  <div sc-collapsible-content>Content here</div>
</div>
```

## Data Attributes

| Attribute    | Values           | Description   |
| ------------ | ---------------- | ------------- |
| `data-state` | `open`, `closed` | Current state |

You can use these for CSS styling:

```css
[data-state='open'] {
  /* styles when open */
}

[data-state='closed'] {
  /* styles when closed */
}
```

## How It Works

### State Management

`ScCollapsible` uses a `model` signal for the `open` state:

```typescript
readonly open = model<boolean>(false);

toggle(): void {
  if (!this.disabled()) {
    this.open.update((v) => !v);
  }
}
```

### Content Visibility

`ScCollapsibleContent` conditionally renders content:

```typescript
template: `
  @if (collapsible.open()) {
    <ng-content />
  }
`;
```

## Accessibility

- `aria-expanded` on trigger reflects open state
- `aria-disabled` when disabled
- Trigger is a button for keyboard accessibility

## Customization

All components accept a `class` input for custom styling:

```html
<div sc-collapsible class="border rounded-lg p-4">
  <!-- styled container -->
</div>

<div sc-collapsible-content class="pt-4">
  <!-- content with padding -->
</div>
```
