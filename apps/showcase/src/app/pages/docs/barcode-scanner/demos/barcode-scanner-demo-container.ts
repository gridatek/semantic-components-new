import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScBarcodeScannerDemo } from './barcode-scanner-demo';

@Component({
  selector: 'app-barcode-scanner-demo-container',
  imports: [DemoContainer, ScBarcodeScannerDemo],
  template: `
    <app-demo-container title="BarcodeScanner" [code]="code">
      <sc-barcode-scanner-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BarcodeScannerDemoContainer {
  readonly code = '';
}
