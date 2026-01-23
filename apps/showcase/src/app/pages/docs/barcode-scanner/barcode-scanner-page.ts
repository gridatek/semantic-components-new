import { ChangeDetectionStrategy, Component } from '@angular/core';
import BarcodeScannerDemoContainer from './demos/barcode-scanner-demo-container';

@Component({
  selector: 'app-barcode-scanner-page',
  imports: [BarcodeScannerDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">BarcodeScanner</h1>
        <p class="text-muted-foreground">
          Scan barcodes and QR codes using your device's camera with the Barcode
          Detection API.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-barcode-scanner-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BarcodeScannerPage {}
