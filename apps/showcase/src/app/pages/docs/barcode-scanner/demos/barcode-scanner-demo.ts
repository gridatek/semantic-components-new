import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScBarcodeScanner,
  BarcodeResult,
  BarcodeFormat,
} from '@semantic-components/ui';

@Component({
  selector: 'sc-barcode-scanner-demo',
  imports: [ScBarcodeScanner],
  template: `
    <div class="space-y-8">
      <!-- Basic Scanner -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Basic Barcode Scanner</h3>
        <p class="text-sm text-muted-foreground">
          Scan barcodes using your device's camera. Supports QR codes, EAN, UPC,
          and more.
        </p>
        <sc-barcode-scanner (detected)="onDetected($event)" class="max-w-md" />
        @if (lastScannedBasic()) {
          <div class="p-4 bg-muted rounded-lg max-w-md">
            <p class="text-sm text-muted-foreground mb-1">Last scanned:</p>
            <p class="font-mono text-sm break-all">
              {{ lastScannedBasic()?.rawValue }}
            </p>
            <p class="text-xs text-muted-foreground mt-1">
              Format: {{ lastScannedBasic()?.format }}
            </p>
          </div>
        }
      </section>

      <!-- QR Code Only -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">QR Code Scanner</h3>
        <p class="text-sm text-muted-foreground">
          Scanner configured to detect only QR codes.
        </p>
        <sc-barcode-scanner
          [formats]="['qr_code']"
          (detected)="onQRDetected($event)"
          class="max-w-md"
        />
        @if (lastQR()) {
          <div class="p-4 bg-muted rounded-lg max-w-md">
            <p class="text-sm text-muted-foreground mb-1">QR Code content:</p>
            <p class="font-mono text-sm break-all">{{ lastQR()?.rawValue }}</p>
          </div>
        }
      </section>

      <!-- Product Barcode Scanner -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Product Barcode Scanner</h3>
        <p class="text-sm text-muted-foreground">
          Optimized for scanning product barcodes (EAN-13, EAN-8, UPC-A, UPC-E).
        </p>
        <sc-barcode-scanner
          [formats]="productFormats"
          (detected)="onProductDetected($event)"
          class="max-w-md"
        />
        @if (lastProduct()) {
          <div class="p-4 bg-muted rounded-lg max-w-md">
            <p class="text-sm text-muted-foreground mb-1">Product code:</p>
            <p class="font-mono text-lg">{{ lastProduct()?.rawValue }}</p>
            <p class="text-xs text-muted-foreground mt-1">
              Format: {{ lastProduct()?.format }}
            </p>
          </div>
        }
      </section>

      <!-- Single Scan Mode -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Single Scan Mode</h3>
        <p class="text-sm text-muted-foreground">
          Stops scanning after detecting one barcode.
        </p>
        <sc-barcode-scanner
          [continuous]="false"
          (detected)="onSingleDetected($event)"
          class="max-w-md"
        />
        @if (singleResult()) {
          <div
            class="p-4 bg-green-50 border border-green-200 rounded-lg max-w-md"
          >
            <p class="text-sm text-green-800 mb-1">Scan complete!</p>
            <p class="font-mono text-sm break-all text-green-900">
              {{ singleResult()?.rawValue }}
            </p>
          </div>
        }
      </section>

      <!-- Scan History -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Scan History</h3>
        <p class="text-sm text-muted-foreground">
          Keep track of all scanned barcodes.
        </p>
        <sc-barcode-scanner
          [showLastResult]="false"
          (detected)="addToHistory($event)"
          class="max-w-md"
        />
        @if (scanHistory().length > 0) {
          <div class="max-w-md">
            <div class="flex items-center justify-between mb-2">
              <p class="text-sm font-medium">
                Scanned ({{ scanHistory().length }})
              </p>
              <button
                (click)="clearHistory()"
                class="text-sm text-muted-foreground hover:text-foreground"
              >
                Clear
              </button>
            </div>
            <div class="space-y-2 max-h-48 overflow-y-auto">
              @for (item of scanHistory(); track $index) {
                <div class="p-2 bg-muted rounded text-sm">
                  <p class="font-mono break-all">{{ item.rawValue }}</p>
                  <p class="text-xs text-muted-foreground">{{ item.format }}</p>
                </div>
              }
            </div>
          </div>
        }
      </section>

      <!-- Supported Formats -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Supported Formats</h3>
        <p class="text-sm text-muted-foreground">
          The scanner supports the following barcode formats:
        </p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-2 max-w-2xl">
          @for (format of allFormats; track format) {
            <div class="px-3 py-2 bg-muted rounded text-sm font-mono">
              {{ format }}
            </div>
          }
        </div>
      </section>

      <!-- Browser Support -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Browser Support</h3>
        <p class="text-sm text-muted-foreground">
          The Barcode Detection API is supported in:
        </p>
        <ul
          class="text-sm space-y-1 list-disc list-inside text-muted-foreground"
        >
          <li>Chrome 83+ (desktop and Android)</li>
          <li>Edge 83+</li>
          <li>Opera 69+</li>
          <li>Chrome for Android</li>
          <li>Samsung Internet</li>
        </ul>
        <p class="text-sm text-muted-foreground">
          Not supported in Firefox or Safari (as of 2024).
        </p>
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScBarcodeScannerDemo {
  readonly lastScannedBasic = signal<BarcodeResult | null>(null);
  readonly lastQR = signal<BarcodeResult | null>(null);
  readonly lastProduct = signal<BarcodeResult | null>(null);
  readonly singleResult = signal<BarcodeResult | null>(null);
  readonly scanHistory = signal<BarcodeResult[]>([]);

  readonly productFormats: BarcodeFormat[] = [
    'ean_13',
    'ean_8',
    'upc_a',
    'upc_e',
  ];

  readonly allFormats: BarcodeFormat[] = [
    'qr_code',
    'ean_13',
    'ean_8',
    'upc_a',
    'upc_e',
    'code_128',
    'code_39',
    'code_93',
    'codabar',
    'itf',
    'pdf417',
    'aztec',
    'data_matrix',
  ];

  onDetected(result: BarcodeResult): void {
    this.lastScannedBasic.set(result);
  }

  onQRDetected(result: BarcodeResult): void {
    this.lastQR.set(result);
  }

  onProductDetected(result: BarcodeResult): void {
    this.lastProduct.set(result);
  }

  onSingleDetected(result: BarcodeResult): void {
    this.singleResult.set(result);
  }

  addToHistory(result: BarcodeResult): void {
    // Avoid duplicates
    const current = this.scanHistory();
    if (!current.some((item) => item.rawValue === result.rawValue)) {
      this.scanHistory.set([result, ...current].slice(0, 20));
    }
  }

  clearHistory(): void {
    this.scanHistory.set([]);
  }
}
