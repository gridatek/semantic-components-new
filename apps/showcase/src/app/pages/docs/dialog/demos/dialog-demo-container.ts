import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScDialogDemo } from './dialog-demo';

@Component({
  selector: 'app-dialog-demo-container',
  imports: [DemoContainer, ScDialogDemo],
  template: `
    <app-demo-container title="Dialog" [code]="code">
      <app-sc-dialog-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DialogDemoContainer {
  readonly code = '';
}
