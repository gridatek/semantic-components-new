import { ChangeDetectionStrategy, Component } from '@angular/core';
import CarouselDemoContainer from './demos/carousel-demo-container';

@Component({
  selector: 'app-carousel-page',
  imports: [CarouselDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Carousel</h1>
        <p class="text-muted-foreground">
          A carousel with motion and swipe built using CSS scroll snap.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-carousel-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CarouselPage {}
