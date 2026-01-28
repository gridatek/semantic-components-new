import { computed, Directive, input } from '@angular/core';
import { cn } from '../../utils';

@Directive({
  selector: 'input[scNativeCheckbox]',
  host: {
    type: 'checkbox',
    'data-slot': 'checkbox',
    '[class]': 'class()',
  },
})
export class ScNativeCheckbox {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'peer h-4 w-4 shrink-0 appearance-none rounded-sm border border-primary bg-background ring-offset-background transition-colors',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'checked:bg-primary checked:border-primary',
      'indeterminate:bg-primary indeterminate:border-primary',
      this.classInput(),
    ),
  );
}
