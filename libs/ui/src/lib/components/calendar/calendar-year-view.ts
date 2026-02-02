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

interface YearInfo {
  label: string;
  value: number;
  isCurrentYear: boolean;
  isSelected: boolean;
  selected: ReturnType<typeof signal<boolean>>;
}

@Component({
  selector: 'sc-calendar-year-view',
  imports: [Grid, GridRow, GridCell, GridCellWidget],
  template: `
    <div
      ngGrid
      aria-label="Select year"
      class="grid grid-cols-3 gap-2"
      colWrap="continuous"
      rowWrap="continuous"
      [enableSelection]="true"
      selectionMode="explicit"
    >
      @for (year of years(); track year.value; let row = $index) {
        @if (row % 3 === 0) {
          <div ngGridRow class="contents">
            @for (
              y of [years()[row], years()[row + 1], years()[row + 2]];
              track y?.value
            ) {
              @if (y) {
                <div ngGridCell class="contents" [(selected)]="y.selected">
                  <button
                    ngGridCellWidget
                    type="button"
                    [class]="getYearButtonClass(y)"
                    (click)="handleYearClick(y.value)"
                    (keydown)="handleKeyDown($event, y.value)"
                    [attr.aria-current]="y.isCurrentYear ? 'date' : null"
                    [attr.aria-label]="y.label"
                  >
                    {{ y.label }}
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
        selected: signal(year === selectedYear),
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

  protected handleYearClick(year: number): void {
    this.yearSelected.emit(year);
  }

  protected handleKeyDown(event: KeyboardEvent, year: number): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.yearSelected.emit(year);
    }
  }
}
