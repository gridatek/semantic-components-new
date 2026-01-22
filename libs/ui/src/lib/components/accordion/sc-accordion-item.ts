import { computed, Directive, inject, input } from '@angular/core';
import { cn } from '../../utils';
import { ScAccordion } from './sc-accordion';

@Directive({
  selector: 'div[sc-accordion-item]',
  host: {
    'data-slot': 'accordion-item',
    '[attr.data-state]': 'isOpen() ? "open" : "closed"',
    '[class]': 'class()',
  },
})
export class ScAccordionItem {
  readonly accordion = inject(ScAccordion);

  readonly classInput = input<string>('', { alias: 'class' });
  readonly value = input.required<string>();
  readonly disabled = input<boolean>(false);

  readonly isOpen = computed(() => this.accordion.isItemOpen(this.value()));

  protected readonly class = computed(() => cn('border-b', this.classInput()));

  toggle(): void {
    if (!this.disabled()) {
      this.accordion.toggleItem(this.value());
    }
  }
}
