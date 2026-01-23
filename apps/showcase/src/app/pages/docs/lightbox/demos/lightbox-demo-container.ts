import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScLightboxDemo } from './lightbox-demo';

@Component({
  selector: 'app-lightbox-demo-container',
  imports: [DemoContainer, ScLightboxDemo],
  template: `
    <app-demo-container title="Lightbox" [code]="code">
      <app-lightbox-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScLightboxDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScLightbox,
  ScLightboxTrigger,
  ScLightboxGallery,
  LightboxImage,
} from '@semantic-components/ui';

@Component({
  selector: 'app-lightbox-demo',
  imports: [ScLightbox, ScLightboxTrigger, ScLightboxGallery],
  template: \`
    <div class="space-y-8">
      <!-- Basic Lightbox -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Basic Lightbox</h3>
        <p class="text-sm text-muted-foreground">
          Click an image to open the lightbox. Use arrow keys or buttons to
          navigate.
        </p>
        <sc-lightbox #lightbox1 [images]="basicImages">
          <div class="flex gap-4">
            @for (image of basicImages; track image.src; let i = $index) {
              <button
                sc-lightbox-trigger
                [index]="i"
                class="w-32 h-32 rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <img
                  [src]="image.thumbnail || image.src"
                  [alt]="image.alt"
                  class="size-full object-cover"
                />
              </button>
            }
          </div>
        </sc-lightbox>
      </section>

      <!-- With Titles and Descriptions -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">With Image Info</h3>
        <p class="text-sm text-muted-foreground">
          Images with titles and descriptions shown in the lightbox.
        </p>
        <sc-lightbox #lightbox2 [images]="imagesWithInfo">
          <div class="flex gap-4">
            @for (image of imagesWithInfo; track image.src; let i = $index) {
              <button
                sc-lightbox-trigger
                [index]="i"
                class="w-40 rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <img
                  [src]="image.thumbnail || image.src"
                  [alt]="image.alt"
                  class="w-full aspect-video object-cover"
                />
                <div class="p-2 text-left">
                  <p class="text-sm font-medium truncate">{{ image.title }}</p>
                </div>
              </button>
            }
          </div>
        </sc-lightbox>
      </section>

      <!-- Gallery Component -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Gallery Component</h3>
        <p class="text-sm text-muted-foreground">
          Pre-built gallery grid with lightbox integration.
        </p>
        <sc-lightbox-gallery
          [images]="galleryImages"
          class="grid-cols-4 gap-2 max-w-xl"
        />
      </section>

      <!-- Without Thumbnails -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Without Thumbnails</h3>
        <p class="text-sm text-muted-foreground">
          Lightbox without the thumbnail strip at the bottom.
        </p>
        <sc-lightbox #lightbox3 [images]="basicImages" [showThumbnails]="false">
          <div class="flex gap-4">
            @for (image of basicImages; track image.src; let i = $index) {
              <button
                sc-lightbox-trigger
                [index]="i"
                class="w-24 h-24 rounded overflow-hidden focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <img
                  [src]="image.src"
                  [alt]="image.alt"
                  class="size-full object-cover"
                />
              </button>
            }
          </div>
        </sc-lightbox>
      </section>

      <!-- Without Zoom -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Without Zoom Controls</h3>
        <p class="text-sm text-muted-foreground">
          Hide the zoom controls for simpler viewing.
        </p>
        <sc-lightbox #lightbox4 [images]="basicImages" [showZoom]="false">
          <div class="flex gap-4">
            @for (image of basicImages; track image.src; let i = $index) {
              <button
                sc-lightbox-trigger
                [index]="i"
                class="w-24 h-24 rounded overflow-hidden focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <img
                  [src]="image.src"
                  [alt]="image.alt"
                  class="size-full object-cover"
                />
              </button>
            }
          </div>
        </sc-lightbox>
      </section>

      <!-- No Loop -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Without Looping</h3>
        <p class="text-sm text-muted-foreground">
          Navigation stops at the first and last image (no looping).
        </p>
        <sc-lightbox #lightbox5 [images]="basicImages" [loop]="false">
          <div class="flex gap-4">
            @for (image of basicImages; track image.src; let i = $index) {
              <button
                sc-lightbox-trigger
                [index]="i"
                class="w-24 h-24 rounded overflow-hidden focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <img
                  [src]="image.src"
                  [alt]="image.alt"
                  class="size-full object-cover"
                />
              </button>
            }
          </div>
        </sc-lightbox>
      </section>

      <!-- Single Image -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Single Image</h3>
        <p class="text-sm text-muted-foreground">
          Lightbox with a single image (no navigation).
        </p>
        <sc-lightbox #lightbox6 [images]="[singleImage]">
          <button
            sc-lightbox-trigger
            [index]="0"
            class="w-48 rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <img
              [src]="singleImage.src"
              [alt]="singleImage.alt"
              class="w-full aspect-video object-cover"
            />
          </button>
        </sc-lightbox>
      </section>

      <!-- Keyboard Shortcuts -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Keyboard Shortcuts</h3>
        <p class="text-sm text-muted-foreground">
          Open the lightbox and try these keyboard shortcuts:
        </p>
        <ul
          class="text-sm space-y-1 list-disc list-inside text-muted-foreground"
        >
          <li>
            <kbd class="px-1 py-0.5 bg-muted rounded text-xs">←</kbd>
            /
            <kbd class="px-1 py-0.5 bg-muted rounded text-xs">→</kbd>
            - Navigate images
          </li>
          <li>
            <kbd class="px-1 py-0.5 bg-muted rounded text-xs">+</kbd>
            /
            <kbd class="px-1 py-0.5 bg-muted rounded text-xs">-</kbd>
            - Zoom in/out
          </li>
          <li>
            <kbd class="px-1 py-0.5 bg-muted rounded text-xs">0</kbd>
            - Reset zoom
          </li>
          <li>
            <kbd class="px-1 py-0.5 bg-muted rounded text-xs">Esc</kbd>
            - Close lightbox
          </li>
        </ul>
        <sc-lightbox #lightbox7 [images]="basicImages">
          <button
            sc-lightbox-trigger
            [index]="0"
            class="inline-flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-accent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="size-4"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
            </svg>
            Open Gallery
          </button>
        </sc-lightbox>
      </section>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScLightboxDemo {
  readonly basicImages: LightboxImage[] = [
    { src: 'https://picsum.photos/800/600?random=1', alt: 'Random image 1' },
    { src: 'https://picsum.photos/800/600?random=2', alt: 'Random image 2' },
    { src: 'https://picsum.photos/800/600?random=3', alt: 'Random image 3' },
    { src: 'https://picsum.photos/800/600?random=4', alt: 'Random image 4' },
  ];

  readonly imagesWithInfo: LightboxImage[] = [
    {
      src: 'https://picsum.photos/800/600?random=10',
      alt: 'Mountain landscape',
      title: 'Mountain Sunrise',
      description: 'A beautiful sunrise over the mountains captured at dawn.',
    },
    {
      src: 'https://picsum.photos/800/600?random=11',
      alt: 'Ocean view',
      title: 'Ocean Waves',
      description: 'Peaceful ocean waves on a sunny afternoon.',
    },
    {
      src: 'https://picsum.photos/800/600?random=12',
      alt: 'Forest path',
      title: 'Forest Trail',
      description: 'A winding path through an ancient forest.',
    },
  ];

  readonly galleryImages: LightboxImage[] = [
    { src: 'https://picsum.photos/800/600?random=20', alt: 'Gallery 1' },
    { src: 'https://picsum.photos/800/600?random=21', alt: 'Gallery 2' },
    { src: 'https://picsum.photos/800/600?random=22', alt: 'Gallery 3' },
    { src: 'https://picsum.photos/800/600?random=23', alt: 'Gallery 4' },
    { src: 'https://picsum.photos/800/600?random=24', alt: 'Gallery 5' },
    { src: 'https://picsum.photos/800/600?random=25', alt: 'Gallery 6' },
    { src: 'https://picsum.photos/800/600?random=26', alt: 'Gallery 7' },
    { src: 'https://picsum.photos/800/600?random=27', alt: 'Gallery 8' },
  ];

  readonly singleImage: LightboxImage = {
    src: 'https://picsum.photos/800/600?random=30',
    alt: 'Single image',
    title: 'Featured Photo',
    description: 'This is a featured photo with detailed information.',
  };
}`;
}
