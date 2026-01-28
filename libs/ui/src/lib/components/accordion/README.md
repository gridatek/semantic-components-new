# Accordion Components

A vertically stacked set of interactive headings that reveal or hide associated content. Built on top of `@angular/aria/accordion` for robust accessibility support.

## Architecture

```
ScAccordion (Root - uses AccordionGroup)
    ├── multiExpandable: boolean
    ├── disabled: boolean
    ├── wrap: boolean
    │
    ├── ScAccordionItem (styling wrapper)
    │     │
    │     ├── ScAccordionTrigger (uses AccordionTrigger)
    │     │     ├── panelId: string (links to panel)
    │     │     ├── expanded: boolean
    │     │     └── disabled: boolean
    │     │
    │     └── ScAccordionPanel (uses AccordionPanel)
    │           └── panelId: string (links to trigger)
    │
    ├── ScAccordionItem
    └── ...
```

## Components

| Component            | Selector                       | Description                                    |
| -------------------- | ------------------------------ | ---------------------------------------------- |
| `ScAccordion`        | `div[sc-accordion]`            | Root wrapper using `AccordionGroup`            |
| `ScAccordionItem`    | `div[sc-accordion-item]`       | Styling wrapper for accordion item             |
| `ScAccordionTrigger` | `button[sc-accordion-trigger]` | Button to toggle item using `AccordionTrigger` |
| `ScAccordionPanel`   | `div[sc-accordion-panel]`      | Collapsible content using `AccordionPanel`     |

## Inputs

### ScAccordion

| Input             | Type      | Default | Description                             |
| ----------------- | --------- | ------- | --------------------------------------- |
| `multiExpandable` | `boolean` | `false` | Allow multiple items to be open at once |
| `disabled`        | `boolean` | `false` | Disable all accordion items             |
| `wrap`            | `boolean` | `false` | Wrap keyboard navigation at ends        |

### ScAccordionTrigger

| Input      | Type      | Default      | Description                              |
| ---------- | --------- | ------------ | ---------------------------------------- |
| `panelId`  | `string`  | **required** | Links trigger to its corresponding panel |
| `expanded` | `boolean` | `false`      | Whether the item is expanded             |
| `disabled` | `boolean` | `false`      | Whether the trigger is disabled          |

### ScAccordionPanel

| Input     | Type     | Default      | Description                              |
| --------- | -------- | ------------ | ---------------------------------------- |
| `panelId` | `string` | **required** | Links panel to its corresponding trigger |

## Usage

### Basic Usage

Use `panelId` to link each trigger to its corresponding panel.

```html
<div sc-accordion>
  <div sc-accordion-item>
    <button sc-accordion-trigger panelId="item-1" [expanded]="true">Section 1</button>
    <div sc-accordion-panel panelId="item-1">Content for section 1</div>
  </div>
  <div sc-accordion-item>
    <button sc-accordion-trigger panelId="item-2">Section 2</button>
    <div sc-accordion-panel panelId="item-2">Content for section 2</div>
  </div>
</div>
```

### Multiple Expandable

Allow multiple items to be open simultaneously.

```html
<div sc-accordion [multiExpandable]="true">
  <div sc-accordion-item>
    <button sc-accordion-trigger panelId="item-1" [expanded]="true">Section 1</button>
    <div sc-accordion-panel panelId="item-1">Content 1</div>
  </div>
  <div sc-accordion-item>
    <button sc-accordion-trigger panelId="item-2" [expanded]="true">Section 2</button>
    <div sc-accordion-panel panelId="item-2">Content 2</div>
  </div>
  <div sc-accordion-item>
    <button sc-accordion-trigger panelId="item-3">Section 3</button>
    <div sc-accordion-panel panelId="item-3">Content 3</div>
  </div>
</div>
```

### Two-Way Binding

Bind to the `expanded` state of individual triggers.

```html
<button sc-accordion-trigger panelId="item-1" [(expanded)]="isOpen">Section 1</button>
```

### Disabled Item

Disable individual triggers.

```html
<div sc-accordion-item>
  <button sc-accordion-trigger panelId="disabled" [disabled]="true">Disabled Section</button>
  <div sc-accordion-panel panelId="disabled">Won't be shown</div>
</div>
```

### Disabled Accordion

Disable the entire accordion.

```html
<div sc-accordion [disabled]="true">...</div>
```

## Accessibility

Built on `@angular/aria/accordion`, providing:

- Trigger buttons have `aria-expanded` indicating open state
- Trigger buttons have `aria-controls` pointing to their panel
- Panels have `role="region"` and `aria-labelledby` pointing to their trigger
- Keyboard navigation with arrow keys between triggers
- `data-state` attribute on triggers and panels (`open` / `closed`)
- Disabled items have `disabled` attribute and are skipped in keyboard navigation

## Styling

The components use Tailwind CSS with shadcn/ui design tokens:

- Items have `border-b` for visual separation
- Triggers show underline on hover
- Chevron rotates 180° when open
- Content has padding at bottom (`pb-4`)

## Animation

For smooth animations, add these to your Tailwind config:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
};
```
