import { ChangeDetectionStrategy, Component } from '@angular/core';
import QrCodeDemoContainer from './demos/qr-code-demo-container';

@Component({
  selector: 'app-qr-code-page',
  imports: [QrCodeDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">QrCode</h1>
        <p class="text-muted-foreground">
          Generate QR codes from text or URLs with customizable colors and logo
          support.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-qr-code-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class QrCodePage {}
