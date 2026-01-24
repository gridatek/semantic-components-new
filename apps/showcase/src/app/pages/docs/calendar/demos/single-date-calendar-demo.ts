import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScCalendar } from '@semantic-components/ui';

@Component({
  selector: 'app-single-date-calendar-demo',
  imports: [ScCalendar],
  template: `
    <div class="rounded-md border">
      <sc-calendar [(selected)]="selectedDate" />
    </div>
    @if (selectedDate()) {
      <p class="text-sm text-muted-foreground mt-4">
        Selected: {{ selectedDate()?.toLocaleDateString() }}
      </p>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleDateCalendarDemo {
  readonly selectedDate = signal<Date | undefined>(undefined);
}
