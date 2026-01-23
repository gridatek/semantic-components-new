import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScTimePickerDemo } from './time-picker-demo';

@Component({
  selector: 'app-time-picker-demo-container',
  imports: [DemoContainer, ScTimePickerDemo],
  template: `
    <app-demo-container title="TimePicker" [code]="code">
      <app-sc-time-picker-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TimePickerDemoContainer {
  readonly code = '';
}
