import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScCalendar } from '@semantic-components/ui';

@Component({
  selector: 'app-min-max-calendar-demo',
  imports: [ScCalendar],
  template: `
    <div class="rounded-md border">
      <sc-calendar
        [(selected)]="selectedDate"
        [minDate]="minDate"
        [maxDate]="maxDate"
      />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinMaxCalendarDemo {
  readonly selectedDate = signal<Date | undefined>(undefined);
  readonly minDate = new Date();
  readonly maxDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
}
