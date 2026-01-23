import { ChangeDetectionStrategy, Component } from '@angular/core';
import DatePickerDemoContainer from './demos/date-picker-demo-container';

@Component({
  selector: 'app-date-picker-page',
  imports: [DatePickerDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">DatePicker</h1>
        <p class="text-muted-foreground">
          A date picker component with calendar popup for selecting dates.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-date-picker-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DatePickerPage {}
