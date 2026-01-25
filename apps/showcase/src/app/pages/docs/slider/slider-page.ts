import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicSliderDemoContainer } from './demos/basic-slider-demo-container';
import { DisabledSliderDemoContainer } from './demos/disabled-slider-demo-container';
import { PriceSliderDemoContainer } from './demos/price-slider-demo-container';
import { RangeSliderDemoContainer } from './demos/range-slider-demo-container';
import { StepSliderDemoContainer } from './demos/step-slider-demo-container';
import { TemperatureSliderDemoContainer } from './demos/temperature-slider-demo-container';
import { VolumeSliderDemoContainer } from './demos/volume-slider-demo-container';

@Component({
  selector: 'app-slider-page',
  imports: [
    BasicSliderDemoContainer,
    RangeSliderDemoContainer,
    StepSliderDemoContainer,
    DisabledSliderDemoContainer,
    VolumeSliderDemoContainer,
    PriceSliderDemoContainer,
    TemperatureSliderDemoContainer,
  ],
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
        <app-basic-slider-demo-container />
        <app-range-slider-demo-container />
        <app-step-slider-demo-container />
        <app-disabled-slider-demo-container />
        <app-volume-slider-demo-container />
        <app-price-slider-demo-container />
        <app-temperature-slider-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SliderPage {}
