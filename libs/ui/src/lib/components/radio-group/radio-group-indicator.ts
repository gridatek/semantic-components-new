import { computed, Directive, input } from '@angular/core';
import { cn } from '../../utils';

@Directive({
  selector: 'span[sc-radio-indicator]',
  host: {
    'data-slot': 'radio-indicator',
    '[class]': 'class()',
  },
})
export class ScRadioIndicator {
  readonly disabled = input<boolean>(false);

  protected readonly class = computed(() =>
    cn(
      'flex h-4 w-4 items-center justify-center rounded-full border border-primary text-primary ring-offset-background transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      !this.disabled() && 'border-primary',
      this.disabled() && 'opacity-50',
    ),
  );
}
