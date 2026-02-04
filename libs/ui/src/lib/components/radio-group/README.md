# Radio Group

A set of checkable buttons where only one button can be checked at a time.

## Components

- `ScRadioGroup` - Container directive for radio buttons that manages selection (applied to div)
- `ScRadioGroupItem` - Individual radio button component within the group
- `ScInvisibleRadio` - Directive for native input styling (applied to input[type="radio"])
- `ScRadioIndicator` - Directive for styling the visual radio circle (applied to span)
- `ScRadioCheckedIcon` - Directive for styling the checked indicator icon (applied to svg)

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
| `name`           | `string`         | `''`    | Name attribute for native radio grouping        |
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

## Advanced: Custom Radio Indicator

For advanced customization, you can use the directives directly:

```html
<div sc-radio-group [(value)]="selected" name="custom">
  <div class="relative inline-flex items-center gap-2">
    <div class="relative inline-flex h-4 w-4">
      <input type="radio" sc-invisible-radio name="custom" value="opt1" [(ngModel)]="selected" />
      <span sc-radio-indicator>
        @if (selected === 'opt1') {
          <svg si-circle-icon sc-radio-checked-icon></svg>
        }
      </span>
    </div>
    <label>Option 1</label>
  </div>
</div>
```

Or create a completely custom visual:

```html
<div class="relative inline-flex h-6 w-6">
  <input type="radio" sc-invisible-radio name="custom" value="opt1" [(ngModel)]="selected" />
  <span sc-radio-indicator class="h-6 w-6">
    <!-- Your custom icon -->
  </span>
</div>
```

## Data Attributes

| Attribute       | Values                   | Description    |
| --------------- | ------------------------ | -------------- |
| `data-state`    | `checked` \| `unchecked` | Current state  |
| `data-disabled` | present when disabled    | Disabled state |

## Accessibility

- Uses native `<input type="radio">` with `opacity: 0` for full accessibility
- Native radio inputs provide all semantic roles and ARIA attributes automatically
- Container uses `role="radiogroup"` for group semantics
- Keyboard accessible via native browser behavior (arrow keys navigate, space/enter to select)
- Native radio grouping via `name` attribute ensures only one selection
- Works seamlessly with associated `<label>` elements
- Full native form integration (submission, validation, autofill)
- Supports `aria-label` for programmatic group labels (WCAG 4.1.2)
- Supports `aria-labelledby` to reference visible group labels (WCAG 4.1.2)
- Visual representation is marked with appropriate indicators
- Compatible with all screen readers (NVDA, JAWS, VoiceOver, TalkBack)

## Architecture

The radio group uses a layered approach:

```
div[sc-radio-group] (container with role="radiogroup")
└── sc-radio-group-item (for each radio option)
    ├── input[sc-invisible-radio] (native radio, opacity: 0, covers full area)
    └── span[sc-radio-indicator] (visual circle)
        └── svg[sc-radio-checked-icon] (filled circle when checked)
```

This pattern provides:
- **Native behavior**: All browser/OS radio features work automatically
- **Accessibility**: Screen readers interact with real radio buttons
- **Styling**: Visual representation is fully customizable
- **Simplicity**: No manual ARIA management or keyboard handling needed
