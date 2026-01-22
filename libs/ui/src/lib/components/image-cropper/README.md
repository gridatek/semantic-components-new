# Image Cropper

An interactive image cropping component with drag, resize, zoom, and aspect ratio controls.

## Usage

```html
<div #cropper="scImageCropper" sc-image-cropper [src]="imageUrl" [(cropArea)]="cropArea" [aspectRatio]="1"></div>

<div sc-image-cropper-controls></div>

<button (click)="crop(cropper)">Crop</button>
```

```typescript
async crop(cropper: ScImageCropper) {
  const result = await cropper.crop();
  console.log(result.dataUrl); // Base64 image
  console.log(result.blob); // Blob for upload
}
```

## Components

### ScImageCropper

Main cropper component with image display and crop area.

**Selector:** `[sc-image-cropper]`

**Inputs:**

| Input             | Type                                          | Default       | Description            |
| ----------------- | --------------------------------------------- | ------------- | ---------------------- |
| `src`             | `string`                                      | Required      | Image source URL       |
| `aspectRatio`     | `number \| null`                              | `null`        | Lock aspect ratio      |
| `minWidth`        | `number`                                      | `50`          | Minimum crop width     |
| `minHeight`       | `number`                                      | `50`          | Minimum crop height    |
| `containerHeight` | `number`                                      | `400`         | Container height in px |
| `showGrid`        | `boolean`                                     | `true`        | Show rule of thirds    |
| `disabled`        | `boolean`                                     | `false`       | Disable interactions   |
| `outputType`      | `'image/png' \| 'image/jpeg' \| 'image/webp'` | `'image/png'` | Output format          |
| `outputQuality`   | `number`                                      | `0.92`        | JPEG/WebP quality      |
| `class`           | `string`                                      | `''`          | Additional CSS         |

**Two-way Bindings:**

| Binding    | Type       | Description              |
| ---------- | ---------- | ------------------------ |
| `cropArea` | `CropArea` | Current crop coordinates |
| `zoom`     | `number`   | Current zoom level       |

**Outputs:**

| Output        | Type                                | Description       |
| ------------- | ----------------------------------- | ----------------- |
| `cropChange`  | `CropArea`                          | Crop area changed |
| `imageLoaded` | `{ width: number; height: number }` | Image loaded      |

**Methods:**

| Method            | Returns               | Description            |
| ----------------- | --------------------- | ---------------------- |
| `crop()`          | `Promise<CropResult>` | Get cropped image      |
| `resetCropArea()` | `void`                | Reset to initial crop  |
| `setZoom(value)`  | `void`                | Set zoom level (0.1-3) |
| `zoomIn()`        | `void`                | Increase zoom by 0.1   |
| `zoomOut()`       | `void`                | Decrease zoom by 0.1   |

### ScImageCropperControls

Zoom slider with buttons.

**Selector:** `[sc-image-cropper-controls]`

### ScImageCropperPreview

Live preview of the cropped area.

**Selector:** `[sc-image-cropper-preview]`

**Inputs:**

| Input    | Type     | Default | Description    |
| -------- | -------- | ------- | -------------- |
| `width`  | `number` | `100`   | Preview width  |
| `height` | `number` | `100`   | Preview height |
| `class`  | `string` | `''`    | Additional CSS |

### ScImageCropperAspectRatio

Aspect ratio preset buttons.

**Selector:** `[sc-image-cropper-aspect-ratio]`

**Inputs:**

| Input     | Type                                         | Default        | Description    |
| --------- | -------------------------------------------- | -------------- | -------------- |
| `options` | `{ label: string; value: number \| null }[]` | Preset options | Ratio options  |
| `class`   | `string`                                     | `''`           | Additional CSS |

**Outputs:**

| Output              | Type             | Description    |
| ------------------- | ---------------- | -------------- |
| `aspectRatioChange` | `number \| null` | Selected ratio |

## Types

### CropArea

```typescript
interface CropArea {
  x: number;
  y: number;
  width: number;
  height: number;
}
```

### CropResult

```typescript
interface CropResult {
  dataUrl: string;
  blob: Blob | null;
  width: number;
  height: number;
}
```

## Examples

### Basic Cropper

```html
<div #cropper="scImageCropper" sc-image-cropper [src]="imageUrl" [containerHeight]="300"></div>

<button (click)="saveCrop(cropper)">Save</button>
```

### Square Crop (Avatar)

```html
<div sc-image-cropper [src]="imageUrl" [aspectRatio]="1" [containerHeight]="300"></div>
```

### 16:9 Crop (Video Thumbnail)

```html
<div sc-image-cropper [src]="imageUrl" [aspectRatio]="16 / 9" [containerHeight]="300"></div>
```

### With Zoom Controls

```html
<div sc-image-cropper [src]="imageUrl"></div>
<div sc-image-cropper-controls></div>
```

### With Live Preview

```html
<div class="flex gap-4">
  <div sc-image-cropper [src]="imageUrl" [aspectRatio]="1"></div>
  <div>
    <p>Preview:</p>
    <div sc-image-cropper-preview [width]="100" [height]="100" class="rounded-full"></div>
  </div>
</div>
```

### With Aspect Ratio Selector

```html
<div #cropper sc-image-cropper [src]="imageUrl" [aspectRatio]="selectedRatio"></div>

<div
  sc-image-cropper-aspect-ratio
  [options]="[
    { label: 'Free', value: null },
    { label: '1:1', value: 1 },
    { label: '4:3', value: 4/3 },
    { label: '16:9', value: 16/9 }
  ]"
  (aspectRatioChange)="selectedRatio = $event"
></div>
```

### Upload and Crop

```html
<input type="file" accept="image/*" (change)="onFileSelect($event)" />

@if (uploadedImage) {
<div #cropper="scImageCropper" sc-image-cropper [src]="uploadedImage"></div>
<button (click)="downloadCropped(cropper)">Download Cropped</button>
}
```

```typescript
onFileSelect(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => this.uploadedImage = reader.result as string;
    reader.readAsDataURL(file);
  }
}

async downloadCropped(cropper: ScImageCropper) {
  const result = await cropper.crop();
  const link = document.createElement('a');
  link.href = result.dataUrl;
  link.download = 'cropped.png';
  link.click();
}
```

### Upload to Server

```typescript
async uploadCropped(cropper: ScImageCropper) {
  const result = await cropper.crop();

  if (result.blob) {
    const formData = new FormData();
    formData.append('image', result.blob, 'cropped.png');

    await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });
  }
}
```

## Features

- **Drag to Move**: Click and drag the crop area to reposition
- **Resize Handles**: 8 handles for resizing (corners and edges)
- **Aspect Ratio Lock**: Maintain fixed ratios like 1:1, 4:3, 16:9
- **Zoom Support**: Zoom in/out with slider or buttons
- **Grid Overlay**: Rule of thirds grid for composition
- **Live Preview**: See cropped result in real-time
- **Multiple Outputs**: Get result as Data URL or Blob
- **Touch Support**: Works on touch devices
- **Output Formats**: PNG, JPEG, or WebP

## Interactions

| Action                 | Result             |
| ---------------------- | ------------------ |
| Drag crop area         | Move crop position |
| Drag corner handle     | Resize from corner |
| Drag edge handle       | Resize from edge   |
| Use zoom slider        | Scale image        |
| Click aspect ratio btn | Lock to that ratio |

## Accessibility

- Keyboard focus on interactive elements
- ARIA labels on buttons
- Disabled state support
- Alt text on images
