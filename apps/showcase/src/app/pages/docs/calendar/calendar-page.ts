import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DisabledDatesCalendarDemoContainer } from './demos/disabled-dates-calendar-demo-container';
import { MinMaxCalendarDemoContainer } from './demos/min-max-calendar-demo-container';
import { MultipleDateCalendarDemoContainer } from './demos/multiple-date-calendar-demo-container';
import { RangeCalendarDemoContainer } from './demos/range-calendar-demo-container';
import { SingleDateCalendarDemoContainer } from './demos/single-date-calendar-demo-container';

@Component({
  selector: 'app-calendar-page',
  imports: [
    SingleDateCalendarDemoContainer,
    MultipleDateCalendarDemoContainer,
    RangeCalendarDemoContainer,
    DisabledDatesCalendarDemoContainer,
    MinMaxCalendarDemoContainer,
  ],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Calendar</h1>
        <p class="text-muted-foreground">
          A date picker component with support for single, multiple, and range
          selection.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-single-date-calendar-demo-container />
        <app-multiple-date-calendar-demo-container />
        <app-range-calendar-demo-container />
        <app-disabled-dates-calendar-demo-container />
        <app-min-max-calendar-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CalendarPage {}
