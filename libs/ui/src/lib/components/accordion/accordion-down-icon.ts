import { computed, Directive, input } from '@angular/core';
import { cn } from '../../utils';

@Directive({
  selector: 'svg[sc-accordion-down-icon]',
  host: {
    'data-slot': 'accordion-trigger-icon',
    '[class]': 'class()',
  },
})
export class ScAccordionDownIcon {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden',
      this.classInput(),
    ),
  );
}
