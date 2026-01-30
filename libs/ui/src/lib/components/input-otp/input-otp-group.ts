import { computed, Directive, input } from '@angular/core';
import { cn } from '../../utils';

@Directive({
  selector: '[sc-input-otp-group]',
  host: {
    'data-slot': 'input-otp-group',
    '[class]': 'class()',
  },
})
export class ScInputOtpGroup {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('flex items-center', this.classInput()),
  );
}
