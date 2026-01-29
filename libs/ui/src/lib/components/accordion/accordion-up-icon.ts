import { computed, Directive, input } from '@angular/core';
import { cn } from '../../utils';

@Directive({
  selector: 'svg[sc-accordion-up-icon]',
  host: {
    'data-slot': 'accordion-trigger-icon',
    '[class]': 'class()',
  },
})
export class ScAccordionUpIcon {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline',
      this.classInput(),
    ),
  );
}
