import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScStepperDemo } from './stepper-demo';

@Component({
  selector: 'app-stepper-demo-container',
  imports: [DemoContainer, ScStepperDemo],
  template: `
    <app-demo-container title="Stepper" [code]="code">
      <app-sc-stepper-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StepperDemoContainer {
  readonly code = '';
}
