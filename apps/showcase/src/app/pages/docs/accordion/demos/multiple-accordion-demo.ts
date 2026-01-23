import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScAccordion,
  ScAccordionContent,
  ScAccordionItem,
  ScAccordionTrigger,
} from '@semantic-components/ui';

@Component({
  selector: 'app-multiple-accordion-demo',
  imports: [
    ScAccordion,
    ScAccordionContent,
    ScAccordionItem,
    ScAccordionTrigger,
  ],
  template: `
    <div
      sc-accordion
      type="multiple"
      [value]="['item-a', 'item-b']"
      class="w-full max-w-md"
    >
      <div sc-accordion-item value="item-a">
        <button sc-accordion-trigger>Can I open multiple items?</button>
        <div sc-accordion-content>
          Yes! When using type="multiple", you can have multiple accordion items
          open at the same time.
        </div>
      </div>
      <div sc-accordion-item value="item-b">
        <button sc-accordion-trigger>How does it work?</button>
        <div sc-accordion-content>
          The value is an array of strings representing the currently open
          items. You can bind to it with [(value)].
        </div>
      </div>
      <div sc-accordion-item value="item-c">
        <button sc-accordion-trigger>What about accessibility?</button>
        <div sc-accordion-content>
          Each item uses proper ARIA attributes including aria-expanded and
          role="region" for the content.
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultipleAccordionDemo {}
