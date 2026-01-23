import { ChangeDetectionStrategy, Component } from '@angular/core';
import AccordionDemoContainer from './demos/accordion-demo-container';

@Component({
  selector: 'app-accordion-page',
  imports: [AccordionDemoContainer],
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
        <app-accordion-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AccordionPage {}
