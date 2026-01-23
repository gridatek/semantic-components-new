import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { BasicAccordionDemo } from './basic-accordion-demo';

@Component({
  selector: 'app-basic-accordion-demo-container',
  imports: [DemoContainer, BasicAccordionDemo],
  template: `
    <app-demo-container title="Basic" [code]="code">
      <app-basic-accordion-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicAccordionDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScAccordion,
  ScAccordionContent,
  ScAccordionItem,
  ScAccordionTrigger,
} from '@semantic-components/ui';

@Component({
  selector: 'app-basic-accordion-demo',
  imports: [
    ScAccordion,
    ScAccordionContent,
    ScAccordionItem,
    ScAccordionTrigger,
  ],
  template: \`
    <div
      sc-accordion
      [value]="'item-1'"
      [collapsible]="true"
      class="w-full max-w-md"
    >
      <div sc-accordion-item value="item-1">
        <button sc-accordion-trigger>Is it accessible?</button>
        <div sc-accordion-content>
          Yes. It adheres to the WAI-ARIA design pattern.
        </div>
      </div>
      <div sc-accordion-item value="item-2">
        <button sc-accordion-trigger>Is it styled?</button>
        <div sc-accordion-content>
          Yes. It comes with default styles that match the other components'
          aesthetic.
        </div>
      </div>
      <div sc-accordion-item value="item-3">
        <button sc-accordion-trigger>Is it animated?</button>
        <div sc-accordion-content>
          Yes. It's animated by default, but you can disable it if you prefer.
        </div>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicAccordionDemo {}`;
}
