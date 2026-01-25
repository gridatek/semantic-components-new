import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScDateRangePicker } from '@semantic-components/ui';

@Component({
  selector: 'app-no-clear-date-range-picker-demo',
  imports: [ScDateRangePicker],
  template: `
    <sc-date-range-picker [showClear]="false" placeholder="No clear button" />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoClearDateRangePickerDemo {}
