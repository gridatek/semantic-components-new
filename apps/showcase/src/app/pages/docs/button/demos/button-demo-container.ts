import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScButtonDemo } from './button-demo';

@Component({
  selector: 'app-button-demo-container',
  imports: [DemoContainer, ScButtonDemo],
  template: `
    <app-demo-container title="Button" [code]="code">
      <app-sc-button-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ButtonDemoContainer {
  readonly code = '';
}
