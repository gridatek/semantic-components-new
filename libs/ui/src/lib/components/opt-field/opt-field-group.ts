import { computed, Directive, input } from '@angular/core';
import { cn } from '../../utils';

@Directive({
  selector: '[sc-opt-field-group]',
  host: {
    'data-slot': 'opt-field-group',
    '[class]': 'class()',
  },
})
export class ScOptFieldGroup {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('flex items-center', this.classInput()),
  );
}
