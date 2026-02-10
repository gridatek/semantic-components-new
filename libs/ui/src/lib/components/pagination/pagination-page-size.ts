import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';
import { ScPagination } from './pagination';

@Component({
  selector: 'sc-pagination-page-size',
  host: {
    'data-slot': 'pagination-page-size',
    '[class]': 'class()',
  },
  template: `
    <select
      [value]="pagination.pageSize()"
      (change)="onPageSizeChange($event)"
      class="h-8 rounded-md border border-input bg-background px-3 text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      @for (option of pagination.pageSizes(); track option) {
        <option [value]="option">{{ option }}</option>
      }
    </select>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPaginationPageSize {
  protected readonly pagination = inject(ScPagination);

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('', this.classInput()));

  protected onPageSizeChange(event: Event): void {
    event.stopPropagation();
    const select = event.target as HTMLSelectElement;
    const newPageSize = parseInt(select.value, 10);
    this.pagination.changePageSize(newPageSize);
  }
}
