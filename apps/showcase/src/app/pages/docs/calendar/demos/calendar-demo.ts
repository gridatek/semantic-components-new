import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { DateRange, ScCalendar } from '@semantic-components/ui';

@Component({
  selector: 'app-sc-calendar-demo',
  imports: [ScCalendar],
  template: `
    <div class="space-y-8">
      <!-- Single Date Selection -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Single Date Selection</h3>
        <div class="rounded-md border">
          <sc-calendar [(selected)]="selectedDate" />
        </div>
        @if (selectedDate()) {
          <p class="text-sm text-muted-foreground">
            Selected: {{ selectedDate()?.toLocaleDateString() }}
          </p>
        }
      </div>

      <!-- Multiple Date Selection -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Multiple Date Selection</h3>
        <div class="rounded-md border">
          <sc-calendar mode="multiple" [(selectedDates)]="selectedDates" />
        </div>
        @if (selectedDates().length > 0) {
          <p class="text-sm text-muted-foreground">
            Selected: {{ formatMultipleDates() }}
          </p>
        }
      </div>

      <!-- Date Range Selection -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Date Range Selection</h3>
        <div class="rounded-md border">
          <sc-calendar mode="range" [(selectedRange)]="selectedRange" />
        </div>
        @if (selectedRange().from) {
          <p class="text-sm text-muted-foreground">
            Range: {{ formatRange() }}
          </p>
        }
      </div>

      <!-- With Disabled Dates -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">With Disabled Dates</h3>
        <p class="text-xs text-muted-foreground">Weekends are disabled</p>
        <div class="rounded-md border">
          <sc-calendar
            [(selected)]="selectedWithDisabled"
            [disabled]="disabledDates()"
          />
        </div>
      </div>

      <!-- With Min/Max Date -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">With Min/Max Date</h3>
        <p class="text-xs text-muted-foreground">
          Only dates within the next 30 days can be selected
        </p>
        <div class="rounded-md border">
          <sc-calendar
            [(selected)]="selectedWithMinMax"
            [minDate]="minDate"
            [maxDate]="maxDate"
          />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCalendarDemo {
  readonly selectedDate = signal<Date | undefined>(undefined);
  readonly selectedDates = signal<Date[]>([]);
  readonly selectedRange = signal<DateRange>({
    from: undefined,
    to: undefined,
  });
  readonly selectedWithDisabled = signal<Date | undefined>(undefined);
  readonly selectedWithMinMax = signal<Date | undefined>(undefined);

  readonly minDate = new Date();
  readonly maxDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

  readonly disabledDates = signal<Date[]>(this.getWeekendDates());

  private getWeekendDates(): Date[] {
    const weekends: Date[] = [];
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();

    // Get weekends for current and next month
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

  formatMultipleDates(): string {
    return this.selectedDates()
      .map((d) => d.toLocaleDateString())
      .join(', ');
  }

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
