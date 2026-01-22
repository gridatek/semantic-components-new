import { computed, Directive, inject, input } from '@angular/core';
import { cn } from '../../utils';
import { ScCollapsible } from './sc-collapsible';

@Directive({
  selector: 'button[sc-collapsible-trigger]',
  host: {
    'data-slot': 'collapsible-trigger',
    '[class]': 'class()',
    '[attr.aria-expanded]': 'collapsible.open()',
    '[attr.aria-disabled]': 'collapsible.disabled() || null',
    '[disabled]': 'collapsible.disabled()',
    '(click)': 'collapsible.toggle()',
  },
})
export class ScCollapsibleTrigger {
  readonly collapsible = inject(ScCollapsible);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('', this.classInput()));
}
