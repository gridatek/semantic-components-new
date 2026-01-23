import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { DisabledAccordionDemo } from './disabled-accordion-demo';

@Component({
  selector: 'app-disabled-accordion-demo-container',
  imports: [DemoContainer, DisabledAccordionDemo],
  template: `
    <app-demo-container title="Disabled" [code]="code">
      <app-disabled-accordion-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledAccordionDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScAccordion,
  ScAccordionContent,
  ScAccordionItem,
  ScAccordionTrigger,
} from '@semantic-components/ui';

@Component({
  selector: 'app-disabled-accordion-demo',
  imports: [
    ScAccordion,
    ScAccordionContent,
    ScAccordionItem,
    ScAccordionTrigger,
  ],
  template: \`
    <div
      sc-accordion
      [value]="'enabled-1'"
      [collapsible]="true"
      class="w-full max-w-md"
    >
      <div sc-accordion-item value="enabled-1">
        <button sc-accordion-trigger>Enabled Item</button>
        <div sc-accordion-content>This item can be toggled normally.</div>
      </div>
      <div sc-accordion-item value="disabled-1" [disabled]="true">
        <button sc-accordion-trigger>Disabled Item</button>
        <div sc-accordion-content>This content won't be shown.</div>
      </div>
      <div sc-accordion-item value="enabled-2">
        <button sc-accordion-trigger>Another Enabled Item</button>
        <div sc-accordion-content>This item also works normally.</div>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledAccordionDemo {}`;
}
