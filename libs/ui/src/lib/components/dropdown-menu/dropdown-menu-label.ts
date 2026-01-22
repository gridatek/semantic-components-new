import { computed, Directive, input } from '@angular/core';
import { cn } from '../../utils';

@Directive({
  selector: '[sc-dropdown-menu-label]',
  host: {
    'data-slot': 'dropdown-menu-label',
    '[class]': 'class()',
  },
})
export class ScDropdownMenuLabel {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly inset = input<boolean>(false);

  protected readonly class = computed(() =>
    cn(
      'px-2 py-1.5 text-sm font-semibold',
      this.inset() && 'pl-8',
      this.classInput(),
    ),
  );
}
