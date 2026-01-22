# Radio Group

A set of checkable buttons where only one button can be checked at a time.

## Components

- `ScRadioGroup` - Container for radio buttons that manages selection
- `ScRadioGroupItem` - Individual radio button within the group

## Usage

```html
<div sc-radio-group [(value)]="selected">
  <div class="flex items-center space-x-2">
    <sc-radio-group-item value="option1" id="r1" />
    <label for="r1">Option 1</label>
  </div>
  <div class="flex items-center space-x-2">
    <sc-radio-group-item value="option2" id="r2" />
    <label for="r2">Option 2</label>
  </div>
  <div class="flex items-center space-x-2">
    <sc-radio-group-item value="option3" id="r3" />
    <label for="r3">Option 3</label>
  </div>
</div>
```

## Horizontal Layout

```html
<div sc-radio-group [(value)]="selected" class="flex flex-row gap-4">
  <div class="flex items-center space-x-2">
    <sc-radio-group-item value="all" id="h1" />
    <label for="h1">All</label>
  </div>
  <div class="flex items-center space-x-2">
    <sc-radio-group-item value="unread" id="h2" />
    <label for="h2">Unread</label>
  </div>
</div>
```

## Disabled

```html
<!-- Disable entire group -->
<div sc-radio-group [disabled]="true" value="option1">
  <sc-radio-group-item value="option1" id="d1" />
  <sc-radio-group-item value="option2" id="d2" />
</div>

<!-- Disable individual items -->
<div sc-radio-group [(value)]="selected">
  <sc-radio-group-item value="option1" id="i1" />
  <sc-radio-group-item value="option2" id="i2" [disabled]="true" />
</div>
```

## ScRadioGroup Inputs

| Input      | Type             | Default | Description                    |
| ---------- | ---------------- | ------- | ------------------------------ |
| `value`    | `string \| null` | `null`  | Selected value (model)         |
| `disabled` | `boolean`        | `false` | Whether all items are disabled |
| `class`    | `string`         | `''`    | Additional CSS classes         |

## ScRadioGroup Outputs

| Output        | Type             | Description                  |
| ------------- | ---------------- | ---------------------------- |
| `valueChange` | `string \| null` | Emits when selection changes |

## ScRadioGroupItem Inputs

| Input      | Type      | Default | Description                   |
| ---------- | --------- | ------- | ----------------------------- |
| `value`    | `string`  | -       | Value of this item (required) |
| `disabled` | `boolean` | `false` | Whether this item is disabled |
| `class`    | `string`  | `''`    | Additional CSS classes        |

## Data Attributes

| Attribute       | Values                   | Description    |
| --------------- | ------------------------ | -------------- |
| `data-state`    | `checked` \| `unchecked` | Current state  |
| `data-disabled` | present when disabled    | Disabled state |

## Accessibility

- Uses `role="radiogroup"` on container
- Uses `role="radio"` on items
- `aria-checked` attribute for checked state
- `aria-disabled` for disabled state
- Arrow keys navigate between options
- Space selects the focused option
- Only one item is in tab order at a time (roving tabindex)
- Focus ring for keyboard navigation
