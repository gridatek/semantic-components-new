import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
} from '@angular/core';
import { cn } from '../../utils';

interface MonthInfo {
  label: string;
  value: number;
  isCurrentMonth: boolean;
  isSelected: boolean;
}

@Component({
  selector: 'sc-calendar-month-view',
  template: `
    <div role="grid" aria-label="Select month" class="grid grid-cols-3 gap-2">
      @for (month of months(); track month.value) {
        <button
          type="button"
          role="gridcell"
          [class]="getMonthButtonClass(month)"
          (click)="monthSelected.emit(month.value)"
          [attr.aria-current]="month.isCurrentMonth ? 'date' : null"
          [attr.aria-label]="month.label"
        >
          {{ month.label }}
        </button>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCalendarMonthView {
  readonly year = input.required<number>();
  readonly selectedMonth = input.required<number>();
  readonly monthSelected = output<number>();

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
    const currentMonth = this.selectedMonth();
    const year = this.year();
    const today = new Date();

    return monthNames.map((name, index) => ({
      label: name,
      value: index,
      isCurrentMonth:
        index === today.getMonth() && year === today.getFullYear(),
      isSelected: index === currentMonth,
    }));
  });

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
}
