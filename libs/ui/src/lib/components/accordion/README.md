# Accordion Components

A vertically stacked set of interactive headings that reveal or hide associated content.

## Architecture

```
ScAccordion (Root)
    ├── type: 'single' | 'multiple'
    ├── collapsible: boolean (single mode only)
    ├── value: model<string | string[]>
    │
    ├── ScAccordionItem (value: string)
    │     ├── isOpen: computed
    │     │
    │     ├── ScAccordionTrigger (button with chevron)
    │     │
    │     └── ScAccordionContent (collapsible region)
    │
    ├── ScAccordionItem
    └── ...
```

## Components

| Component            | Selector                       | Description                            |
| -------------------- | ------------------------------ | -------------------------------------- |
| `ScAccordion`        | `div[sc-accordion]`            | Root wrapper with mode and value state |
| `ScAccordionItem`    | `div[sc-accordion-item]`       | Individual accordion item              |
| `ScAccordionTrigger` | `button[sc-accordion-trigger]` | Button to toggle item                  |
| `ScAccordionContent` | `div[sc-accordion-content]`    | Collapsible content region             |

## Inputs

### ScAccordion

| Input         | Type                     | Default    | Description                              |
| ------------- | ------------------------ | ---------- | ---------------------------------------- |
| `type`        | `'single' \| 'multiple'` | `'single'` | Single or multiple items open            |
| `collapsible` | `boolean`                | `false`    | Allow closing all items (single mode)    |
| `value`       | `string \| string[]`     | `''`       | Currently open item(s), two-way bindable |

### ScAccordionItem

| Input      | Type      | Default      | Description                     |
| ---------- | --------- | ------------ | ------------------------------- |
| `value`    | `string`  | **required** | Unique identifier for this item |
| `disabled` | `boolean` | `false`      | Whether the item is disabled    |

## Usage

### Single Mode (Default)

Only one item can be open at a time. Clicking another item closes the current one.

```html
<div sc-accordion [value]="'item-1'">
  <div sc-accordion-item value="item-1">
    <button sc-accordion-trigger>Section 1</button>
    <div sc-accordion-content>Content for section 1</div>
  </div>
  <div sc-accordion-item value="item-2">
    <button sc-accordion-trigger>Section 2</button>
    <div sc-accordion-content>Content for section 2</div>
  </div>
</div>
```

### Single Mode with Collapsible

Allows closing all items by clicking the open item again.

```html
<div sc-accordion [value]="'item-1'" [collapsible]="true">...</div>
```

### Multiple Mode

Multiple items can be open simultaneously.

```html
<div sc-accordion type="multiple" [value]="['item-1', 'item-2']">
  <div sc-accordion-item value="item-1">
    <button sc-accordion-trigger>Section 1</button>
    <div sc-accordion-content>Content 1</div>
  </div>
  <div sc-accordion-item value="item-2">
    <button sc-accordion-trigger>Section 2</button>
    <div sc-accordion-content>Content 2</div>
  </div>
  <div sc-accordion-item value="item-3">
    <button sc-accordion-trigger>Section 3</button>
    <div sc-accordion-content>Content 3</div>
  </div>
</div>
```

### Two-Way Binding

```html
<div sc-accordion [(value)]="openItem">...</div>
```

### Disabled Item

```html
<div sc-accordion-item value="disabled" [disabled]="true">
  <button sc-accordion-trigger>Disabled Section</button>
  <div sc-accordion-content>Won't be shown</div>
</div>
```

## Accessibility

- Trigger buttons have `aria-expanded` indicating open state
- Content regions have `role="region"`
- `data-state` attribute on items and triggers (`open` / `closed`)
- Disabled items have `data-disabled` and `disabled` attributes
- Chevron icon rotates to indicate state

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
