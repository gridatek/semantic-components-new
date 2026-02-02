import { computed, Directive, input } from '@angular/core';
import { cn } from '../../utils';

@Directive({
  selector: 'div[sc-combobox-list]',
  host: {
    'data-slot': 'combobox-list',
    role: 'listbox',
    '[class]': 'class()',
  },
})
export class ScComboboxList {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('max-h-[300px] overflow-y-auto overflow-x-hidden', this.classInput()),
  );
}
