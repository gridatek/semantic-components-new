import { computed, Directive, input } from '@angular/core';
import { cn } from '../../utils';

@Directive({
  selector: 'div[sc-tree]',
  host: {
    'data-slot': 'tree',
    role: 'tree',
    '[class]': 'class()',
  },
})
export class ScTree {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('flex flex-col gap-1', this.classInput()),
  );
}
