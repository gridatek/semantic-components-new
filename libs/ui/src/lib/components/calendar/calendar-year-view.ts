import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
} from '@angular/core';
import { cn } from '../../utils';

interface YearInfo {
  label: string;
  value: number;
  isCurrentYear: boolean;
  isSelected: boolean;
}

@Component({
  selector: 'sc-calendar-year-view',
  template: `
    <div role="grid" aria-label="Select year" class="grid grid-cols-3 gap-2">
      @for (year of years(); track year.value) {
        <button
          type="button"
          role="gridcell"
          [class]="getYearButtonClass(year)"
          (click)="yearSelected.emit(year.value)"
          [attr.aria-current]="year.isCurrentYear ? 'date' : null"
          [attr.aria-label]="year.label"
        >
          {{ year.label }}
        </button>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCalendarYearView {
  readonly decadeStart = input.required<number>();
  readonly selectedYear = input.required<number>();
  readonly yearSelected = output<number>();

  protected readonly years = computed((): YearInfo[] => {
    const decadeStart = this.decadeStart();
    const currentYear = new Date().getFullYear();
    const selectedYear = this.selectedYear();

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
}
