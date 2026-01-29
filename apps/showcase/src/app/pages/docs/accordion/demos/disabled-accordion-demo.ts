import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScAccordion,
  ScAccordionPanel,
  ScAccordionItem,
  ScAccordionTrigger,
  ScAccordionContent,
} from '@semantic-components/ui';

@Component({
  selector: 'app-disabled-accordion-demo',
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
        <button sc-accordion-trigger panelId="enabled-1" [expanded]="true">
          Enabled Item
        </button>
        <div sc-accordion-panel panelId="enabled-1">
          <div sc-accordion-content>This item can be toggled normally.</div>
        </div>
      </div>
      <div sc-accordion-item>
        <button sc-accordion-trigger panelId="disabled-1" [disabled]="true">
          Disabled Item
        </button>
        <div sc-accordion-panel panelId="disabled-1">
          <div sc-accordion-content>This content won't be shown.</div>
        </div>
      </div>
      <div sc-accordion-item>
        <button sc-accordion-trigger panelId="enabled-2">
          Another Enabled Item
        </button>
        <div sc-accordion-panel panelId="enabled-2">
          <div sc-accordion-content>This item also works normally.</div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledAccordionDemo {}
