import { computed, Directive, input } from '@angular/core';
import { cn } from '../../utils';

@Directive({
  selector: 'nav[sc-pagination]',
  host: {
    'data-slot': 'pagination',
    role: 'navigation',
    '[attr.aria-label]': '"pagination"',
    '[class]': 'class()',
  },
})
export class ScPagination {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('mx-auto flex w-full justify-center', this.classInput()),
  );
}
