import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScAccordionDemo } from './accordion-demo';

@Component({
  selector: 'app-accordion-demo-container',
  imports: [DemoContainer, ScAccordionDemo],
  template: `
    <app-demo-container title="Accordion" [code]="code">
      <app-sc-accordion-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AccordionDemoContainer {
  readonly code = '';
}
