import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScRangeSlider } from '@semantic-components/ui';

@Component({
  selector: 'app-range-slider-demo',
  imports: [ScRangeSlider],
  template: `
    <div class="w-[60%]">
      <div
        sc-range-slider
        [(minValue)]="minValue"
        [(maxValue)]="maxValue"
        [min]="0"
        [max]="100"
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
export class RangeSliderDemo {
  readonly minValue = signal(25);
  readonly maxValue = signal(75);
}
