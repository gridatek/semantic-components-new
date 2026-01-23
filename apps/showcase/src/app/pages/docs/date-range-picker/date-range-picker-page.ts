import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScDateRangePickerDemoContainer } from './demos/date-range-picker-demo-container';

@Component({
  selector: 'app-date-range-picker-page',
  imports: [ScDateRangePickerDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">DateRangePicker</h1>
        <p class="text-muted-foreground">
          Select a range of dates with presets, min/max constraints, and various
          display formats.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-date-range-picker-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DateRangePickerPage {}
