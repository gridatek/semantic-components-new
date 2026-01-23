import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScAlertDemo } from './alert-demo';

@Component({
  selector: 'app-alert-demo-container',
  imports: [DemoContainer, ScAlertDemo],
  template: `
    <app-demo-container title="Alert" [code]="code">
      <app-sc-alert-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AlertDemoContainer {
  readonly code = '';
}
