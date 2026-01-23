import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScNumberInputDemo } from './number-input-demo';

@Component({
  selector: 'app-number-input-demo-container',
  imports: [DemoContainer, ScNumberInputDemo],
  template: `
    <app-demo-container title="NumberInput" [code]="code">
      <app-sc-number-input-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NumberInputDemoContainer {
  readonly code = '';
}
