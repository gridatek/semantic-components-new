import { computed, Directive, inject, input } from '@angular/core';
import { cn } from '../../utils';
import { SC_PASSWORD_FIELD } from '../password-field/password-field';

@Directive({
  selector: 'label[sc-label]',
  host: {
    'data-slot': 'label',
    '[attr.for]': 'passwordField?.inputId',
    '[class]': 'class()',
  },
})
export class ScLabel {
  protected readonly passwordField = inject(SC_PASSWORD_FIELD, {
    optional: true,
  });

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      this.classInput(),
    ),
  );
}
