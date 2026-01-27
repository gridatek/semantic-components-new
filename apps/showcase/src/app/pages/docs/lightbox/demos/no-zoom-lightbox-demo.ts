import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScLightbox,
  ScLightboxTrigger,
  LightboxImage,
} from '@semantic-components/ui';

@Component({
  selector: 'app-no-zoom-lightbox-demo',
  imports: [ScLightbox, ScLightboxTrigger],
  template: `
    <sc-lightbox [images]="images" [showZoom]="false">
      <div class="flex gap-4">
        @for (image of images; track image.src; let i = $index) {
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
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoZoomLightboxDemo {
  readonly images: LightboxImage[] = [
    { src: 'https://picsum.photos/800/600?random=1', alt: 'Random image 1' },
    { src: 'https://picsum.photos/800/600?random=2', alt: 'Random image 2' },
    { src: 'https://picsum.photos/800/600?random=3', alt: 'Random image 3' },
    { src: 'https://picsum.photos/800/600?random=4', alt: 'Random image 4' },
  ];
}
