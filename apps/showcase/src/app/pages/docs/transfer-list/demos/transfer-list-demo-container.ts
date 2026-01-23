import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { TransferListDemoComponent } from './transfer-list-demo';

@Component({
  selector: 'app-transfer-list-demo-container',
  imports: [DemoContainer, TransferListDemoComponent],
  template: `
    <app-demo-container title="TransferList" [code]="code">
      <sc-transfer-list-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TransferListDemoContainer {
  readonly code = '';
}
