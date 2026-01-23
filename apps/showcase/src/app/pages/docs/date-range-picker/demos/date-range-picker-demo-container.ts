import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScDateRangePickerDemo } from './date-range-picker-demo';

@Component({
  selector: 'app-date-range-picker-demo-container',
  imports: [DemoContainer, ScDateRangePickerDemo],
  template: `
    <app-demo-container title="DateRangePicker" [code]="code">
      <sc-date-range-picker-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DateRangePickerDemoContainer {
  readonly code = '';
}
