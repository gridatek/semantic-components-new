import { computed, Directive, input } from '@angular/core';
import { cn } from '../../utils';

@Directive({
  selector: 'svg[sc-spinner]',
  host: {
    'data-slot': 'spinner',
    role: 'status',
    '[attr.aria-label]': 'label()',
    '[class]': 'class()',
  },
})
export class ScSpinner {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly label = input<string>('Loading');

  protected readonly class = computed(() =>
    cn('size-4 animate-spin', this.classInput()),
  );
}
