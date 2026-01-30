import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScCarousel,
  ScCarouselTrack,
  ScCarouselItem,
  ScCarouselNext,
  ScCarouselPrevious,
} from '@semantic-components/ui';

@Component({
  selector: 'app-images-carousel-demo',
  imports: [
    ScCarousel,
    ScCarouselTrack,
    ScCarouselItem,
    ScCarouselPrevious,
    ScCarouselNext,
  ],
  template: `
    <div class="mx-auto w-full max-w-md">
      <div sc-carousel class="w-full">
        <div sc-carousel-track>
          @for (image of images; track image.alt) {
            <div sc-carousel-item>
              <div class="p-1">
                <div
                  class="flex aspect-video items-center justify-center rounded-lg border bg-muted"
                >
                  <span class="text-sm text-muted-foreground">
                    {{ image.alt }}
                  </span>
                </div>
              </div>
            </div>
          }
        </div>
        <button sc-carousel-previous></button>
        <button sc-carousel-next></button>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImagesCarouselDemo {
  readonly images = [
    { alt: 'Image 1' },
    { alt: 'Image 2' },
    { alt: 'Image 3' },
    { alt: 'Image 4' },
  ];
}
