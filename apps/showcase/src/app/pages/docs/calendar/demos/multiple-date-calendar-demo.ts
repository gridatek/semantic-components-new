import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScCalendar } from '@semantic-components/ui';

@Component({
  selector: 'app-multiple-date-calendar-demo',
  imports: [ScCalendar],
  template: `
    <div class="rounded-md border">
      <sc-calendar mode="multiple" [(selectedDates)]="selectedDates" />
    </div>
    @if (selectedDates().length > 0) {
      <p class="text-sm text-muted-foreground mt-4">
        Selected: {{ formatMultipleDates() }}
      </p>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultipleDateCalendarDemo {
  readonly selectedDates = signal<Date[]>([]);

  formatMultipleDates(): string {
    return this.selectedDates()
      .map((d) => d.toLocaleDateString())
      .join(', ');
  }
}
