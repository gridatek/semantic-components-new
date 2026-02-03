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

## With Accessible Label

```html
<!-- Using aria-label -->
<div sc-radio-group [(value)]="selected" label="Choose your theme">
  <div class="flex items-center space-x-2">
    <sc-radio-group-item value="light" id="light" />
    <label for="light">Light</label>
  </div>
  <div class="flex items-center space-x-2">
    <sc-radio-group-item value="dark" id="dark" />
    <label for="dark">Dark</label>
  </div>
</div>

<!-- Using aria-labelledby with a visible heading -->
<div>
  <h3 id="theme-heading">Choose your theme</h3>
  <div sc-radio-group [(value)]="selected" ariaLabelledby="theme-heading">
    <div class="flex items-center space-x-2">
      <sc-radio-group-item value="light" id="light" />
      <label for="light">Light</label>
    </div>
    <div class="flex items-center space-x-2">
      <sc-radio-group-item value="dark" id="dark" />
      <label for="dark">Dark</label>
    </div>
  </div>
</div>
```

## ScRadioGroup Inputs

| Input            | Type             | Default | Description                                     |
| ---------------- | ---------------- | ------- | ----------------------------------------------- |
| `value`          | `string \| null` | `null`  | Selected value (model)                          |
| `disabled`       | `boolean`        | `false` | Whether all items are disabled                  |
| `class`          | `string`         | `''`    | Additional CSS classes                          |
| `label`          | `string`         | `''`    | Accessible label for the radio group (WCAG)     |
| `ariaLabelledby` | `string`         | `''`    | ID of element that labels the group (WCAG)      |

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
- Supports `aria-label` for programmatic group labels (WCAG 4.1.2)
- Supports `aria-labelledby` to reference visible group labels (WCAG 4.1.2)
- `aria-checked` attribute for checked state
- `aria-disabled` for disabled state
- Arrow keys navigate between options (Up/Down/Left/Right)
- Space selects the focused option
- Only one item is in tab order at a time (roving tabindex)
- Focus ring for keyboard navigation
