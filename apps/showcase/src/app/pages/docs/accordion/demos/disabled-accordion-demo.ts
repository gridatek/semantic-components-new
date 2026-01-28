import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScAccordion,
  ScAccordionPanel,
  ScAccordionItem,
  ScAccordionTrigger,
} from '@semantic-components/ui';

@Component({
  selector: 'app-disabled-accordion-demo',
  imports: [
    ScAccordion,
    ScAccordionPanel,
    ScAccordionItem,
    ScAccordionTrigger,
  ],
  template: `
    <div
      sc-accordion
      [value]="'enabled-1'"
      [collapsible]="true"
      class="w-full max-w-md"
    >
      <div sc-accordion-item value="enabled-1">
        <button sc-accordion-trigger>Enabled Item</button>
        <div sc-accordion-panel>This item can be toggled normally.</div>
      </div>
      <div sc-accordion-item value="disabled-1" [disabled]="true">
        <button sc-accordion-trigger>Disabled Item</button>
        <div sc-accordion-panel>This content won't be shown.</div>
      </div>
      <div sc-accordion-item value="enabled-2">
        <button sc-accordion-trigger>Another Enabled Item</button>
        <div sc-accordion-panel>This item also works normally.</div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledAccordionDemo {}
