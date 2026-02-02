import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
  signal,
} from '@angular/core';
import { Grid, GridRow, GridCell, GridCellWidget } from '@angular/aria/grid';
import { cn } from '../../utils';

interface MonthInfo {
  label: string;
  value: number;
  isCurrentMonth: boolean;
  isSelected: boolean;
  selected: ReturnType<typeof signal<boolean>>;
}

@Component({
  selector: 'sc-calendar-month-view',
  imports: [Grid, GridRow, GridCell, GridCellWidget],
  template: `
    <div
      ngGrid
      aria-label="Select month"
      class="grid grid-cols-3 gap-2"
      colWrap="continuous"
      rowWrap="continuous"
      [enableSelection]="true"
      selectionMode="explicit"
    >
      @for (month of months(); track month.value; let row = $index) {
        @if (row % 3 === 0) {
          <div ngGridRow class="contents">
            @for (
              m of [months()[row], months()[row + 1], months()[row + 2]];
              track m?.value
            ) {
              @if (m) {
                <div ngGridCell class="contents" [(selected)]="m.selected">
                  <button
                    ngGridCellWidget
                    type="button"
                    [class]="getMonthButtonClass(m)"
                    (click)="handleMonthClick(m.value)"
                    (keydown)="handleKeyDown($event, m.value)"
                    [attr.aria-current]="m.isCurrentMonth ? 'date' : null"
                    [attr.aria-label]="m.label"
                  >
                    {{ m.label }}
                  </button>
                </div>
              }
            }
          </div>
        }
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
      selected: signal(index === currentMonth),
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

  protected handleMonthClick(month: number): void {
    this.monthSelected.emit(month);
  }

  protected handleKeyDown(event: KeyboardEvent, month: number): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.monthSelected.emit(month);
    }
  }
}
