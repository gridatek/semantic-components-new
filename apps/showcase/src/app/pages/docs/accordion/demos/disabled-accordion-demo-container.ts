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
export default class DisabledAccordionDemoContainer {
  readonly code = '';
}
