import { computed, Directive, input } from '@angular/core';
import { cn } from '../../utils';

@Directive({
  selector: 'th[sc-table-head]',
  host: {
    'data-slot': 'table-head',
    '[class]': 'class()',
  },
})
export class ScTableHead {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0',
      this.classInput(),
    ),
  );
}
