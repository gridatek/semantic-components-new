import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScSlider } from '@semantic-components/ui';

@Component({
  selector: 'app-disabled-slider-demo',
  imports: [ScSlider],
  template: `
    <div class="w-[60%]">
      <div sc-slider [value]="50" [disabled]="true"></div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledSliderDemo {}
