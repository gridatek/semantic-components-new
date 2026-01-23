import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScDatePickerDemo } from './date-picker-demo';

@Component({
  selector: 'app-date-picker-demo-container',
  imports: [DemoContainer, ScDatePickerDemo],
  template: `
    <app-demo-container title="DatePicker" [code]="code">
      <app-sc-date-picker-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DatePickerDemoContainer {
  readonly code = '';
}
