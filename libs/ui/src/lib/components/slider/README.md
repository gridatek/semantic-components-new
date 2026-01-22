# Slider

An input where the user selects a value from within a given range.

## Components

- `ScSlider` - Range slider with track, range, and draggable thumb

## Usage

```html
<div sc-slider [(value)]="volume"></div>
```

## With Min/Max

```html
<div sc-slider [(value)]="price" [min]="0" [max]="1000"></div>
```

## With Step

```html
<div sc-slider [(value)]="quantity" [step]="10"></div>
```

## Disabled

```html
<div sc-slider [value]="50" [disabled]="true"></div>
```

## With Labels

```html
<div class="space-y-2">
  <div class="flex justify-between text-sm">
    <span>Volume</span>
    <span>{{ volume() }}%</span>
  </div>
  <div sc-slider [(value)]="volume"></div>
</div>
```

## Inputs

| Input      | Type      | Default | Description                |
| ---------- | --------- | ------- | -------------------------- |
| `value`    | `number`  | `0`     | Current value (model)      |
| `min`      | `number`  | `0`     | Minimum value              |
| `max`      | `number`  | `100`   | Maximum value              |
| `step`     | `number`  | `1`     | Step increment             |
| `disabled` | `boolean` | `false` | Whether slider is disabled |
| `class`    | `string`  | `''`    | Additional CSS classes     |

## Outputs

| Output        | Type     | Description              |
| ------------- | -------- | ------------------------ |
| `valueChange` | `number` | Emits when value changes |

## Keyboard Navigation

| Key        | Action                |
| ---------- | --------------------- |
| ArrowRight | Increase by step      |
| ArrowUp    | Increase by step      |
| ArrowLeft  | Decrease by step      |
| ArrowDown  | Decrease by step      |
| Home       | Set to minimum        |
| End        | Set to maximum        |
| PageUp     | Increase by step × 10 |
| PageDown   | Decrease by step × 10 |

## Accessibility

- Uses `role="slider"` on thumb
- `aria-valuemin`, `aria-valuemax`, `aria-valuenow` attributes
- `aria-disabled` when disabled
- Full keyboard navigation support
- Focus ring for keyboard users
