import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScCarousel,
  ScCarouselTrack,
  ScCarouselItem,
  ScCarouselNext,
  ScCarouselPrevious,
} from '@semantic-components/ui';

@Component({
  selector: 'app-vertical-carousel-demo',
  imports: [
    ScCarousel,
    ScCarouselTrack,
    ScCarouselItem,
    ScCarouselPrevious,
    ScCarouselNext,
  ],
  template: `
    <div class="mx-auto w-full max-w-xs">
      <div sc-carousel orientation="vertical" class="w-full">
        <div sc-carousel-track class="h-[200px]">
          @for (index of items; track index) {
            <div sc-carousel-item>
              <div class="p-1">
                <div
                  class="flex h-full items-center justify-center rounded-lg border bg-card p-6"
                >
                  <span class="text-4xl font-semibold">{{ index }}</span>
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
export class VerticalCarouselDemo {
  readonly items = [1, 2, 3, 4, 5];
}
