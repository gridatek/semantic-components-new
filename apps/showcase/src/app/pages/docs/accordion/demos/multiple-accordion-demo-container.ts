import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { MultipleAccordionDemo } from './multiple-accordion-demo';

@Component({
  selector: 'app-multiple-accordion-demo-container',
  imports: [DemoContainer, MultipleAccordionDemo],
  template: `
    <app-demo-container title="Multiple" [code]="code">
      <app-multiple-accordion-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultipleAccordionDemoContainer {
  readonly code = '';
}
