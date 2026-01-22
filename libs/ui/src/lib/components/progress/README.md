# Progress

Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.

## Components

- `ScProgress` - The progress bar component with value and max inputs

## Usage

```html
<div sc-progress [value]="33"></div>
```

## With Custom Max

```html
<div sc-progress [value]="50" [max]="200"></div>
```

## Custom Styling

Override the default height or width:

```html
<div sc-progress [value]="66" class="h-4 w-[60%]"></div>
```

## Inputs

| Input   | Type             | Default | Description            |
| ------- | ---------------- | ------- | ---------------------- |
| `value` | `number \| null` | `null`  | Current progress value |
| `max`   | `number`         | `100`   | Maximum value          |
| `class` | `string`         | `''`    | Additional CSS classes |

## States

The component exposes a `data-state` attribute:

- `indeterminate` - When value is null
- `loading` - When value is less than max
- `complete` - When value equals or exceeds max

## Accessibility

- Uses `role="progressbar"` for screen readers
- Proper `aria-valuemin`, `aria-valuemax`, and `aria-valuenow` attributes
- State is communicated via `data-state` attribute
