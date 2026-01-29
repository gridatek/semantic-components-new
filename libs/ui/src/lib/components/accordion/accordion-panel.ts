import { AccordionContent, AccordionPanel } from '@angular/aria/accordion';
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
  selector: 'div[sc-accordion-panel]',
  imports: [AccordionContent],
  hostDirectives: [
    {
      directive: AccordionPanel,
      inputs: ['panelId'],
    },
  ],
  template: `
    <ng-template ngAccordionContent>
      <ng-content />
    </ng-template>
  `,
  host: {
    'data-slot': 'accordion-panel',
    '[attr.data-state]': 'panel.visible() ? "open" : "closed"',
    '[class]': 'class()',
    'animate.enter': 'animate-accordion-down',
    'animate.leave': 'animate-accordion-up',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAccordionPanel {
  protected readonly panel = inject(AccordionPanel);

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('text-sm overflow-hidden', this.classInput()),
  );
}
