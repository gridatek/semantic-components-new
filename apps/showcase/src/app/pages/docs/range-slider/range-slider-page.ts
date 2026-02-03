import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicRangeSliderDemoContainer } from './demos/basic-range-slider-demo-container';
import { PriceRangeSliderDemoContainer } from './demos/price-range-slider-demo-container';
import { TemperatureRangeSliderDemoContainer } from './demos/temperature-range-slider-demo-container';
import { DisabledRangeSliderDemoContainer } from './demos/disabled-range-slider-demo-container';

@Component({
  selector: 'app-range-slider-page',
  imports: [
    BasicRangeSliderDemoContainer,
    PriceRangeSliderDemoContainer,
    TemperatureRangeSliderDemoContainer,
    DisabledRangeSliderDemoContainer,
  ],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Range Slider</h1>
        <p class="text-muted-foreground">
          An input where the user selects a range with minimum and maximum
          values from within a given range using dual thumbs.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-basic-range-slider-demo-container />
        <app-price-range-slider-demo-container />
        <app-temperature-range-slider-demo-container />
        <app-disabled-range-slider-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RangeSliderPage {}
