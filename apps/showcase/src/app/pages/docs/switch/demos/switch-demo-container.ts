import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScSwitchDemo } from './switch-demo';

@Component({
  selector: 'app-switch-demo-container',
  imports: [DemoContainer, ScSwitchDemo],
  template: `
    <app-demo-container title="Switch" [code]="code">
      <app-sc-switch-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SwitchDemoContainer {
  readonly code = '';
}
