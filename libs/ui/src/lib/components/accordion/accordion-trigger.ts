import { AccordionTrigger } from '@angular/aria/accordion';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';
import { ScAccordionDownIcon } from './accordion-down-icon';

import {
  SiChevronDownIcon,
  SiChevronUpIcon,
} from '@semantic-icons/lucide-icons';
import { ScAccordionUpIcon } from './accordion-up-icon';

@Component({
  selector: 'button[sc-accordion-trigger]',
  hostDirectives: [
    {
      directive: AccordionTrigger,
      inputs: ['panelId', 'disabled', 'expanded'],
      outputs: ['expandedChange'],
    },
  ],
  template: `
    <ng-content />
    <svg si-chevron-down-icon sc-accordion-down-icon></svg>
    <svg si-chevron-up-icon sc-accordion-up-icon></svg>
  `,
  host: {
    'data-slot': 'accordion-trigger',
    '[attr.data-state]': 'trigger.expanded() ? "open" : "closed"',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ScAccordionDownIcon,
    ScAccordionUpIcon,
    SiChevronDownIcon,
    SiChevronUpIcon,
  ],
})
export class ScAccordionTrigger {
  protected readonly trigger = inject(AccordionTrigger);

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'focus-visible:ring-ring/50 focus-visible:border-ring focus-visible:after:border-ring **:data-[slot=accordion-trigger-icon]:text-muted-foreground rounded-lg py-2.5 text-left text-sm font-medium hover:underline focus-visible:ring-[3px] **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 group/accordion-trigger relative flex flex-1 items-start justify-between border border-transparent transition-all outline-none disabled:pointer-events-none disabled:opacity-50',
      this.classInput(),
    ),
  );
}
