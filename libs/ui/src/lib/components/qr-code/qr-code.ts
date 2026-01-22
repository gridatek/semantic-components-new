import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { cn } from '../../utils';
import { generateQRCode } from './qr-generator';

export type QRErrorCorrectionLevel = 'L' | 'M' | 'Q' | 'H';

@Component({
  selector: 'sc-qr-code',
  template: `
    <div [class]="containerClass()" role="img" [attr.aria-label]="ariaLabel()">
      <svg
        [attr.viewBox]="viewBox()"
        [attr.width]="size()"
        [attr.height]="size()"
        class="block"
      >
        <!-- Background -->
        <rect
          x="0"
          y="0"
          [attr.width]="moduleCount() + quietZone() * 2"
          [attr.height]="moduleCount() + quietZone() * 2"
          [attr.fill]="backgroundColor()"
        />

        <!-- QR modules -->
        @for (row of qrMatrix(); track $index; let rowIdx = $index) {
          @for (cell of row; track $index; let colIdx = $index) {
            @if (cell) {
              <rect
                [attr.x]="colIdx + quietZone()"
                [attr.y]="rowIdx + quietZone()"
                width="1"
                height="1"
                [attr.fill]="foregroundColor()"
              />
            }
          }
        }

        <!-- Logo/Image overlay -->
        @if (logo()) {
          <rect
            [attr.x]="logoPosition().x - logoPosition().padding"
            [attr.y]="logoPosition().y - logoPosition().padding"
            [attr.width]="logoPosition().size + logoPosition().padding * 2"
            [attr.height]="logoPosition().size + logoPosition().padding * 2"
            [attr.fill]="backgroundColor()"
            [attr.rx]="logoPosition().padding"
          />
          <image
            [attr.href]="logo()"
            [attr.x]="logoPosition().x"
            [attr.y]="logoPosition().y"
            [attr.width]="logoPosition().size"
            [attr.height]="logoPosition().size"
            preserveAspectRatio="xMidYMid slice"
          />
        }
      </svg>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScQrCode {
  // Inputs
  readonly value = input.required<string>();
  readonly size = input<number>(200);
  readonly errorCorrectionLevel = input<QRErrorCorrectionLevel>('M');
  readonly foregroundColor = input<string>('#000000');
  readonly backgroundColor = input<string>('#ffffff');
  readonly quietZone = input<number>(2);
  readonly logo = input<string>('');
  readonly logoSize = input<number>(0.2); // Percentage of QR code size
  readonly ariaLabel = input<string>('QR Code');
  readonly class = input<string>('');

  protected readonly qrMatrix = computed(() => {
    const value = this.value();
    if (!value) return [];
    return generateQRCode(value, this.errorCorrectionLevel());
  });

  protected readonly moduleCount = computed(() => {
    const matrix = this.qrMatrix();
    return matrix.length || 21;
  });

  protected readonly viewBox = computed(() => {
    const count = this.moduleCount();
    const zone = this.quietZone();
    const totalSize = count + zone * 2;
    return `0 0 ${totalSize} ${totalSize}`;
  });

  protected readonly logoPosition = computed(() => {
    const count = this.moduleCount();
    const zone = this.quietZone();
    const logoSizePercent = this.logoSize();
    const logoModules = Math.floor(count * logoSizePercent);
    const padding = 0.5;

    return {
      x: zone + (count - logoModules) / 2,
      y: zone + (count - logoModules) / 2,
      size: logoModules,
      padding,
    };
  });

  protected readonly containerClass = computed(() =>
    cn('inline-block', this.class()),
  );
}

@Component({
  selector: 'sc-qr-code-download',
  imports: [ScQrCode],
  template: `
    <div [class]="containerClass()">
      <sc-qr-code
        [value]="value()"
        [size]="size()"
        [errorCorrectionLevel]="errorCorrectionLevel()"
        [foregroundColor]="foregroundColor()"
        [backgroundColor]="backgroundColor()"
        [quietZone]="quietZone()"
        [logo]="logo()"
        [logoSize]="logoSize()"
      />
      @if (showDownload()) {
        <button type="button" (click)="download()" [class]="buttonClass()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="size-4"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
          </svg>
          {{ downloadLabel() }}
        </button>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScQrCodeDownload {
  readonly value = input.required<string>();
  readonly size = input<number>(200);
  readonly errorCorrectionLevel = input<QRErrorCorrectionLevel>('M');
  readonly foregroundColor = input<string>('#000000');
  readonly backgroundColor = input<string>('#ffffff');
  readonly quietZone = input<number>(2);
  readonly logo = input<string>('');
  readonly logoSize = input<number>(0.2);
  readonly showDownload = input<boolean>(true);
  readonly downloadLabel = input<string>('Download');
  readonly filename = input<string>('qrcode');
  readonly class = input<string>('');

  protected readonly containerClass = computed(() =>
    cn('inline-flex flex-col items-center gap-3', this.class()),
  );

  protected readonly buttonClass = computed(() =>
    cn(
      'inline-flex items-center gap-2 px-4 py-2 text-sm',
      'border rounded-md hover:bg-accent transition-colors',
      'focus:outline-none focus:ring-2 focus:ring-ring',
    ),
  );

  download(): void {
    const svg = document.querySelector('sc-qr-code svg');
    if (!svg) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const size = this.size();
    canvas.width = size;
    canvas.height = size;

    const svgData = new XMLSerializer().serializeToString(svg);
    const img = new Image();
    const svgBlob = new Blob([svgData], {
      type: 'image/svg+xml;charset=utf-8',
    });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      ctx.drawImage(img, 0, 0, size, size);
      URL.revokeObjectURL(url);

      const link = document.createElement('a');
      link.download = `${this.filename()}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    };

    img.src = url;
  }
}
