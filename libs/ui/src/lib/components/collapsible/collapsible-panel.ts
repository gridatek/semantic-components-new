import { NgTemplateOutlet } from '@angular/common';
import { AccordionContent, AccordionPanel } from '@angular/aria/accordion';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  input,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';

@Component({
  selector: 'div[sc-collapsible-panel]',
  imports: [AccordionContent, NgTemplateOutlet],
  hostDirectives: [
    {
      directive: AccordionPanel,
      inputs: ['panelId'],
    },
  ],
  template: `
    <ng-template ngAccordionContent>
      <div
        class="overflow-hidden"
        animate.enter="animate-collapsible-down"
        animate.leave="animate-collapsible-up"
      >
        <ng-template [ngTemplateOutlet]="contentTpl()" />
      </div>
    </ng-template>
  `,
  host: {
    'data-slot': 'collapsible-panel',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCollapsiblePanel {
  readonly contentTpl = contentChild.required(TemplateRef);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('', this.classInput()));
}
