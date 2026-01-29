import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScAccordion,
  ScAccordionPanel,
  ScAccordionItem,
  ScAccordionTrigger,
  ScAccordionContent,
} from '@semantic-components/ui';

@Component({
  selector: 'app-basic-accordion-demo',
  imports: [
    ScAccordion,
    ScAccordionPanel,
    ScAccordionItem,
    ScAccordionTrigger,
    ScAccordionContent,
  ],
  template: `
    <div sc-accordion [multiExpandable]="false" class="w-full max-w-md">
      <div sc-accordion-item>
        <button sc-accordion-trigger panelId="item-1">Is it accessible?</button>
        <div sc-accordion-panel panelId="item-1">
          <div sc-accordion-content>
            Yes. It adheres to the WAI-ARIA design pattern.
          </div>
        </div>
      </div>
      <div sc-accordion-item>
        <button sc-accordion-trigger panelId="item-2">Is it styled?</button>
        <div sc-accordion-panel panelId="item-2">
          <div sc-accordion-content>
            Yes. It comes with default styles that match other components.
          </div>
        </div>
      </div>
      <div sc-accordion-item>
        <button sc-accordion-trigger panelId="item-3">Is it animated?</button>
        <div sc-accordion-panel panelId="item-3">
          <div sc-accordion-content>
            Yes. It's animated by default with smooth transitions.
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicAccordionDemo {}
