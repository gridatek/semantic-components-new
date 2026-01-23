import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScAlertDialogDemo } from './alert-dialog-demo';

@Component({
  selector: 'app-alert-dialog-demo-container',
  imports: [DemoContainer, ScAlertDialogDemo],
  template: `
    <app-demo-container title="AlertDialog" [code]="code">
      <app-sc-alert-dialog-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AlertDialogDemoContainer {
  readonly code = '';
}
