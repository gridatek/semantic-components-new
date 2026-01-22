# Signature Pad

Canvas-based signature capture component with touch and mouse support.

## Usage

```html
<sc-signature-pad [width]="400" [height]="200" (signatureChange)="onSignatureChange($event)" />
```

## API

### ScSignaturePad

| Input             | Type      | Default           | Description             |
| ----------------- | --------- | ----------------- | ----------------------- |
| `width`           | `number`  | `400`             | Canvas width in pixels  |
| `height`          | `number`  | `200`             | Canvas height in pixels |
| `penColor`        | `string`  | `'#000000'`       | Pen stroke color        |
| `penWidth`        | `number`  | `2`               | Pen stroke width        |
| `backgroundColor` | `string`  | `'#ffffff'`       | Canvas background color |
| `showControls`    | `boolean` | `true`            | Show undo/clear buttons |
| `disabled`        | `boolean` | `false`           | Disable drawing         |
| `ariaLabel`       | `string`  | `'Signature pad'` | Accessibility label     |
| `class`           | `string`  | -                 | Additional CSS classes  |

| Model     | Type      | Default | Description              |
| --------- | --------- | ------- | ------------------------ |
| `isEmpty` | `boolean` | `true`  | Whether the pad is empty |

| Output            | Type     | Description                           |
| ----------------- | -------- | ------------------------------------- |
| `signatureChange` | `string` | Emits data URL when signature changes |
| `strokeEnd`       | `void`   | Emits when a stroke is completed      |

### Methods

| Method        | Parameters                        | Returns  | Description          |
| ------------- | --------------------------------- | -------- | -------------------- |
| `clear()`     | -                                 | `void`   | Clear the signature  |
| `undo()`      | -                                 | `void`   | Undo the last stroke |
| `toDataURL()` | `type?: string, quality?: number` | `string` | Export as data URL   |
| `toBlob()`    | `callback, type?, quality?`       | `void`   | Export as Blob       |

## Examples

### Basic Usage

```html
<sc-signature-pad #pad [width]="400" [height]="200" (signatureChange)="signature = $event" />

<button (click)="pad.clear()">Clear</button>
<button (click)="pad.undo()">Undo</button>
```

### Custom Colors

```html
<sc-signature-pad [penColor]="'#1d4ed8'" [backgroundColor]="'#f3f4f6'" [penWidth]="3" />
```

### Export Signature

```typescript
@Component({
  template: `
    <sc-signature-pad #pad />
    <button (click)="export()">Export PNG</button>
  `,
})
export class MyComponent {
  @ViewChild('pad') pad!: ScSignaturePad;

  export(): void {
    const dataUrl = this.pad.toDataURL('image/png');
    // Use dataUrl for upload or display
  }
}
```

### Form Integration

```html
<sc-signature-pad [(isEmpty)]="signatureIsEmpty" />

@if (signatureIsEmpty()) {
<p class="text-destructive">Signature is required</p>
}
```

### Without Controls

```html
<sc-signature-pad #pad [showControls]="false" />

<div class="flex gap-2">
  <button (click)="pad.undo()">Undo</button>
  <button (click)="pad.clear()">Clear</button>
</div>
```

### Disabled State

```html
<sc-signature-pad [disabled]="isLocked" />
```

## Features

- Touch and mouse support
- Smooth drawing with line interpolation
- Undo functionality (stroke by stroke)
- Export to PNG, JPEG, or Blob
- Customizable pen color and width
- Responsive canvas sizing
- Built-in controls (optional)

## Accessibility

- Keyboard accessible controls
- ARIA labels for screen readers
- Focus indicators on buttons
- Disabled state support
