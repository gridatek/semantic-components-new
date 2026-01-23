import { ChangeDetectionStrategy, Component } from '@angular/core';
import TimePickerDemoContainer from './demos/time-picker-demo-container';

@Component({
  selector: 'app-time-picker-page',
  imports: [TimePickerDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">TimePicker</h1>
        <p class="text-muted-foreground">
          A component for selecting time values.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-time-picker-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TimePickerPage {}
