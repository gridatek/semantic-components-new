import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScCarousel,
  ScCarouselContent,
  ScCarouselItem,
  ScCarouselNext,
  ScCarouselPrevious,
} from '@semantic-components/ui';

@Component({
  selector: 'app-default-carousel-demo',
  imports: [
    ScCarousel,
    ScCarouselContent,
    ScCarouselItem,
    ScCarouselPrevious,
    ScCarouselNext,
  ],
  template: `
    <div class="mx-auto w-full max-w-xs">
      <div sc-carousel class="w-full">
        <div sc-carousel-content>
          @for (index of items; track index) {
            <div sc-carousel-item>
              <div class="p-1">
                <div
                  class="flex aspect-square items-center justify-center rounded-lg border bg-card p-6"
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
export class DefaultCarouselDemo {
  readonly items = [1, 2, 3, 4, 5];
}
