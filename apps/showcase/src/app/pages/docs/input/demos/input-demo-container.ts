import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScInputDemo } from './input-demo';

@Component({
  selector: 'app-input-demo-container',
  imports: [DemoContainer, ScInputDemo],
  template: `
    <app-demo-container title="Input" [code]="code">
      <app-sc-input-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InputDemoContainer {
  readonly code = '';
}
