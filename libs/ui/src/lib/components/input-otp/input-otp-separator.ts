import { computed, Directive, input } from '@angular/core';
import { cn } from '../../utils';

@Directive({
  selector: '[sc-input-otp-separator]',
  host: {
    'data-slot': 'input-otp-separator',
    role: 'separator',
    '[class]': 'class()',
  },
})
export class ScInputOtpSeparator {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('flex items-center', this.classInput()),
  );
}
