import { computed, Directive, input } from '@angular/core';
import { cn } from '../../utils';

@Directive({
  selector: 'label[sc-label]',
  host: {
    'data-slot': 'label',
    '[class]': 'class()',
  },
})
export class ScLabel {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      this.classInput(),
    ),
  );
}
