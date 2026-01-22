# Rating

A star rating component for user feedback and reviews.

## Usage

```html
<div sc-rating [(value)]="rating">
  <div sc-rating-stars></div>
</div>
```

## Components

### ScRating

Root container that manages rating state.

**Selector:** `[sc-rating]`

**Inputs:**

| Input        | Type      | Default | Description                   |
| ------------ | --------- | ------- | ----------------------------- |
| `max`        | `number`  | `5`     | Maximum rating value          |
| `readonly`   | `boolean` | `false` | Read-only mode                |
| `disabled`   | `boolean` | `false` | Disabled state                |
| `allowHalf`  | `boolean` | `false` | Allow half-star ratings       |
| `allowClear` | `boolean` | `true`  | Allow clearing by re-clicking |
| `class`      | `string`  | `''`    | Additional CSS classes        |

**Two-way Bindings:**

| Binding | Type     | Default | Description    |
| ------- | -------- | ------- | -------------- |
| `value` | `number` | `0`     | Current rating |

### ScRatingItem

Individual rating item (star).

**Selector:** `[sc-rating-item]`

**Inputs:**

| Input   | Type     | Required | Description          |
| ------- | -------- | -------- | -------------------- |
| `value` | `number` | Yes      | Item value (1-based) |
| `class` | `string` | No       | Additional CSS       |

**Content Projection:**

- `[empty]` - Icon shown when empty
- `[filled]` - Icon shown when filled

**Data Attributes:**

| Attribute       | Values                        |
| --------------- | ----------------------------- |
| `data-state`    | `'full' \| 'half' \| 'empty'` |
| `data-disabled` | Present when disabled         |
| `data-readonly` | Present when readonly         |

### ScRatingStar

Default star icon component.

**Selector:** `[sc-rating-star]`

**Inputs:**

| Input  | Type                        | Default     | Description |
| ------ | --------------------------- | ----------- | ----------- |
| `size` | `'sm' \| 'default' \| 'lg'` | `'default'` | Icon size   |

### ScRatingStars

Convenience component with built-in star icons.

**Selector:** `[sc-rating-stars]`

**Inputs:**

| Input   | Type                        | Default             | Description |
| ------- | --------------------------- | ------------------- | ----------- |
| `size`  | `'sm' \| 'default' \| 'lg'` | `'default'`         | Star size   |
| `color` | `string`                    | `'text-yellow-400'` | Fill color  |

## Examples

### Basic Rating

```html
<div sc-rating [(value)]="rating">
  <div sc-rating-stars></div>
</div>
```

### Sizes

```html
<div sc-rating [(value)]="rating">
  <div sc-rating-stars size="sm"></div>
</div>

<div sc-rating [(value)]="rating">
  <div sc-rating-stars size="default"></div>
</div>

<div sc-rating [(value)]="rating">
  <div sc-rating-stars size="lg"></div>
</div>
```

### Custom Colors

```html
<div sc-rating [(value)]="rating">
  <div sc-rating-stars color="text-red-500"></div>
</div>

<div sc-rating [(value)]="rating">
  <div sc-rating-stars color="text-blue-500"></div>
</div>
```

### Half Stars

```html
<div sc-rating [(value)]="rating" [allowHalf]="true">
  <div sc-rating-stars></div>
</div>
```

### Readonly

```html
<div sc-rating [value]="4.5" [readonly]="true" [allowHalf]="true">
  <div sc-rating-stars></div>
</div>
```

### Disabled

```html
<div sc-rating [value]="3" [disabled]="true">
  <div sc-rating-stars></div>
</div>
```

### Custom Max

```html
<div sc-rating [max]="10" [(value)]="rating">
  <div sc-rating-stars size="sm"></div>
</div>
```

### Custom Icons (Hearts)

```html
<div sc-rating [(value)]="rating">
  @for (i of [1, 2, 3, 4, 5]; track i) {
  <span sc-rating-item [value]="i">
    <svg empty><!-- empty heart --></svg>
    <svg filled class="text-red-500"><!-- filled heart --></svg>
  </span>
  }
</div>
```

## Keyboard Navigation

| Key           | Action               |
| ------------- | -------------------- |
| `ArrowRight`  | Increase rating      |
| `ArrowUp`     | Increase rating      |
| `ArrowLeft`   | Decrease rating      |
| `ArrowDown`   | Decrease rating      |
| `Home`        | Set to minimum (0)   |
| `End`         | Set to maximum       |
| `Space/Enter` | Select current value |

## Features

- **Half Stars**: Support for half-star precision
- **Custom Max**: Configurable maximum rating
- **Custom Icons**: Use any icon via content projection
- **Custom Colors**: Tailwind color classes
- **Sizes**: Small, default, and large
- **Readonly**: Display-only mode
- **Disabled**: Non-interactive state
- **Allow Clear**: Option to clear by clicking same value
- **Hover Preview**: Shows rating on hover
- **Two-way Binding**: Sync with `[(value)]`

## Accessibility

- `role="radiogroup"` on container
- `role="radio"` on each item
- `aria-checked` for selection state
- `aria-label` with star count
- Full keyboard navigation
- Focus indicators
