import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { DateRange, ScCalendar } from '@semantic-components/ui';

@Component({
  selector: 'app-range-calendar-demo',
  imports: [ScCalendar],
  template: `
    <div class="rounded-md border">
      <sc-calendar mode="range" [(selectedRange)]="selectedRange" />
    </div>
    @if (selectedRange().from) {
      <p class="text-sm text-muted-foreground mt-4">
        Range: {{ formatRange() }}
      </p>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RangeCalendarDemo {
  readonly selectedRange = signal<DateRange>({
    from: undefined,
    to: undefined,
  });

  formatRange(): string {
    const range = this.selectedRange();
    if (range.from && range.to) {
      return `${range.from.toLocaleDateString()} - ${range.to.toLocaleDateString()}`;
    }
    if (range.from) {
      return `${range.from.toLocaleDateString()} - ...`;
    }
    return '';
  }
}
