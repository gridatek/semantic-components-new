import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScAccordion,
  ScAccordionPanel,
  ScAccordionItem,
  ScAccordionTrigger,
} from '@semantic-components/ui';

@Component({
  selector: 'app-basic-accordion-demo',
  imports: [ScAccordion, ScAccordionPanel, ScAccordionItem, ScAccordionTrigger],
  template: `
    <div sc-accordion class="w-full max-w-md">
      <div sc-accordion-item>
        <button sc-accordion-trigger panelId="item-1" [expanded]="true">
          Is it accessible?
        </button>
        <div sc-accordion-panel panelId="item-1">
          Yes. It adheres to the WAI-ARIA design pattern.
        </div>
      </div>
      <div sc-accordion-item>
        <button sc-accordion-trigger panelId="item-2">Is it styled?</button>
        <div sc-accordion-panel panelId="item-2">
          Yes. It comes with default styles that match the other components'
          aesthetic.
        </div>
      </div>
      <div sc-accordion-item>
        <button sc-accordion-trigger panelId="item-3">Is it animated?</button>
        <div sc-accordion-panel panelId="item-3">
          Yes. It's animated by default, but you can disable it if you prefer.
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicAccordionDemo {}
