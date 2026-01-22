# Lightbox

Full-screen image viewer with zoom, navigation, and keyboard support.

## Components

- `ScLightbox` - Main lightbox container with overlay
- `ScLightboxTrigger` - Trigger directive to open lightbox at specific index
- `ScLightboxGallery` - Pre-built gallery grid with lightbox integration

## Usage

```html
<sc-lightbox [images]="images">
  <div class="flex gap-4">
    @for (image of images; track image.src; let i = $index) {
    <button sc-lightbox-trigger [index]="i" class="w-32 h-32 rounded overflow-hidden">
      <img [src]="image.src" [alt]="image.alt" class="size-full object-cover" />
    </button>
    }
  </div>
</sc-lightbox>
```

## API

### LightboxImage

```typescript
interface LightboxImage {
  src: string;
  alt?: string;
  title?: string;
  description?: string;
  thumbnail?: string;
}
```

### ScLightbox

| Input            | Type              | Default | Description                |
| ---------------- | ----------------- | ------- | -------------------------- |
| `images`         | `LightboxImage[]` | `[]`    | Array of images to display |
| `showThumbnails` | `boolean`         | `true`  | Show thumbnail strip       |
| `showZoom`       | `boolean`         | `true`  | Show zoom controls         |
| `loop`           | `boolean`         | `true`  | Loop navigation at ends    |
| `class`          | `string`          | -       | Additional CSS classes     |

| Model          | Type      | Default | Description                     |
| -------------- | --------- | ------- | ------------------------------- |
| `isOpen`       | `boolean` | `false` | Whether lightbox is open        |
| `currentIndex` | `number`  | `0`     | Currently displayed image index |

### ScLightboxTrigger

| Input   | Type     | Default | Description         |
| ------- | -------- | ------- | ------------------- |
| `index` | `number` | `0`     | Image index to open |

### ScLightboxGallery

| Input    | Type              | Default | Description                     |
| -------- | ----------------- | ------- | ------------------------------- |
| `images` | `LightboxImage[]` | `[]`    | Array of images to display      |
| `class`  | `string`          | -       | Additional CSS classes for grid |

## Examples

### Basic Lightbox

```html
<sc-lightbox [images]="images">
  <div class="flex gap-4">
    @for (image of images; track image.src; let i = $index) {
    <button sc-lightbox-trigger [index]="i" class="w-32 h-32 rounded overflow-hidden">
      <img [src]="image.src" [alt]="image.alt" class="size-full object-cover" />
    </button>
    }
  </div>
</sc-lightbox>
```

### With Image Info

```typescript
readonly images: LightboxImage[] = [
  {
    src: 'https://example.com/photo1.jpg',
    alt: 'Mountain landscape',
    title: 'Mountain Sunrise',
    description: 'A beautiful sunrise over the mountains.',
  },
  {
    src: 'https://example.com/photo2.jpg',
    alt: 'Ocean view',
    title: 'Ocean Waves',
    description: 'Peaceful ocean waves on a sunny afternoon.',
  },
];
```

### Gallery Component

Pre-built grid with integrated lightbox:

```html
<sc-lightbox-gallery [images]="images" class="grid-cols-4 gap-2 max-w-xl" />
```

### Without Thumbnails

```html
<sc-lightbox [images]="images" [showThumbnails]="false">
  <!-- triggers -->
</sc-lightbox>
```

### Without Zoom

```html
<sc-lightbox [images]="images" [showZoom]="false">
  <!-- triggers -->
</sc-lightbox>
```

### Without Looping

Navigation stops at first/last image:

```html
<sc-lightbox [images]="images" [loop]="false">
  <!-- triggers -->
</sc-lightbox>
```

### Programmatic Control

```typescript
@Component({
  template: `
    <sc-lightbox [images]="images" [(isOpen)]="isOpen" [(currentIndex)]="currentIndex">
      <!-- triggers -->
    </sc-lightbox>

    <button (click)="openAtIndex(2)">Open at index 2</button>
  `,
})
export class MyComponent {
  isOpen = false;
  currentIndex = 0;

  openAtIndex(index: number): void {
    this.currentIndex = index;
    this.isOpen = true;
  }
}
```

## Keyboard Shortcuts

| Key       | Action          |
| --------- | --------------- |
| `←` / `→` | Navigate images |
| `+` / `=` | Zoom in         |
| `-`       | Zoom out        |
| `0`       | Reset zoom      |
| `Escape`  | Close lightbox  |

## Accessibility

- Focus trap within lightbox when open
- Keyboard navigation for all controls
- ARIA labels on all interactive elements
- Screen reader announcements for image changes
- Focus returns to trigger on close
