import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { DefaultCarouselDemo } from './default-carousel-demo';

@Component({
  selector: 'app-default-carousel-demo-container',
  imports: [DemoContainer, DefaultCarouselDemo],
  template: `
    <app-demo-container
      title="Default"
      demoUrl="/demos/carousel/default-carousel-demo"
      [code]="code"
    >
      <app-default-carousel-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultCarouselDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScCarousel,
  ScCarouselViewport,
  ScCarouselTrack,
  ScCarouselItem,
  ScCarouselNext,
  ScCarouselPrevious,
} from '@semantic-components/ui';

@Component({
  selector: 'app-default-carousel-demo',
  imports: [ScCarousel, ScCarouselViewport, ScCarouselTrack, ScCarouselItem, ScCarouselPrevious, ScCarouselNext],
  template: \`
    <div class="mx-auto w-full max-w-xs">
      <div sc-carousel class="w-full">
        <div sc-carousel-viewport>
          <div sc-carousel-track>
            @for (index of items; track index) {
              <div sc-carousel-item>
                <div class="p-1">
                  <div class="flex aspect-square items-center justify-center rounded-lg border bg-card p-6">
                    <span class="text-4xl font-semibold">{{ index }}</span>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
        <button sc-carousel-previous>
          <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="m15 18-6-6 6-6" />
          </svg>
          <span class="sr-only">Previous slide</span>
        </button>
        <button sc-carousel-next>
          <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="m9 18 6-6-6-6" />
          </svg>
          <span class="sr-only">Next slide</span>
        </button>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultCarouselDemo {
  readonly items = [1, 2, 3, 4, 5];
}`;
}
