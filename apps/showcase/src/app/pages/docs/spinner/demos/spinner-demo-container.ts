import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScSpinnerDemo } from './spinner-demo';

@Component({
  selector: 'app-spinner-demo-container',
  imports: [DemoContainer, ScSpinnerDemo],
  template: `
    <app-demo-container title="Spinner" [code]="code">
      <sc-spinner-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SpinnerDemoContainer {
  readonly code = '';
}
