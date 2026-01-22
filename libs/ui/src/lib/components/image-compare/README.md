# Image Compare

Before/after image comparison slider with keyboard and touch support.

## Components

- `ScImageCompare` - Main comparison component
- `ScImageCompareSlider` - Convenience wrapper with same API

## Usage

```html
<sc-image-compare [beforeImage]="'before.jpg'" [afterImage]="'after.jpg'" class="w-full max-w-2xl aspect-[2/1]" />
```

## API

### ScImageCompare

| Input         | Type                         | Default                     | Description               |
| ------------- | ---------------------------- | --------------------------- | ------------------------- |
| `beforeImage` | `string`                     | _required_                  | URL of the "before" image |
| `afterImage`  | `string`                     | _required_                  | URL of the "after" image  |
| `beforeLabel` | `string`                     | `'Before'`                  | Label for before image    |
| `afterLabel`  | `string`                     | `'After'`                   | Label for after image     |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'`              | Slider orientation        |
| `showLabels`  | `boolean`                    | `true`                      | Show image labels         |
| `ariaLabel`   | `string`                     | `'Image comparison slider'` | Accessibility label       |
| `class`       | `string`                     | -                           | Additional CSS classes    |

| Model      | Type     | Default | Description             |
| ---------- | -------- | ------- | ----------------------- |
| `position` | `number` | `50`    | Slider position (0-100) |

## Examples

### Basic Usage

```html
<sc-image-compare [beforeImage]="'/images/before.jpg'" [afterImage]="'/images/after.jpg'" class="w-full max-w-2xl aspect-[2/1]" />
```

### Custom Labels

```html
<sc-image-compare [beforeImage]="'/images/blurred.jpg'" [afterImage]="'/images/sharp.jpg'" [beforeLabel]="'Blurred'" [afterLabel]="'Sharp'" />
```

### Without Labels

```html
<sc-image-compare [beforeImage]="before" [afterImage]="after" [showLabels]="false" />
```

### Vertical Orientation

```html
<sc-image-compare [beforeImage]="before" [afterImage]="after" [orientation]="'vertical'" [beforeLabel]="'Top'" [afterLabel]="'Bottom'" class="w-full max-w-sm aspect-[2/3]" />
```

### Controlled Position

```typescript
@Component({
  template: `
    <sc-image-compare [beforeImage]="before" [afterImage]="after" [(position)]="position" />

    <input type="range" min="0" max="100" [value]="position()" (input)="position.set(+$event.target.value)" />
  `,
})
export class MyComponent {
  readonly position = signal(50);
}
```

### Custom Initial Position

```html
<sc-image-compare [beforeImage]="before" [afterImage]="after" [(position)]="position" />
```

```typescript
readonly position = signal(25); // Start at 25%
```

## Keyboard Navigation

| Key             | Action                   |
| --------------- | ------------------------ |
| `←` / `→`       | Move slider (horizontal) |
| `↑` / `↓`       | Move slider (vertical)   |
| `Shift` + Arrow | Move by 10%              |
| `Home`          | Go to 0%                 |
| `End`           | Go to 100%               |

## Styling

The component uses CSS `clip-path` for the reveal effect. Set dimensions using CSS classes:

```html
<!-- Fixed aspect ratio -->
<sc-image-compare class="w-full max-w-2xl aspect-[16/9]" />

<!-- Square -->
<sc-image-compare class="w-full max-w-md aspect-square" />

<!-- Custom dimensions -->
<sc-image-compare class="w-[600px] h-[400px]" />
```

## Accessibility

- Full keyboard support with arrow keys
- ARIA slider role with value announcements
- Screen reader accessible labels
- Focus ring for keyboard navigation
- Touch support for mobile devices
