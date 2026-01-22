# Checkbox

A control that allows the user to toggle between checked and not checked.

## Components

- `ScCheckbox` - Checkbox control with checked, unchecked, and indeterminate states

## Usage

```html
<div class="flex items-center space-x-2">
  <sc-checkbox [(checked)]="accepted" id="terms" />
  <label for="terms">Accept terms and conditions</label>
</div>
```

## With Description

```html
<div class="items-top flex space-x-2">
  <sc-checkbox [(checked)]="marketing" id="marketing" />
  <div class="grid gap-1.5 leading-none">
    <label for="marketing">Marketing emails</label>
    <p class="text-sm text-muted-foreground">Receive emails about new products, features, and more.</p>
  </div>
</div>
```

## Indeterminate State

```html
<sc-checkbox [checked]="allSelected" [indeterminate]="someSelected" (checkedChange)="toggleAll($event)" />
```

## Disabled

```html
<sc-checkbox [disabled]="true" />
<sc-checkbox [checked]="true" [disabled]="true" />
```

## Inputs

| Input           | Type      | Default | Description                       |
| --------------- | --------- | ------- | --------------------------------- |
| `checked`       | `boolean` | `false` | Whether checkbox is checked       |
| `disabled`      | `boolean` | `false` | Whether checkbox is disabled      |
| `indeterminate` | `boolean` | `false` | Whether checkbox is indeterminate |
| `class`         | `string`  | `''`    | Additional CSS classes            |

## Outputs

| Output          | Type      | Description                      |
| --------------- | --------- | -------------------------------- |
| `checkedChange` | `boolean` | Emits when checked state changes |

## Data Attributes

| Attribute       | Values                                      | Description    |
| --------------- | ------------------------------------------- | -------------- |
| `data-state`    | `checked` \| `unchecked` \| `indeterminate` | Current state  |
| `data-disabled` | present when disabled                       | Disabled state |

## Accessibility

- Uses `role="checkbox"` for proper semantics
- `aria-checked` attribute: `true`, `false`, or `mixed` (indeterminate)
- `aria-disabled` for disabled state
- Keyboard accessible (Space to toggle)
- Focus ring for keyboard navigation
- Works with associated `<label>` elements via `id`
