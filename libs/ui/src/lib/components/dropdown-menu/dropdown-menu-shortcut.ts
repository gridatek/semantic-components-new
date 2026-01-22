import { computed, Directive, input } from '@angular/core';
import { cn } from '../../utils';

@Directive({
  selector: '[sc-dropdown-menu-shortcut]',
  host: {
    'data-slot': 'dropdown-menu-shortcut',
    '[class]': 'class()',
  },
})
export class ScDropdownMenuShortcut {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('ml-auto text-xs tracking-widest opacity-60', this.classInput()),
  );
}
