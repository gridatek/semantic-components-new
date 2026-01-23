import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScAccordion,
  ScAccordionContent,
  ScAccordionItem,
  ScAccordionTrigger,
} from '@semantic-components/ui';

@Component({
  selector: 'app-sc-accordion-demo',
  imports: [
    ScAccordion,
    ScAccordionContent,
    ScAccordionItem,
    ScAccordionTrigger,
  ],
  template: `
    <div class="flex flex-col gap-8">
      <!-- Single Accordion (default) -->
      <div class="w-full max-w-md">
        <h3 class="mb-4 text-sm font-medium text-muted-foreground">
          Single (collapsible)
        </h3>
        <div sc-accordion [value]="'item-1'" [collapsible]="true">
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
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </div>
          </div>
        </div>
      </div>

      <!-- Multiple Accordion -->
      <div class="w-full max-w-md">
        <h3 class="mb-4 text-sm font-medium text-muted-foreground">Multiple</h3>
        <div sc-accordion type="multiple" [value]="['item-a', 'item-b']">
          <div sc-accordion-item value="item-a">
            <button sc-accordion-trigger>Can I open multiple items?</button>
            <div sc-accordion-content>
              Yes! When using type="multiple", you can have multiple accordion
              items open at the same time.
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
      </div>

      <!-- With Disabled Item -->
      <div class="w-full max-w-md">
        <h3 class="mb-4 text-sm font-medium text-muted-foreground">
          With Disabled Item
        </h3>
        <div sc-accordion [value]="'enabled-1'" [collapsible]="true">
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
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAccordionDemo {}
