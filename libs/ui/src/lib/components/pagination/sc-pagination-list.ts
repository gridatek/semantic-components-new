import { computed, Directive, input } from '@angular/core';
import { cn } from '../../utils';

@Directive({
  selector: 'ul[sc-pagination-list]',
  host: {
    'data-slot': 'pagination-list',
    '[class]': 'class()',
  },
})
export class ScPaginationList {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('flex flex-row items-center gap-1', this.classInput()),
  );
}
