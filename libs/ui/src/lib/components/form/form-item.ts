import { computed, Directive, input } from '@angular/core';
import { cn } from '../../utils';

@Directive({
  selector: 'div[sc-form-item]',
  host: {
    'data-slot': 'form-item',
    '[class]': 'class()',
  },
})
export class ScFormItem {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('space-y-2', this.classInput()));
}
