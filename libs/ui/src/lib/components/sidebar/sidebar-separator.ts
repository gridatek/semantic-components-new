import { computed, Directive, input } from '@angular/core';
import { cn } from '../../utils';

@Directive({
  selector: '[sc-sidebar-separator]',
  host: {
    'data-slot': 'sidebar-separator',
    '[class]': 'class()',
  },
})
export class ScSidebarSeparator {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('mx-2 w-auto bg-sidebar-border h-px', this.classInput()),
  );
}
