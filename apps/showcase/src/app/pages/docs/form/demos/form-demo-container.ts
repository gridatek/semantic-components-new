import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScFormDemo } from './form-demo';

@Component({
  selector: 'app-form-demo-container',
  imports: [DemoContainer, ScFormDemo],
  template: `
    <app-demo-container title="Form" [code]="code">
      <app-sc-form-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FormDemoContainer {
  readonly code = '';
}
