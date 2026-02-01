# Accordion Components

A vertically stacked set of interactive headings that reveal or hide associated content. Built on top of `@angular/aria/accordion` for robust accessibility support.

## Import

```typescript
import { ScAccordion, ScAccordionItem, ScAccordionHeader, ScAccordionTrigger, ScAccordionPanel, ScAccordionContent, ScAccordionContent2 } from '@semantic-components/ui';
```

## Architecture

```
ScAccordion (Root - uses AccordionGroup)
    ├── multiExpandable: boolean
    ├── disabled: boolean
    ├── wrap: boolean
    │
    ├── ScAccordionItem (styling wrapper)
    │     │
    │     ├── ScAccordionHeader (flex container for trigger)
    │     │      └── ScAccordionTrigger (uses AccordionTrigger)
    │     │            ├── panelId: string (links to panel)
    │     │            ├── expanded: boolean
    │     │            └── disabled: boolean
    │     │
    │     └── ScAccordionPanel (uses AccordionPanel)
    │           │
    │           ├── panelId: string (links to trigger)
    │           │
    │           └── ScAccordionContent (padding wrapper)
    │           └── ScAccordionContent2 (another content wrapper)
    │
    ├── ScAccordionItem
    └── ...
```

## Components

| Component             | Selector                       | Description                                    |
| --------------------- | ------------------------------ | ---------------------------------------------- |
| `ScAccordion`         | `div[sc-accordion]`            | Root wrapper using `AccordionGroup`            |
| `ScAccordionItem`     | `div[sc-accordion-item]`       | Styling wrapper for accordion item             |
| `ScAccordionHeader`   | `div[sc-accordion-header]`     | Flex container for trigger                     |
| `ScAccordionTrigger`  | `button[sc-accordion-trigger]` | Button to toggle item using `AccordionTrigger` |
| `ScAccordionPanel`    | `div[sc-accordion-panel]`      | Collapsible content using `AccordionPanel`     |
| `ScAccordionContent`  | `div[sc-accordion-content]`    | Content wrapper with default padding           |
| `ScAccordionContent2` | `div[sc-accordion-content-2]`  | Another content wrapper with default padding   |

## Inputs

### ScAccordion

| Input             | Type      | Default | Description                             |
| ----------------- | --------- | ------- | --------------------------------------- |
| `multiExpandable` | `boolean` | `true`  | Allow multiple items to be open at once |
| `disabled`        | `boolean` | `false` | Disable all accordion items             |
| `wrap`            | `boolean` | `false` | Wrap keyboard navigation at ends        |

### ScAccordionHeader

| Input   | Type     | Default | Description            |
| ------- | -------- | ------- | ---------------------- |
| `class` | `string` | `''`    | Additional CSS classes |

### ScAccordionTrigger

| Input      | Type      | Default      | Description                              |
| ---------- | --------- | ------------ | ---------------------------------------- |
| `panelId`  | `string`  | **required** | Links trigger to its corresponding panel |
| `expanded` | `boolean` | `false`      | Whether the item is expanded             |
| `disabled` | `boolean` | `false`      | Whether the trigger is disabled          |

The trigger includes built-in chevron icons that automatically rotate based on the expanded state.

### ScAccordionPanel

| Input     | Type     | Default      | Description                              |
| --------- | -------- | ------------ | ---------------------------------------- |
| `panelId` | `string` | **required** | Links panel to its corresponding trigger |

### ScAccordionContent

| Input   | Type     | Default | Description            |
| ------- | -------- | ------- | ---------------------- |
| `class` | `string` | `''`    | Additional CSS classes |

The `ScAccordionContent` component provides default padding (`pb-4 pt-0`) for accordion content.

### ScAccordionContent2

| Input   | Type     | Default | Description            |
| ------- | -------- | ------- | ---------------------- |
| `class` | `string` | `''`    | Additional CSS classes |

The `ScAccordionContent2` component provides default padding (`pb-4 pt-0`) for accordion content.

## Usage

### Basic Usage

Use `panelId` to link each trigger to its corresponding panel. By default, multiple panels can be open at the same time. Set `[multiExpandable]="false"` if you want only one panel open at a time.

```html
<div sc-accordion [multiExpandable]="false">
  <div sc-accordion-item>
    <div sc-accordion-header>
      <button sc-accordion-trigger panelId="item-1">Is it accessible?</button>
    </div>
    <div sc-accordion-panel panelId="item-1">
      <div sc-accordion-content>Yes. It adheres to the WAI-ARIA design pattern.</div>
    </div>
  </div>
  <div sc-accordion-item>
    <div sc-accordion-header>
      <button sc-accordion-trigger panelId="item-2">Is it styled?</button>
    </div>
    <div sc-accordion-panel panelId="item-2">
      <div sc-accordion-content>Yes. It comes with default styles that match other components.</div>
    </div>
  </div>
  <div sc-accordion-item>
    <div sc-accordion-header>
      <button sc-accordion-trigger panelId="item-3">Is it animated?</button>
    </div>
    <div sc-accordion-panel panelId="item-3">
      <div sc-accordion-content>Yes. It's animated by default with smooth transitions.</div>
    </div>
  </div>
</div>
```

### Multiple Expandable

Allow multiple items to be open simultaneously.

```html
<div sc-accordion [multiExpandable]="true">
  <div sc-accordion-item>
    <div sc-accordion-header>
      <button sc-accordion-trigger panelId="item-1" [expanded]="true">Section 1</button>
    </div>
    <div sc-accordion-panel panelId="item-1">
      <div sc-accordion-content>Content 1</div>
    </div>
  </div>
  <div sc-accordion-item>
    <div sc-accordion-header>
      <button sc-accordion-trigger panelId="item-2" [expanded]="true">Section 2</button>
    </div>
    <div sc-accordion-panel panelId="item-2">
      <div sc-accordion-content>Content 2</div>
    </div>
  </div>
  <div sc-accordion-item>
    <div sc-accordion-header>
      <button sc-accordion-trigger panelId="item-3">Section 3</button>
    </div>
    <div sc-accordion-panel panelId="item-3">
      <div sc-accordion-content>Content 3</div>
    </div>
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
  <div sc-accordion-header>
    <button sc-accordion-trigger panelId="disabled" [disabled]="true">Disabled Section</button>
  </div>
  <div sc-accordion-panel panelId="disabled">
    <div sc-accordion-content>Won't be shown</div>
  </div>
</div>
```

### Disabled Accordion

Disable the entire accordion.

```html
<div sc-accordion [disabled]="true">...</div>
```

## Features

- **Single or Multiple Expansion**: Control whether one or multiple panels can be open simultaneously
- **Smooth Animations**: Uses Angular's `animate.enter`/`animate.leave` with `tw-animate-css`
- **Built-in Icons**: Chevron icons automatically included and animated
- **Keyboard Navigation**: Full keyboard support with arrow keys
- **Fully Accessible**: Built on `@angular/aria/accordion` with proper ARIA attributes
- **Customizable**: All components accept custom classes
- **Type-Safe**: Full TypeScript support with Angular signals

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

- Items have `border-b` for visual separation (via `ScAccordionItem`)
- Triggers show underline on hover (removed when focused for better UX)
- Built-in chevron icons automatically switch between down/up states
- `ScAccordionContent` provides default padding (`pb-4 pt-0`)
- Focus states use a ring style for keyboard navigation
- All components support custom classes via the `class` input

## Animation

The accordion uses Angular's built-in `animate.enter` and `animate.leave` API combined with animations from `tw-animate-css`.

### Setup

Make sure you have `tw-animate-css` imported in your CSS:

```css
@import 'tw-animate-css';
```

### How It Works

- **Opening**: When a panel expands, Angular applies the `animate-accordion-down` class via `animate.enter`
- **Closing**: When a panel collapses, Angular applies the `animate-accordion-up` class via `animate.leave`
- **Height Calculation**: The component automatically sets the `--radix-accordion-content-height` CSS variable to the actual content height, ensuring smooth animations
- **Timing**: Angular handles all animation timing and cleanup automatically

The animations provide smooth height transitions from `0` to the content height when opening, and back to `0` when closing.
