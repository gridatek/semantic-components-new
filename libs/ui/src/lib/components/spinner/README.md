# Spinner

Loading indicators with multiple animation styles and sizes.

## Components

- `ScSpinner` - Default spinning circle indicator
- `ScSpinnerDots` - Three bouncing dots animation
- `ScSpinnerBars` - Four stretching bars animation
- `ScSpinnerRing` - Simple spinning ring with border

## Usage

```html
<!-- Default spinner -->
<span sc-spinner></span>

<!-- With size -->
<span sc-spinner size="xs"></span>
<span sc-spinner size="sm"></span>
<span sc-spinner size="default"></span>
<span sc-spinner size="lg"></span>
<span sc-spinner size="xl"></span>

<!-- With custom color -->
<span sc-spinner class="text-blue-500"></span>

<!-- Dots variant -->
<span sc-spinner-dots></span>

<!-- Bars variant -->
<span sc-spinner-bars></span>

<!-- Ring variant -->
<span sc-spinner-ring></span>

<!-- In a button -->
<button disabled>
  <span sc-spinner size="sm"></span>
  Loading...
</button>
```

## API

### ScSpinner

| Input   | Type                                        | Default     | Description                         |
| ------- | ------------------------------------------- | ----------- | ----------------------------------- |
| `class` | `string`                                    | `''`        | Additional CSS classes              |
| `size`  | `'xs' \| 'sm' \| 'default' \| 'lg' \| 'xl'` | `'default'` | Size of the spinner                 |
| `label` | `string`                                    | `'Loading'` | Accessible label for screen readers |

### ScSpinnerDots

Same API as `ScSpinner`.

### ScSpinnerBars

Same API as `ScSpinner`.

### ScSpinnerRing

Same API as `ScSpinner`.

## Accessibility

- All spinner variants have `role="status"` for screen reader announcement
- `aria-label` is set to the `label` input for screen reader accessibility
- Default label is "Loading" but can be customized

## Sizes

| Size      | Dimensions |
| --------- | ---------- |
| `xs`      | 12px       |
| `sm`      | 16px       |
| `default` | 20px       |
| `lg`      | 24px       |
| `xl`      | 32px       |

## Examples

### Loading Button

```html
<button class="inline-flex items-center gap-2" disabled>
  <span sc-spinner size="sm"></span>
  Processing...
</button>
```

### Full Page Loading

```html
<div class="flex h-screen items-center justify-center">
  <div class="text-center">
    <span sc-spinner size="xl" class="text-primary"></span>
    <p class="mt-2 text-sm text-muted-foreground">Loading content...</p>
  </div>
</div>
```

### Inline Loading State

```html
@if (isLoading) {
<span sc-spinner-dots size="sm"></span>
} @else {
<span>Content loaded</span>
}
```
