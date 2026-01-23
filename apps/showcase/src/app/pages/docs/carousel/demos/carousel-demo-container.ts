import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScCarouselDemo } from './carousel-demo';

@Component({
  selector: 'app-carousel-demo-container',
  imports: [DemoContainer, ScCarouselDemo],
  template: `
    <app-demo-container title="Carousel" [code]="code">
      <app-carousel-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCarouselDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScCarousel,
  ScCarouselContent,
  ScCarouselItem,
  ScCarouselNext,
  ScCarouselPrevious,
} from '@semantic-components/ui';

@Component({
  selector: 'app-carousel-demo',
  imports: [
    ScCarousel,
    ScCarouselContent,
    ScCarouselItem,
    ScCarouselPrevious,
    ScCarouselNext,
  ],
  template: \`
    <div class="space-y-12">
      <!-- Default -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Default</h3>
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
      </div>

      <!-- With Cards -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">With Cards</h3>
        <div class="mx-auto w-full max-w-sm">
          <div sc-carousel class="w-full">
            <div sc-carousel-content>
              @for (card of cards; track card.title) {
                <div sc-carousel-item>
                  <div class="p-1">
                    <div class="rounded-lg border bg-card p-6">
                      <h4 class="font-semibold">{{ card.title }}</h4>
                      <p class="mt-2 text-sm text-muted-foreground">
                        {{ card.description }}
                      </p>
                    </div>
                  </div>
                </div>
              }
            </div>
            <button sc-carousel-previous></button>
            <button sc-carousel-next></button>
          </div>
        </div>
      </div>

      <!-- Partial Items (33% width) -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Partial Items (33% width)</h3>
        <div class="mx-auto w-full max-w-lg">
          <div sc-carousel class="w-full">
            <div sc-carousel-content>
              @for (index of items; track index) {
                <div sc-carousel-item class="basis-1/3">
                  <div class="p-1">
                    <div
                      class="flex aspect-square items-center justify-center rounded-lg border bg-card"
                    >
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
      </div>

      <!-- Partial Items (50% width) -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Partial Items (50% width)</h3>
        <div class="mx-auto w-full max-w-md">
          <div sc-carousel class="w-full">
            <div sc-carousel-content>
              @for (index of items; track index) {
                <div sc-carousel-item class="basis-1/2">
                  <div class="p-1">
                    <div
                      class="flex aspect-square items-center justify-center rounded-lg border bg-card"
                    >
                      <span class="text-3xl font-semibold">{{ index }}</span>
                    </div>
                  </div>
                </div>
              }
            </div>
            <button sc-carousel-previous></button>
            <button sc-carousel-next></button>
          </div>
        </div>
      </div>

      <!-- Vertical -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Vertical</h3>
        <div class="mx-auto w-full max-w-xs">
          <div sc-carousel orientation="vertical" class="w-full">
            <div sc-carousel-content class="h-[200px]">
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
      </div>

      <!-- Images -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Images</h3>
        <div class="mx-auto w-full max-w-md">
          <div sc-carousel class="w-full">
            <div sc-carousel-content>
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
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCarouselDemo {
  readonly items = [1, 2, 3, 4, 5];

  readonly cards = [
    {
      title: 'Card 1',
      description: 'This is the first card with some description text.',
    },
    {
      title: 'Card 2',
      description: 'This is the second card with different content.',
    },
    {
      title: 'Card 3',
      description: 'This is the third card with more information.',
    },
    {
      title: 'Card 4',
      description: 'This is the fourth card with additional details.',
    },
    { title: 'Card 5', description: 'This is the fifth and final card.' },
  ];

  readonly images = [
    { alt: 'Image 1' },
    { alt: 'Image 2' },
    { alt: 'Image 3' },
    { alt: 'Image 4' },
  ];
}`;
}
