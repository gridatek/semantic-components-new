import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScAccordion,
  ScAccordionPanel,
  ScAccordionItem,
  ScAccordionTrigger,
} from '@semantic-components/ui';

@Component({
  selector: 'app-multiple-accordion-demo',
  imports: [ScAccordion, ScAccordionPanel, ScAccordionItem, ScAccordionTrigger],
  template: `
    <div sc-accordion [multiExpandable]="true" class="w-full max-w-md">
      <div sc-accordion-item>
        <button sc-accordion-trigger panelId="item-a" [expanded]="true">
          Can I open multiple items?
        </button>
        <div sc-accordion-panel panelId="item-a">
          Yes! When using multiExpandable, you can have multiple accordion items
          open at the same time.
        </div>
      </div>
      <div sc-accordion-item>
        <button sc-accordion-trigger panelId="item-b" [expanded]="true">
          How does it work?
        </button>
        <div sc-accordion-panel panelId="item-b">
          Each trigger has an expanded input that you can bind to with
          [(expanded)] for two-way binding.
        </div>
      </div>
      <div sc-accordion-item>
        <button sc-accordion-trigger panelId="item-c">
          What about accessibility?
        </button>
        <div sc-accordion-panel panelId="item-c">
          Each item uses proper ARIA attributes including aria-expanded and
          role="region" for the content.
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultipleAccordionDemo {}
