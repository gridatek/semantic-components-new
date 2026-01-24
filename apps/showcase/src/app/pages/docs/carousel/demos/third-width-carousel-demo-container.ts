import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ThirdWidthCarouselDemo } from './third-width-carousel-demo';

@Component({
  selector: 'app-third-width-carousel-demo-container',
  imports: [DemoContainer, ThirdWidthCarouselDemo],
  template: `
    <app-demo-container
      title="Partial Items (33% width)"
      demoUrl="/demos/carousel/third-width-carousel-demo"
      [code]="code"
    >
      <app-third-width-carousel-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThirdWidthCarouselDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScCarousel,
  ScCarouselContent,
  ScCarouselItem,
  ScCarouselNext,
  ScCarouselPrevious,
} from '@semantic-components/ui';

@Component({
  selector: 'app-third-width-carousel-demo',
  imports: [ScCarousel, ScCarouselContent, ScCarouselItem, ScCarouselPrevious, ScCarouselNext],
  template: \`
    <div class="mx-auto w-full max-w-lg">
      <div sc-carousel class="w-full">
        <div sc-carousel-content>
          @for (index of items; track index) {
            <div sc-carousel-item class="basis-1/3">
              <div class="p-1">
                <div class="flex aspect-square items-center justify-center rounded-lg border bg-card">
                  <span class="text-2xl font-semibold">{{ index }}</span>
                </div>
              </div>
            </div>
          }
        </div>
        <button sc-carousel-previous></button>
        <button sc-carousel-next></button>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThirdWidthCarouselDemo {
  readonly items = [1, 2, 3, 4, 5];
}`;
}
