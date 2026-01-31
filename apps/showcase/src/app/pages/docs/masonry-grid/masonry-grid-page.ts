import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicMasonryGridDemoContainer } from './demos/basic-masonry-grid-demo-container';
import { ImageGalleryMasonryGridDemoContainer } from './demos/image-gallery-masonry-grid-demo-container';
import { BreakpointsMasonryGridDemoContainer } from './demos/breakpoints-masonry-grid-demo-container';
import { CardsMasonryGridDemoContainer } from './demos/cards-masonry-grid-demo-container';

@Component({
  selector: 'app-masonry-grid-page',
  imports: [
    BasicMasonryGridDemoContainer,
    ImageGalleryMasonryGridDemoContainer,
    BreakpointsMasonryGridDemoContainer,
    CardsMasonryGridDemoContainer,
  ],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">MasonryGrid</h1>
        <p class="text-muted-foreground">
          A Pinterest-style layout that arranges items in columns with varying
          heights.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-basic-masonry-grid-demo-container />
        <app-image-gallery-masonry-grid-demo-container />
        <app-breakpoints-masonry-grid-demo-container />
        <app-cards-masonry-grid-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MasonryGridPage {}
