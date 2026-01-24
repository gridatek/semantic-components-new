import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { DisabledDatesCalendarDemo } from './disabled-dates-calendar-demo';

@Component({
  selector: 'app-disabled-dates-calendar-demo-container',
  imports: [DemoContainer, DisabledDatesCalendarDemo],
  template: `
    <app-demo-container
      title="With Disabled Dates"
      description="Weekends are disabled."
      demoUrl="/demos/calendar/disabled-dates-calendar-demo"
      [code]="code"
    >
      <app-disabled-dates-calendar-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledDatesCalendarDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScCalendar } from '@semantic-components/ui';

@Component({
  selector: 'app-disabled-dates-calendar-demo',
  imports: [ScCalendar],
  template: \`
    <div class="rounded-md border">
      <sc-calendar
        [(selected)]="selectedDate"
        [disabled]="disabledDates()"
      />
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledDatesCalendarDemo {
  readonly selectedDate = signal<Date | undefined>(undefined);
  readonly disabledDates = signal<Date[]>(this.getWeekendDates());

  private getWeekendDates(): Date[] {
    const weekends: Date[] = [];
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();

    for (let m = month; m <= month + 1; m++) {
      const daysInMonth = new Date(year, m + 1, 0).getDate();
      for (let d = 1; d <= daysInMonth; d++) {
        const date = new Date(year, m, d);
        if (date.getDay() === 0 || date.getDay() === 6) {
          weekends.push(date);
        }
      }
    }
    return weekends;
  }
}`;
}
