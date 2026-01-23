import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScSliderDemo } from './slider-demo';

@Component({
  selector: 'app-slider-demo-container',
  imports: [DemoContainer, ScSliderDemo],
  template: `
    <app-demo-container title="Slider" [code]="code">
      <app-sc-slider-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SliderDemoContainer {
  readonly code = '';
}
