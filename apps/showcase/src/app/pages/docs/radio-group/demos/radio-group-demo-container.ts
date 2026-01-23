import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScRadioGroupDemo } from './radio-group-demo';

@Component({
  selector: 'app-radio-group-demo-container',
  imports: [DemoContainer, ScRadioGroupDemo],
  template: `
    <app-demo-container title="RadioGroup" [code]="code">
      <app-sc-radio-group-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RadioGroupDemoContainer {
  readonly code = '';
}
