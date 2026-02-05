# Radio Group

A set of checkable buttons where only one button can be checked at a time.

## Components

- `ScRadioGroup` - Container directive that provides radiogroup semantics (applied to div)
- `ScRadioField` - Container component for each radio option (applied to div or label)
- `ScRadio` - Directive for styling native radio inputs (applied to input[type="radio"])

## Usage

```html
<div sc-radio-group>
  <label sc-radio-field class="flex items-center space-x-2">
    <input type="radio" sc-radio name="options" value="option1" [(ngModel)]="selected" />
    <span>Option 1</span>
  </label>
  <label sc-radio-field class="flex items-center space-x-2">
    <input type="radio" sc-radio name="options" value="option2" [(ngModel)]="selected" />
    <span>Option 2</span>
  </label>
  <label sc-radio-field class="flex items-center space-x-2">
    <input type="radio" sc-radio name="options" value="option3" [(ngModel)]="selected" />
    <span>Option 3</span>
  </label>
</div>
```

## Horizontal Layout

```html
<div sc-radio-group class="flex flex-row gap-4">
  <label sc-radio-field class="flex items-center space-x-2">
    <input type="radio" sc-radio name="filter" value="all" [(ngModel)]="selected" />
    <span>All</span>
  </label>
  <label sc-radio-field class="flex items-center space-x-2">
    <input type="radio" sc-radio name="filter" value="unread" [(ngModel)]="selected" />
    <span>Unread</span>
  </label>
</div>
```

## Disabled

```html
<!-- Disable entire group using fieldset -->
<fieldset [disabled]="true">
  <div sc-radio-group>
    <label sc-radio-field class="flex items-center space-x-2">
      <input type="radio" sc-radio name="options" value="option1" [(ngModel)]="selected" />
      <span>Option 1</span>
    </label>
    <label sc-radio-field class="flex items-center space-x-2">
      <input type="radio" sc-radio name="options" value="option2" [(ngModel)]="selected" />
      <span>Option 2</span>
    </label>
  </div>
</fieldset>

<!-- Disable individual items -->
<div sc-radio-group>
  <label sc-radio-field class="flex items-center space-x-2">
    <input type="radio" sc-radio name="options" value="option1" [(ngModel)]="selected" />
    <span>Option 1</span>
  </label>
  <label sc-radio-field class="flex items-center space-x-2">
    <input type="radio" sc-radio name="options" value="option2" [(ngModel)]="selected" [disabled]="true" />
    <span>Option 2</span>
  </label>
</div>
```

## With Accessible Label

```html
<!-- Using aria-label -->
<div sc-radio-group aria-label="Choose your theme">
  <label sc-radio-field class="flex items-center space-x-2">
    <input type="radio" sc-radio name="theme" value="light" [(ngModel)]="selected" />
    <span>Light</span>
  </label>
  <label sc-radio-field class="flex items-center space-x-2">
    <input type="radio" sc-radio name="theme" value="dark" [(ngModel)]="selected" />
    <span>Dark</span>
  </label>
</div>

<!-- Using aria-labelledby with a visible heading -->
<div>
  <h3 id="theme-heading">Choose your theme</h3>
  <div sc-radio-group aria-labelledby="theme-heading">
    <label sc-radio-field class="flex items-center space-x-2">
      <input type="radio" sc-radio name="theme" value="light" [(ngModel)]="selected" />
      <span>Light</span>
    </label>
    <label sc-radio-field class="flex items-center space-x-2">
      <input type="radio" sc-radio name="theme" value="dark" [(ngModel)]="selected" />
      <span>Dark</span>
    </label>
  </div>
</div>
```

## API

### ScRadioGroup

Container directive for radio buttons that provides radiogroup semantics.

**Selector:** `div[sc-radio-group]`

**Inputs:**

| Input   | Type     | Default | Description            |
| ------- | -------- | ------- | ---------------------- |
| `class` | `string` | `''`    | Additional CSS classes |

**Host Attributes:**

- `role="radiogroup"` - Provides semantic grouping for screen readers
- You can add `aria-label` or `aria-labelledby` directly to the element

### ScRadioField

Container component for each radio option. Can be applied to `div` or `label` elements.

**Selector:** `div[sc-radio-field], label[sc-radio-field]`

**Inputs:**

| Input   | Type     | Default | Description            |
| ------- | -------- | ------- | ---------------------- |
| `class` | `string` | `''`    | Additional CSS classes |

### ScRadio

Directive for styling native radio inputs. Apply to `input[type="radio"]` elements.

**Selector:** `input[type="radio"][sc-radio]`

**Inputs:**

| Input   | Type     | Default | Description            |
| ------- | -------- | ------- | ---------------------- |
| `class` | `string` | `''`    | Additional CSS classes |

**State Management:**

- Use `[(ngModel)]` for template-driven forms
- Use `[formControl]` or `formControlName` for reactive forms
- All native input attributes are supported (`name`, `value`, `disabled`, `checked`, etc.)

## Customization

The `ScRadio` directive styles the native radio input using CSS. You can customize the appearance by passing custom classes:

```html
<div sc-radio-group>
  <label sc-radio-field>
    <input type="radio" sc-radio class="h-6 w-6 border-2" name="custom" value="option1" [(ngModel)]="selected" />
    <span>Custom sized radio</span>
  </label>
</div>
```

For complete custom styling, you can omit the `sc-radio` directive and style the native input directly:

```html
<div sc-radio-group>
  <label sc-radio-field>
    <input type="radio" class="your-custom-classes" name="custom" value="option1" [(ngModel)]="selected" />
    <span>Fully custom radio</span>
  </label>
</div>
```

## Data Attributes

All components have a `data-slot` attribute for styling purposes:

| Component    | data-slot     |
| ------------ | ------------- |
| ScRadioGroup | `radio-group` |
| ScRadioField | `radio-field` |
| ScRadio      | `radio`       |

## Accessibility

- Uses native `<input type="radio">` elements with custom styling via CSS
- Native radio inputs provide all semantic roles and ARIA attributes automatically
- Container uses `role="radiogroup"` for group semantics
- Keyboard accessible via native browser behavior (arrow keys navigate, space/enter to select)
- Native radio grouping via `name` attribute ensures only one selection
- Works seamlessly with associated `<label>` elements for click-to-focus
- Full native form integration (submission, validation, autofill)
- Supports `aria-label` for programmatic group labels (WCAG 4.1.2)
- Supports `aria-labelledby` to reference visible group labels (WCAG 4.1.2)
- Visual styling uses CSS `appearance-none` with custom ::before pseudo-element
- Compatible with all screen readers (NVDA, JAWS, VoiceOver, TalkBack)

## Architecture

The radio group uses a composable directive-based architecture:

```
div[sc-radio-group] (container with role="radiogroup")
└── label[sc-radio-field] (or div[sc-radio-field]) (for each radio option)
    └── input[type="radio"][sc-radio] (styled native radio input)
```

This pattern provides:

- **Simplicity**: Minimal abstraction over native HTML
- **Flexibility**: Use native inputs with standard form integration (ngModel, reactive forms)
- **Accessibility**: Native radio buttons provide full keyboard and screen reader support
- **Customization**: Direct access to native input attributes and styling
- **No Magic**: State management is handled through standard Angular forms, not internal component state
