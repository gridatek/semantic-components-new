import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScSlider } from '@semantic-components/ui';

@Component({
  selector: 'app-basic-slider-demo',
  imports: [ScSlider],
  template: `
    <div class="w-[60%]">
      <div sc-slider [(value)]="basicValue"></div>
      <p class="mt-2 text-sm text-muted-foreground">Value: {{ basicValue() }}</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicSliderDemo {
  readonly basicValue = signal(33);
}
