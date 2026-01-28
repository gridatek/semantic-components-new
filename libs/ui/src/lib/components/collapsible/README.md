# Collapsible Components

An interactive component which expands/collapses a panel. Built on top of `@angular/aria/accordion` for robust accessibility support.

## Architecture

```
ScCollapsible (Root - uses AccordionGroup)
    ├── disabled: boolean
    │
    ├── ScCollapsibleTrigger (uses AccordionTrigger)
    │     ├── panelId: string (links to panel)
    │     ├── expanded: boolean
    │     └── disabled: boolean
    │
    └── ScCollapsiblePanel (uses AccordionPanel)
          └── panelId: string (links to trigger)
```

## Components

| Component              | Selector                         | Description                                     |
| ---------------------- | -------------------------------- | ----------------------------------------------- |
| `ScCollapsible`        | `div[sc-collapsible]`            | Root wrapper using `AccordionGroup`             |
| `ScCollapsibleTrigger` | `button[sc-collapsible-trigger]` | Button to toggle panel using `AccordionTrigger` |
| `ScCollapsiblePanel`   | `div[sc-collapsible-panel]`      | Collapsible content using `AccordionPanel`      |

## Inputs

### ScCollapsible

| Input      | Type      | Default | Description             |
| ---------- | --------- | ------- | ----------------------- |
| `disabled` | `boolean` | `false` | Disable the collapsible |

### ScCollapsibleTrigger

| Input      | Type      | Default      | Description                              |
| ---------- | --------- | ------------ | ---------------------------------------- |
| `panelId`  | `string`  | **required** | Links trigger to its corresponding panel |
| `expanded` | `boolean` | `false`      | Whether the panel is expanded            |
| `disabled` | `boolean` | `false`      | Whether the trigger is disabled          |

### ScCollapsiblePanel

| Input     | Type     | Default      | Description                              |
| --------- | -------- | ------------ | ---------------------------------------- |
| `panelId` | `string` | **required** | Links panel to its corresponding trigger |

## Usage

### Basic Collapsible

Use `panelId` to link the trigger to its corresponding panel.

```html
<div sc-collapsible class="w-[350px] space-y-2">
  <div class="flex items-center justify-between">
    <h4 class="text-sm font-semibold">Can I use this?</h4>
    <button sc-collapsible-trigger panelId="faq-1">
      <svg><!-- chevron icon --></svg>
    </button>
  </div>
  <div sc-collapsible-panel panelId="faq-1">
    <p>Yes. It's free and open source.</p>
  </div>
</div>
```

### Initially Open

```html
<div sc-collapsible>
  <button sc-collapsible-trigger panelId="open-demo" [expanded]="true">Toggle</button>
  <div sc-collapsible-panel panelId="open-demo">This content is visible by default.</div>
</div>
```

### Disabled

```html
<div sc-collapsible [disabled]="true">
  <button sc-collapsible-trigger panelId="disabled-demo">Toggle (disabled)</button>
  <div sc-collapsible-panel panelId="disabled-demo">This cannot be toggled.</div>
</div>
```

### Two-Way Binding

Bind to the `expanded` state of the trigger.

```typescript
@Component({
  template: `
    <div sc-collapsible>
      <button sc-collapsible-trigger panelId="controlled" [(expanded)]="isOpen">Toggle</button>
      <div sc-collapsible-panel panelId="controlled">Content</div>
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
<div sc-collapsible>
  <button sc-collapsible-trigger panelId="chevron-demo" #trigger="scCollapsibleTrigger" class="flex items-center gap-2">
    <span>Toggle</span>
    <svg class="size-4 transition-transform duration-200" [class.rotate-180]="trigger.expanded()">
      <path d="m6 9 6 6 6-6" />
    </svg>
  </button>
  <div sc-collapsible-panel panelId="chevron-demo">Content here</div>
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

## Accessibility

Built on `@angular/aria/accordion`, providing:

- Trigger button has `aria-expanded` indicating open state
- Trigger button has `aria-controls` pointing to its panel
- Panel has `role="region"` and `aria-labelledby` pointing to its trigger
- `data-state` attribute on trigger and panel (`open` / `closed`)
- Disabled state is properly communicated via `disabled` attribute

## Customization

All components accept a `class` input for custom styling:

```html
<div sc-collapsible class="border rounded-lg p-4">
  <!-- styled container -->
</div>

<div sc-collapsible-panel panelId="styled" class="pt-4">
  <!-- content with padding -->
</div>
```
