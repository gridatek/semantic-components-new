# Signature Pad

Canvas-based signature capture component with touch and mouse support.

## Composable Architecture

The signature pad uses a **composable architecture** that gives you full control over layout and functionality.

### Basic Usage

```typescript
import { ScSignaturePad, ScSignaturePadCanvas, ScSignaturePadControls, ScSignaturePadUndoButton, ScSignaturePadClearButton } from '@semantic-components/ui';
import { SiUndoIcon, SiTrash2Icon } from '@semantic-icons/lucide-icons';

@Component({
  imports: [ScSignaturePad, ScSignaturePadCanvas, ScSignaturePadControls, ScSignaturePadUndoButton, ScSignaturePadClearButton, SiUndoIcon, SiTrash2Icon],
  template: `
    <div sc-signature-pad class="relative inline-block">
      <canvas sc-signature-pad-canvas [(value)]="signature" [width]="400" [height]="200"></canvas>

      <div sc-signature-pad-controls>
        <button sc-signature-pad-undo>
          <svg si-undo-icon class="size-4"></svg>
        </button>
        <button sc-signature-pad-clear>
          <svg si-trash-2-icon class="size-4"></svg>
        </button>
      </div>
    </div>
  `,
})
export class MyComponent {
  readonly signature = signal('');
}
```

### Composable Components

**`ScSignaturePad` (Directive)**

- Root directive that provides context
- Manages signature state and drawing logic
- **Selector**: `[sc-signature-pad]`
- **Inputs**: `disabled`, `penColor`, `penWidth`, `backgroundColor`

**`ScSignaturePadCanvas` (Component)**

- Canvas element for drawing
- **Selector**: `canvas[sc-signature-pad-canvas]`
- **Inputs**: `width`, `height`, `ariaLabel`, `class`
- **Model**: `value` (two-way bindable data URL)
- **Outputs**: `signatureChange`, `strokeEnd`

**`ScSignaturePadControls` (Component)**

- Container for control buttons (uses `<ng-content>`)
- **Selector**: `div[sc-signature-pad-controls]`
- **Default position**: `absolute top-2 right-2`

**`ScSignaturePadUndoButton` (Component)**

- Undo last stroke
- **Selector**: `button[sc-signature-pad-undo]`
- **Auto-disabled**: When no strokes to undo

**`ScSignaturePadClearButton` (Component)**

- Clear entire signature
- **Selector**: `button[sc-signature-pad-clear]`
- **Auto-disabled**: When signature is empty

### Flexible Examples

#### Custom Button Layout

```html
<div sc-signature-pad>
  <canvas sc-signature-pad-canvas [width]="500" [height]="250"></canvas>

  <!-- Controls at bottom instead of top-right -->
  <div sc-signature-pad-controls class="static mt-2 justify-center">
    <button sc-signature-pad-undo class="px-4 py-2">Undo</button>
    <button sc-signature-pad-clear class="px-4 py-2">Clear</button>
  </div>
</div>
```

#### With Custom Buttons

```html
<div sc-signature-pad #pad>
  <canvas sc-signature-pad-canvas [(value)]="signature"></canvas>

  <div sc-signature-pad-controls>
    <button sc-signature-pad-undo>
      <svg si-undo-icon></svg>
    </button>
    <button sc-signature-pad-clear>
      <svg si-trash-icon></svg>
    </button>
    <!-- Add your own buttons -->
    <button (click)="downloadSignature(pad)">
      <svg si-download-icon></svg>
    </button>
  </div>
</div>
```

#### Without Controls Container

```html
<div sc-signature-pad>
  <canvas sc-signature-pad-canvas></canvas>
</div>

<!-- External controls -->
<div class="flex gap-2 mt-2">
  <button sc-signature-pad-undo>Undo</button>
  <button sc-signature-pad-clear>Clear</button>
  <button (click)="save()">Save</button>
</div>
```

#### Custom Pen Colors

```html
<div sc-signature-pad [penColor]="selectedColor()">
  <canvas sc-signature-pad-canvas></canvas>

  <div class="flex gap-2">
    <button (click)="selectedColor.set('#000000')">Black</button>
    <button (click)="selectedColor.set('#1d4ed8')">Blue</button>
    <button (click)="selectedColor.set('#dc2626')">Red</button>
  </div>
</div>
```

## Features

- ✅ Touch and mouse support
- ✅ Smooth drawing with line interpolation
- ✅ Undo functionality (stroke by stroke)
- ✅ Export to PNG, JPEG, or Blob
- ✅ Customizable pen color and width
- ✅ Responsive canvas sizing
- ✅ **Composable architecture** for maximum flexibility
- ✅ Use with `@semantic-icons` for consistent icons

## Accessibility

- Keyboard accessible controls
- ARIA labels for screen readers
- Focus indicators on buttons
- Disabled state support
- Touch-friendly button sizes
