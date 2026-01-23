import { ChangeDetectionStrategy, Component } from '@angular/core';
import BasicAccordionDemoContainer from './demos/basic-accordion-demo-container';
import MultipleAccordionDemoContainer from './demos/multiple-accordion-demo-container';
import DisabledAccordionDemoContainer from './demos/disabled-accordion-demo-container';

@Component({
  selector: 'app-accordion-page',
  imports: [
    BasicAccordionDemoContainer,
    MultipleAccordionDemoContainer,
    DisabledAccordionDemoContainer,
  ],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Accordion</h1>
        <p class="text-muted-foreground">
          A vertically stacked set of interactive headings that reveal or hide
          associated content.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-basic-accordion-demo-container />
        <app-multiple-accordion-demo-container />
        <app-disabled-accordion-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AccordionPage {}
