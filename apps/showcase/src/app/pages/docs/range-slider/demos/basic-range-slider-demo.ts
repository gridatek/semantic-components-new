import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScRangeSlider } from '@semantic-components/ui';

@Component({
  selector: 'app-basic-range-slider-demo',
  imports: [ScRangeSlider],
  template: `
    <div class="w-[60%]">
      <div
        sc-range-slider
        [(minValue)]="minValue"
        [(maxValue)]="maxValue"
        [minLabel]="'Minimum value'"
        [maxLabel]="'Maximum value'"
      ></div>
      <p class="mt-2 text-sm text-muted-foreground">
        Range: {{ minValue() }} - {{ maxValue() }}
      </p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicRangeSliderDemo {
  readonly minValue = signal(25);
  readonly maxValue = signal(75);
}
