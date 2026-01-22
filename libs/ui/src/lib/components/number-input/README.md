# Number Input

A numeric input component with increment and decrement buttons.

## Usage

```html
<div sc-number-input [(value)]="quantity" [min]="1" [max]="10">
  <button sc-number-input-decrement></button>
  <input sc-number-input-field />
  <button sc-number-input-increment></button>
</div>
```

## Components

### ScNumberInput

Root container that manages numeric state.

**Selector:** `[sc-number-input]`

**Inputs:**

| Input        | Type             | Default | Description              |
| ------------ | ---------------- | ------- | ------------------------ |
| `min`        | `number \| null` | `null`  | Minimum allowed value    |
| `max`        | `number \| null` | `null`  | Maximum allowed value    |
| `step`       | `number`         | `1`     | Increment/decrement step |
| `disabled`   | `boolean`        | `false` | Disabled state           |
| `allowEmpty` | `boolean`        | `true`  | Allow null/empty value   |
| `class`      | `string`         | `''`    | Additional CSS classes   |

**Two-way Bindings:**

| Binding | Type             | Default | Description   |
| ------- | ---------------- | ------- | ------------- |
| `value` | `number \| null` | `null`  | Current value |

**Computed Properties:**

- `canIncrement` - Whether increment is allowed
- `canDecrement` - Whether decrement is allowed

**Methods:**

- `increment()` - Increase value by step
- `decrement()` - Decrease value by step
- `setValue(value)` - Set value with constraints

### ScNumberInputField

The input field for displaying and editing the value.

**Selector:** `input[sc-number-input-field]`

**Inputs:**

| Input   | Type     | Default | Description    |
| ------- | -------- | ------- | -------------- |
| `class` | `string` | `''`    | Additional CSS |

### ScNumberInputIncrement

Button to increase the value.

**Selector:** `button[sc-number-input-increment]`

**Inputs:**

| Input   | Type     | Default | Description    |
| ------- | -------- | ------- | -------------- |
| `class` | `string` | `''`    | Additional CSS |

### ScNumberInputDecrement

Button to decrease the value.

**Selector:** `button[sc-number-input-decrement]`

**Inputs:**

| Input   | Type     | Default | Description    |
| ------- | -------- | ------- | -------------- |
| `class` | `string` | `''`    | Additional CSS |

### ScNumberInputStepper

Vertical stepper with up/down arrows (alternative to separate buttons).

**Selector:** `[sc-number-input-stepper]`

**Inputs:**

| Input   | Type     | Default | Description    |
| ------- | -------- | ------- | -------------- |
| `class` | `string` | `''`    | Additional CSS |

## Examples

### Basic

```html
<div sc-number-input [(value)]="count">
  <button sc-number-input-decrement></button>
  <input sc-number-input-field />
  <button sc-number-input-increment></button>
</div>
```

### With Min/Max

```html
<div sc-number-input [(value)]="quantity" [min]="1" [max]="99">
  <button sc-number-input-decrement></button>
  <input sc-number-input-field />
  <button sc-number-input-increment></button>
</div>
```

### Custom Step

```html
<div sc-number-input [(value)]="price" [step]="0.5">
  <button sc-number-input-decrement></button>
  <input sc-number-input-field />
  <button sc-number-input-increment></button>
</div>
```

### Decimal Values

```html
<div sc-number-input [(value)]="amount" [step]="0.01" [min]="0">
  <button sc-number-input-decrement></button>
  <input sc-number-input-field />
  <button sc-number-input-increment></button>
</div>
```

### Vertical Stepper

```html
<div sc-number-input [(value)]="value" class="w-24">
  <input sc-number-input-field />
  <div sc-number-input-stepper></div>
</div>
```

### Disabled

```html
<div sc-number-input [value]="10" [disabled]="true">
  <button sc-number-input-decrement></button>
  <input sc-number-input-field />
  <button sc-number-input-increment></button>
</div>
```

### Quantity Selector

```html
<div class="flex items-center gap-4">
  <span>Quantity:</span>
  <div sc-number-input [(value)]="qty" [min]="1" [max]="10" class="w-28">
    <button sc-number-input-decrement></button>
    <input sc-number-input-field />
    <button sc-number-input-increment></button>
  </div>
</div>
```

### With Label

```html
<div class="space-y-2">
  <label class="text-sm font-medium">Age</label>
  <div sc-number-input [(value)]="age" [min]="0" [max]="120" class="w-full">
    <button sc-number-input-decrement></button>
    <input sc-number-input-field />
    <button sc-number-input-increment></button>
  </div>
</div>
```

### Price Input

```html
<div class="flex items-center gap-2">
  <span>$</span>
  <div sc-number-input [(value)]="price" [min]="0" [step]="0.01" class="flex-1">
    <input sc-number-input-field class="text-left" />
    <div sc-number-input-stepper></div>
  </div>
</div>
```

## Keyboard Navigation

| Key         | Action       |
| ----------- | ------------ |
| `ArrowUp`   | Increment    |
| `ArrowDown` | Decrement    |
| `Tab`       | Move to next |
| `Shift+Tab` | Move to prev |

## Features

- **Min/Max Constraints**: Enforce value boundaries
- **Custom Step**: Support any step value including decimals
- **Decimal Precision**: Handles floating-point precision correctly
- **Empty Values**: Optional null value support
- **Disabled State**: Full disabled support
- **Keyboard Support**: Arrow keys for increment/decrement
- **Two Layouts**: Horizontal buttons or vertical stepper
- **Two-way Binding**: Sync with `[(value)]`

## Accessibility

- Proper `aria-valuemin`, `aria-valuemax`, `aria-valuenow` attributes
- `aria-label` on increment/decrement buttons
- Disabled states properly communicated
- Keyboard navigation support
- Focus management within component
