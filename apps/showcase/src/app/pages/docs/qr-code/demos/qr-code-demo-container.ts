import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScQrCodeDemo } from './qr-code-demo';

@Component({
  selector: 'app-qr-code-demo-container',
  imports: [DemoContainer, ScQrCodeDemo],
  template: `
    <app-demo-container title="QrCode" [code]="code">
      <sc-qr-code-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class QrCodeDemoContainer {
  readonly code = '';
}
