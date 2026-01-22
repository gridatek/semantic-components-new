import { computed, Directive, input } from '@angular/core';
import { cn } from '../../utils';

@Directive({
  selector: '[sc-dropdown-menu-separator]',
  host: {
    'data-slot': 'dropdown-menu-separator',
    role: 'separator',
    '[class]': 'class()',
  },
})
export class ScDropdownMenuSeparator {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('-mx-1 my-1 h-px bg-muted', this.classInput()),
  );
}
