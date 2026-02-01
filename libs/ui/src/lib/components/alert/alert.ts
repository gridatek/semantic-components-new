import { computed, Directive, input } from '@angular/core';
import { cn } from '../../utils';
import { alertVariants, ScAlertVariants } from './alert-variants';

@Directive({
  selector: '[sc-alert]',
  host: {
    'data-slot': 'alert',
    role: 'alert',
    '[class]': 'class()',
  },
})
export class ScAlert {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly variant = input<ScAlertVariants['variant']>('default');

  protected readonly class = computed(() =>
    cn(alertVariants({ variant: this.variant() }), this.classInput()),
  );
}
