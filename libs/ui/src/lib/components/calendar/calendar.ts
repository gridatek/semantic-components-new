import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  model,
  signal,
} from '@angular/core';
import { cn } from '../../utils';

export type CalendarMode = 'single' | 'multiple' | 'range';
export type CalendarViewMode = 'day' | 'month' | 'year';

export interface DateRange {
  from: Date | undefined;
  to: Date | undefined;
}

interface DayInfo {
  date: Date;
  isToday: boolean;
  isOutsideMonth: boolean;
  disabled: boolean;
}

interface MonthInfo {
  label: string;
  value: number;
  isCurrentMonth: boolean;
  isSelected: boolean;
}

interface YearInfo {
  label: string;
  value: number;
  isCurrentYear: boolean;
  isSelected: boolean;
}

@Component({
  selector: 'sc-calendar',
  host: {
    'data-slot': 'calendar',
    '[class]': 'class()',
    role: 'application',
    '[attr.aria-label]': '"Calendar"',
  },
  template: `
    <div class="flex flex-col gap-4">
      <!-- Header with navigation -->
      <div class="relative flex items-center justify-center pt-1">
        <button
          type="button"
          class="absolute left-1 inline-flex size-7 items-center justify-center rounded-md border border-input bg-transparent p-0 opacity-50 hover:opacity-100 transition-opacity"
          (click)="handlePrevious()"
          [attr.aria-label]="previousAriaLabel()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-4"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <button
          type="button"
          class="text-sm font-medium hover:text-primary transition-colors px-3 py-1 rounded-md hover:bg-accent"
          (click)="handleHeaderClick()"
          [attr.aria-label]="headerAriaLabel()"
          [attr.aria-expanded]="viewMode() !== 'day'"
        >
          {{ monthYearLabel() }}
        </button>
        <button
          type="button"
          class="absolute right-1 inline-flex size-7 items-center justify-center rounded-md border border-input bg-transparent p-0 opacity-50 hover:opacity-100 transition-opacity"
          (click)="handleNext()"
          [attr.aria-label]="nextAriaLabel()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-4"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      <!-- View content -->
      @switch (viewMode()) {
        @case ('day') {
          <!-- Calendar grid -->
          <table class="w-full border-collapse" role="grid">
            <thead>
              <tr class="flex">
                @for (day of weekDays; track day) {
                  <th
                    scope="col"
                    class="w-9 rounded-md text-[0.8rem] font-normal text-muted-foreground"
                  >
                    {{ day }}
                  </th>
                }
              </tr>
            </thead>
            <tbody>
              @for (week of weeks(); track $index) {
                <tr class="mt-2 flex w-full">
                  @for (day of week; track day?.date?.getTime() ?? $index) {
                    <td
                      class="relative p-0 text-center text-sm"
                      [attr.aria-selected]="day && isSelected(day.date)"
                      role="gridcell"
                    >
                      @if (day) {
                        <button
                          type="button"
                          [class]="getDayClass(day)"
                          [disabled]="day.disabled"
                          [attr.aria-label]="day.date.toDateString()"
                          [attr.data-today]="day.isToday || null"
                          [attr.data-selected]="isSelected(day.date) || null"
                          [attr.data-outside]="day.isOutsideMonth || null"
                          [attr.data-disabled]="day.disabled || null"
                          [attr.data-range-start]="
                            isRangeStart(day.date) || null
                          "
                          [attr.data-range-end]="isRangeEnd(day.date) || null"
                          [attr.data-range-middle]="
                            isRangeMiddle(day.date) || null
                          "
                          (click)="selectDate(day.date)"
                          (keydown)="onKeyDown($event, day.date)"
                        >
                          {{ day.date.getDate() }}
                        </button>
                      } @else {
                        <span class="size-9"></span>
                      }
                    </td>
                  }
                </tr>
              }
            </tbody>
          </table>
        }
        @case ('month') {
          <!-- Month grid -->
          <div
            role="grid"
            aria-label="Select month"
            class="grid grid-cols-3 gap-2"
          >
            @for (month of months(); track month.value) {
              <button
                type="button"
                role="gridcell"
                [class]="getMonthButtonClass(month)"
                (click)="selectMonth(month.value)"
                [attr.aria-current]="month.isCurrentMonth ? 'date' : null"
                [attr.aria-label]="month.label"
              >
                {{ month.label }}
              </button>
            }
          </div>
        }
        @case ('year') {
          <!-- Year grid -->
          <div
            role="grid"
            aria-label="Select year"
            class="grid grid-cols-3 gap-2"
          >
            @for (year of years(); track year.value) {
              <button
                type="button"
                role="gridcell"
                [class]="getYearButtonClass(year)"
                (click)="selectYear(year.value)"
                [attr.aria-current]="year.isCurrentYear ? 'date' : null"
                [attr.aria-label]="year.label"
              >
                {{ year.label }}
              </button>
            }
          </div>
        }
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCalendar {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly mode = input<CalendarMode>('single');
  readonly disabled = input<Date[]>([]);
  readonly minDate = input<Date | undefined>(undefined);
  readonly maxDate = input<Date | undefined>(undefined);

  // For single mode
  readonly selected = model<Date | undefined>(undefined);
  // For multiple mode
  readonly selectedDates = model<Date[]>([]);
  // For range mode
  readonly selectedRange = model<DateRange>({ from: undefined, to: undefined });

  readonly weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  private readonly viewDate = signal(new Date());
  protected readonly viewMode = signal<CalendarViewMode>('day');
  protected readonly decadeStart = signal<number>(
    Math.floor(new Date().getFullYear() / 12) * 12,
  );

  protected readonly class = computed(() => cn('p-3', this.classInput()));

  protected readonly monthYearLabel = computed(() => {
    const date = this.viewDate();
    const mode = this.viewMode();

    if (mode === 'year') {
      const start = this.decadeStart();
      return `${start} - ${start + 11}`;
    }

    if (mode === 'month') {
      return date.getFullYear().toString();
    }

    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  });

  protected readonly months = computed((): MonthInfo[] => {
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const currentMonth = this.viewDate().getMonth();
    const year = this.viewDate().getFullYear();
    const today = new Date();

    return monthNames.map((name, index) => ({
      label: name,
      value: index,
      isCurrentMonth:
        index === today.getMonth() && year === today.getFullYear(),
      isSelected: index === currentMonth,
    }));
  });

  protected readonly years = computed((): YearInfo[] => {
    const decadeStart = this.decadeStart();
    const currentYear = new Date().getFullYear();
    const selectedYear = this.viewDate().getFullYear();

    return Array.from({ length: 12 }, (_, i) => {
      const year = decadeStart + i;
      return {
        label: year.toString(),
        value: year,
        isCurrentYear: year === currentYear,
        isSelected: year === selectedYear,
      };
    });
  });

  protected readonly weeks = computed(() => {
    const date = this.viewDate();
    const year = date.getFullYear();
    const month = date.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const days: (DayInfo | null)[][] = [];
    let currentWeek: (DayInfo | null)[] = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay.getDay(); i++) {
      const prevDate = new Date(year, month, -firstDay.getDay() + i + 1);
      currentWeek.push(this.createDayInfo(prevDate, true));
    }

    // Add days of the month
    for (let day = 1; day <= lastDay.getDate(); day++) {
      const currentDate = new Date(year, month, day);
      currentWeek.push(this.createDayInfo(currentDate, false));

      if (currentWeek.length === 7) {
        days.push(currentWeek);
        currentWeek = [];
      }
    }

    // Add days from next month to fill the last week
    if (currentWeek.length > 0) {
      let nextDay = 1;
      while (currentWeek.length < 7) {
        const nextDate = new Date(year, month + 1, nextDay++);
        currentWeek.push(this.createDayInfo(nextDate, true));
      }
      days.push(currentWeek);
    }

    return days;
  });

  private createDayInfo(date: Date, isOutsideMonth: boolean): DayInfo {
    const today = new Date();
    const isToday =
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();

    const disabled = this.isDateDisabled(date);

    return {
      date,
      isToday,
      isOutsideMonth,
      disabled,
    };
  }

  private isDateDisabled(date: Date): boolean {
    const disabledDates = this.disabled();
    const min = this.minDate();
    const max = this.maxDate();

    if (min && date < min) return true;
    if (max && date > max) return true;

    return disabledDates.some(
      (d) =>
        d.getDate() === date.getDate() &&
        d.getMonth() === date.getMonth() &&
        d.getFullYear() === date.getFullYear(),
    );
  }

  protected isSelected(date: Date): boolean {
    const mode = this.mode();

    if (mode === 'single') {
      const selected = this.selected();
      return selected ? this.isSameDay(date, selected) : false;
    }

    if (mode === 'multiple') {
      return this.selectedDates().some((d) => this.isSameDay(date, d));
    }

    if (mode === 'range') {
      const range = this.selectedRange();
      if (range.from && this.isSameDay(date, range.from)) return true;
      if (range.to && this.isSameDay(date, range.to)) return true;
      if (range.from && range.to && date > range.from && date < range.to)
        return true;
    }

    return false;
  }

  protected isRangeStart(date: Date): boolean {
    if (this.mode() !== 'range') return false;
    const range = this.selectedRange();
    return range.from ? this.isSameDay(date, range.from) : false;
  }

  protected isRangeEnd(date: Date): boolean {
    if (this.mode() !== 'range') return false;
    const range = this.selectedRange();
    return range.to ? this.isSameDay(date, range.to) : false;
  }

  protected isRangeMiddle(date: Date): boolean {
    if (this.mode() !== 'range') return false;
    const range = this.selectedRange();
    if (!range.from || !range.to) return false;
    return date > range.from && date < range.to;
  }

  private isSameDay(a: Date, b: Date): boolean {
    return (
      a.getDate() === b.getDate() &&
      a.getMonth() === b.getMonth() &&
      a.getFullYear() === b.getFullYear()
    );
  }

  protected getDayClass(day: DayInfo): string {
    const isSelectedDay = this.isSelected(day.date);
    const isRangeMiddleDay = this.isRangeMiddle(day.date);

    return cn(
      'inline-flex size-9 items-center justify-center rounded-md text-sm font-normal',
      'ring-offset-background transition-colors',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'hover:bg-accent hover:text-accent-foreground',
      'disabled:pointer-events-none disabled:opacity-50',
      day.isToday && !isSelectedDay && 'bg-accent text-accent-foreground',
      isSelectedDay &&
        !isRangeMiddleDay &&
        'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground',
      isRangeMiddleDay && 'bg-accent text-accent-foreground rounded-none',
      day.isOutsideMonth && 'text-muted-foreground opacity-50',
      day.disabled && 'text-muted-foreground opacity-50',
    );
  }

  protected getMonthButtonClass(month: MonthInfo): string {
    return cn(
      'inline-flex h-10 items-center justify-center rounded-md text-sm font-normal',
      'ring-offset-background transition-colors',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
      'hover:bg-accent hover:text-accent-foreground',
      month.isCurrentMonth &&
        !month.isSelected &&
        'bg-accent text-accent-foreground',
      month.isSelected &&
        'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground',
    );
  }

  protected getYearButtonClass(year: YearInfo): string {
    return cn(
      'inline-flex h-10 items-center justify-center rounded-md text-sm font-normal',
      'ring-offset-background transition-colors',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
      'hover:bg-accent hover:text-accent-foreground',
      year.isCurrentYear &&
        !year.isSelected &&
        'bg-accent text-accent-foreground',
      year.isSelected &&
        'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground',
    );
  }

  protected previousAriaLabel(): string {
    const mode = this.viewMode();
    return mode === 'day'
      ? 'Go to previous month'
      : mode === 'month'
        ? 'Go to previous year'
        : 'Go to previous decade';
  }

  protected nextAriaLabel(): string {
    const mode = this.viewMode();
    return mode === 'day'
      ? 'Go to next month'
      : mode === 'month'
        ? 'Go to next year'
        : 'Go to next decade';
  }

  protected headerAriaLabel(): string {
    const mode = this.viewMode();
    return mode === 'day'
      ? 'Switch to month view'
      : mode === 'month'
        ? 'Switch to year view'
        : 'Year view - select a year';
  }

  protected selectDate(date: Date): void {
    const mode = this.mode();

    if (mode === 'single') {
      this.selected.set(date);
    } else if (mode === 'multiple') {
      const current = this.selectedDates();
      const exists = current.some((d) => this.isSameDay(d, date));
      if (exists) {
        this.selectedDates.set(current.filter((d) => !this.isSameDay(d, date)));
      } else {
        this.selectedDates.set([...current, date]);
      }
    } else if (mode === 'range') {
      const range = this.selectedRange();
      if (!range.from || (range.from && range.to)) {
        // Start new range
        this.selectedRange.set({ from: date, to: undefined });
      } else {
        // Complete the range
        if (date < range.from) {
          this.selectedRange.set({ from: date, to: range.from });
        } else {
          this.selectedRange.set({ from: range.from, to: date });
        }
      }
    }
  }

  // Header click - drill down through views
  protected handleHeaderClick(): void {
    const current = this.viewMode();
    if (current === 'day') {
      this.viewMode.set('month');
    } else if (current === 'month') {
      this.viewMode.set('year');
      const currentYear = this.viewDate().getFullYear();
      this.decadeStart.set(Math.floor(currentYear / 12) * 12);
    }
  }

  // Context-aware previous/next
  protected handlePrevious(): void {
    const mode = this.viewMode();
    if (mode === 'day') this.previousMonth();
    else if (mode === 'month') this.previousYear();
    else this.previousDecade();
  }

  protected handleNext(): void {
    const mode = this.viewMode();
    if (mode === 'day') this.nextMonth();
    else if (mode === 'month') this.nextYear();
    else this.nextDecade();
  }

  protected previousMonth(): void {
    const current = this.viewDate();
    this.viewDate.set(
      new Date(current.getFullYear(), current.getMonth() - 1, 1),
    );
  }

  protected nextMonth(): void {
    const current = this.viewDate();
    this.viewDate.set(
      new Date(current.getFullYear(), current.getMonth() + 1, 1),
    );
  }

  protected previousYear(): void {
    const current = this.viewDate();
    this.viewDate.set(
      new Date(current.getFullYear() - 1, current.getMonth(), 1),
    );
  }

  protected nextYear(): void {
    const current = this.viewDate();
    this.viewDate.set(
      new Date(current.getFullYear() + 1, current.getMonth(), 1),
    );
  }

  protected previousDecade(): void {
    this.decadeStart.update((start) => start - 12);
  }

  protected nextDecade(): void {
    this.decadeStart.update((start) => start + 12);
  }

  // Selection handlers - return to previous view
  protected selectMonth(month: number): void {
    const current = this.viewDate();
    this.viewDate.set(new Date(current.getFullYear(), month, 1));
    this.viewMode.set('day');
  }

  protected selectYear(year: number): void {
    const current = this.viewDate();
    this.viewDate.set(new Date(year, current.getMonth(), 1));
    this.viewMode.set('month');
  }

  protected onKeyDown(event: KeyboardEvent, date: Date): void {
    const mode = this.viewMode();

    // Handle Escape - return to previous view
    if (event.key === 'Escape' && mode !== 'day') {
      event.preventDefault();
      if (mode === 'year') this.viewMode.set('month');
      else if (mode === 'month') this.viewMode.set('day');
      return;
    }

    // Day view keyboard navigation
    if (mode === 'day') {
      const current = this.viewDate();
      let newDate: Date | null = null;

      switch (event.key) {
        case 'ArrowLeft':
          newDate = new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate() - 1,
          );
          break;
        case 'ArrowRight':
          newDate = new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate() + 1,
          );
          break;
        case 'ArrowUp':
          newDate = new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate() - 7,
          );
          break;
        case 'ArrowDown':
          newDate = new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate() + 7,
          );
          break;
        case 'Enter':
        case ' ':
          event.preventDefault();
          this.selectDate(date);
          return;
      }

      if (newDate) {
        event.preventDefault();
        // Update view if navigating to different month
        if (newDate.getMonth() !== current.getMonth()) {
          this.viewDate.set(
            new Date(newDate.getFullYear(), newDate.getMonth(), 1),
          );
        }
      }
    }
  }
}
