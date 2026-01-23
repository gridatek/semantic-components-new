import { ChangeDetectionStrategy, Component } from '@angular/core';
import SliderDemoContainer from './demos/slider-demo-container';

@Component({
  selector: 'app-slider-page',
  imports: [SliderDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Slider</h1>
        <p class="text-muted-foreground">
          An input where the user selects a value from within a given range.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-slider-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SliderPage {}
