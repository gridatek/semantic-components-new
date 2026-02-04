import { computed, Directive, input } from '@angular/core';
import { cn } from '../../utils';

@Directive({
  selector: 'input[type="radio"][sc-invisible-radio]',
  host: {
    'data-slot': 'invisible-radio',
    '[class]': 'class()',
  },
})
export class ScInvisibleRadio {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'peer absolute inset-0 size-full cursor-pointer opacity-0',
      'disabled:cursor-not-allowed',
      this.classInput(),
    ),
  );
}
