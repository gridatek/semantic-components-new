import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScQrCodeDemo } from './qr-code-demo';

@Component({
  selector: 'app-qr-code-demo-container',
  imports: [DemoContainer, ScQrCodeDemo],
  template: `
    <app-demo-container title="Qr" [code]="code">
      <app-qr-code-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScQrCodeDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScQrCode, ScQrCodeDownload } from '@semantic-components/ui';

@Component({
  selector: 'app-qr-code-demo',
  imports: [ScQrCode, ScQrCodeDownload, FormsModule],
  template: \`
    <div class="space-y-8">
      <!-- Basic QR Code -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Basic QR Code</h3>
        <p class="text-sm text-muted-foreground">
          Generate a QR code from any text or URL.
        </p>
        <sc-qr-code [value]="'https://angular.io'" [size]="200" />
      </section>

      <!-- Interactive -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Interactive</h3>
        <p class="text-sm text-muted-foreground">
          Type text to generate a QR code in real-time.
        </p>
        <input
          type="text"
          [(ngModel)]="inputValue"
          placeholder="Enter text or URL..."
          class="w-full max-w-sm px-3 py-2 border rounded-md"
        />
        @if (inputValue) {
          <sc-qr-code [value]="inputValue" [size]="200" />
        }
      </section>

      <!-- Different Sizes -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Different Sizes</h3>
        <p class="text-sm text-muted-foreground">QR codes at various sizes.</p>
        <div class="flex items-end gap-4 flex-wrap">
          <div class="text-center">
            <sc-qr-code [value]="'Small'" [size]="100" />
            <p class="text-xs text-muted-foreground mt-1">100px</p>
          </div>
          <div class="text-center">
            <sc-qr-code [value]="'Medium'" [size]="150" />
            <p class="text-xs text-muted-foreground mt-1">150px</p>
          </div>
          <div class="text-center">
            <sc-qr-code [value]="'Large'" [size]="200" />
            <p class="text-xs text-muted-foreground mt-1">200px</p>
          </div>
        </div>
      </section>

      <!-- Custom Colors -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Custom Colors</h3>
        <p class="text-sm text-muted-foreground">
          QR codes with custom foreground and background colors.
        </p>
        <div class="flex gap-4 flex-wrap">
          <sc-qr-code
            [value]="'Blue QR'"
            [size]="150"
            [foregroundColor]="'#1d4ed8'"
            [backgroundColor]="'#dbeafe'"
          />
          <sc-qr-code
            [value]="'Green QR'"
            [size]="150"
            [foregroundColor]="'#166534'"
            [backgroundColor]="'#dcfce7'"
          />
          <sc-qr-code
            [value]="'Purple QR'"
            [size]="150"
            [foregroundColor]="'#7c3aed'"
            [backgroundColor]="'#f3e8ff'"
          />
        </div>
      </section>

      <!-- Error Correction Levels -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Error Correction Levels</h3>
        <p class="text-sm text-muted-foreground">
          Higher error correction allows more damage but produces denser codes.
        </p>
        <div class="flex gap-4 flex-wrap">
          <div class="text-center">
            <sc-qr-code
              [value]="'Error Correction Test'"
              [size]="150"
              [errorCorrectionLevel]="'L'"
            />
            <p class="text-xs text-muted-foreground mt-1">Low (7%)</p>
          </div>
          <div class="text-center">
            <sc-qr-code
              [value]="'Error Correction Test'"
              [size]="150"
              [errorCorrectionLevel]="'M'"
            />
            <p class="text-xs text-muted-foreground mt-1">Medium (15%)</p>
          </div>
          <div class="text-center">
            <sc-qr-code
              [value]="'Error Correction Test'"
              [size]="150"
              [errorCorrectionLevel]="'Q'"
            />
            <p class="text-xs text-muted-foreground mt-1">Quartile (25%)</p>
          </div>
          <div class="text-center">
            <sc-qr-code
              [value]="'Error Correction Test'"
              [size]="150"
              [errorCorrectionLevel]="'H'"
            />
            <p class="text-xs text-muted-foreground mt-1">High (30%)</p>
          </div>
        </div>
      </section>

      <!-- With Logo -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">With Logo</h3>
        <p class="text-sm text-muted-foreground">
          QR code with a centered logo overlay. Use higher error correction for
          best results.
        </p>
        <div class="flex gap-4 flex-wrap">
          <sc-qr-code
            [value]="'https://angular.io'"
            [size]="200"
            [errorCorrectionLevel]="'H'"
            [logo]="'https://angular.io/assets/images/logos/angular/angular.svg'"
            [logoSize]="0.25"
          />
        </div>
      </section>

      <!-- Different Quiet Zones -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Quiet Zone</h3>
        <p class="text-sm text-muted-foreground">
          The quiet zone (white border) ensures reliable scanning.
        </p>
        <div class="flex gap-4 flex-wrap items-end">
          <div class="text-center">
            <sc-qr-code
              [value]="'No border'"
              [size]="150"
              [quietZone]="0"
              class="border"
            />
            <p class="text-xs text-muted-foreground mt-1">No quiet zone</p>
          </div>
          <div class="text-center">
            <sc-qr-code [value]="'Small border'" [size]="150" [quietZone]="1" />
            <p class="text-xs text-muted-foreground mt-1">1 module</p>
          </div>
          <div class="text-center">
            <sc-qr-code
              [value]="'Standard border'"
              [size]="150"
              [quietZone]="4"
            />
            <p class="text-xs text-muted-foreground mt-1">
              4 modules (standard)
            </p>
          </div>
        </div>
      </section>

      <!-- With Download -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">With Download Button</h3>
        <p class="text-sm text-muted-foreground">
          QR code with built-in download functionality.
        </p>
        <sc-qr-code-download
          [value]="'https://example.com/download'"
          [size]="200"
          [filename]="'my-qr-code'"
          [downloadLabel]="'Save QR Code'"
        />
      </section>

      <!-- URL Examples -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Common Use Cases</h3>
        <p class="text-sm text-muted-foreground">
          QR codes for various types of content.
        </p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="text-center">
            <sc-qr-code [value]="'https://example.com'" [size]="120" />
            <p class="text-xs text-muted-foreground mt-1">Website URL</p>
          </div>
          <div class="text-center">
            <sc-qr-code [value]="'tel:+1234567890'" [size]="120" />
            <p class="text-xs text-muted-foreground mt-1">Phone Number</p>
          </div>
          <div class="text-center">
            <sc-qr-code [value]="'mailto:hello@example.com'" [size]="120" />
            <p class="text-xs text-muted-foreground mt-1">Email</p>
          </div>
          <div class="text-center">
            <sc-qr-code
              [value]="'WIFI:T:WPA;S:MyNetwork;P:password123;;'"
              [size]="120"
            />
            <p class="text-xs text-muted-foreground mt-1">WiFi</p>
          </div>
        </div>
      </section>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScQrCodeDemo {
  inputValue = 'Hello, World!';
}`;
}
