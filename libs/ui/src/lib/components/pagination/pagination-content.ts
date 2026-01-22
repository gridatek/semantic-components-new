import { computed, Directive, input } from '@angular/core';
import { cn } from '../../utils';

@Directive({
  selector: 'ul[sc-pagination-content]',
  host: {
    'data-slot': 'pagination-content',
    '[class]': 'class()',
  },
})
export class ScPaginationContent {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('flex flex-row items-center gap-1', this.classInput()),
  );
}
