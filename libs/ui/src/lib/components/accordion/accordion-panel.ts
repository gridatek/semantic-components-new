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
  selector: 'div[sc-accordion-panel]',
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
        class="text-sm overflow-hidden"
        animate.enter="animate-accordion-down"
        animate.leave="animate-accordion-up"
      >
        <ng-template [ngTemplateOutlet]="contentTpl()" />
      </div>
    </ng-template>
  `,
  host: {
    'data-slot': 'accordion-panel',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAccordionPanel {
  readonly contentTpl = contentChild.required(TemplateRef);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('', this.classInput()));
}
