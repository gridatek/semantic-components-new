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

@Component({
  selector: 'button[sc-collapsible-trigger]',
  hostDirectives: [
    {
      directive: AccordionTrigger,
      inputs: ['panelId', 'disabled', 'expanded'],
      outputs: ['expandedChange'],
    },
  ],
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'collapsible-trigger',
    '[attr.data-state]': 'trigger.expanded() ? "open" : "closed"',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCollapsibleTrigger {
  protected readonly trigger = inject(AccordionTrigger);

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('', this.classInput()));
}
