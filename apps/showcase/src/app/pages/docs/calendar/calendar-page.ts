import { ChangeDetectionStrategy, Component } from '@angular/core';
import CalendarDemoContainer from './demos/calendar-demo-container';

@Component({
  selector: 'app-calendar-page',
  imports: [CalendarDemoContainer],
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
        <app-calendar-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CalendarPage {}
