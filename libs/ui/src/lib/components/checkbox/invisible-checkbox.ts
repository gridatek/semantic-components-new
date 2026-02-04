import { computed, Directive, input } from '@angular/core';
import { cn } from '../../utils';

@Directive({
  selector: 'input[type="checkbox"][sc-invisible-checkbox]',
  host: {
    'data-slot': 'invisible-checkbox',
    '[class]': 'class()',
  },
})
export class ScInvisibleCheckbox {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'peer absolute inset-0 size-full cursor-pointer opacity-0',
      'disabled:cursor-not-allowed',
      this.classInput(),
    ),
  );
}
