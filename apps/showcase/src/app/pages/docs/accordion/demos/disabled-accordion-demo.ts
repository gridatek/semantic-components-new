import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScAccordion,
  ScAccordionPanel,
  ScAccordionItem,
  ScAccordionTrigger,
} from '@semantic-components/ui';

@Component({
  selector: 'app-disabled-accordion-demo',
  imports: [ScAccordion, ScAccordionPanel, ScAccordionItem, ScAccordionTrigger],
  template: `
    <div sc-accordion class="w-full max-w-md">
      <div sc-accordion-item>
        <button sc-accordion-trigger panelId="enabled-1" [expanded]="true">
          Enabled Item
        </button>
        <div sc-accordion-panel panelId="enabled-1">
          This item can be toggled normally.
        </div>
      </div>
      <div sc-accordion-item>
        <button sc-accordion-trigger panelId="disabled-1" [disabled]="true">
          Disabled Item
        </button>
        <div sc-accordion-panel panelId="disabled-1">
          This content won't be shown.
        </div>
      </div>
      <div sc-accordion-item>
        <button sc-accordion-trigger panelId="enabled-2">
          Another Enabled Item
        </button>
        <div sc-accordion-panel panelId="enabled-2">
          This item also works normally.
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledAccordionDemo {}
