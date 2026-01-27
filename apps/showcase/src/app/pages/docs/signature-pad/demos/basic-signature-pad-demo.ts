import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScSignaturePad } from '@semantic-components/ui';

@Component({
  selector: 'app-basic-signature-pad-demo',
  imports: [ScSignaturePad],
  template: `
    <div class="space-y-3">
      <sc-signature-pad
        #pad
        [width]="400"
        [height]="200"
        (signatureChange)="onSignatureChange($event)"
      />
      <div class="flex gap-2">
        <button
          (click)="exportSignature(pad)"
          class="px-4 py-2 text-sm border rounded-md hover:bg-accent"
        >
          Export as PNG
        </button>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicSignaturePadDemo {
  onSignatureChange(dataUrl: string): void {
    console.log('Signature changed:', dataUrl ? 'Has signature' : 'Empty');
  }

  exportSignature(pad: ScSignaturePad): void {
    const dataUrl = pad.toDataURL('image/png');
    if (!dataUrl || dataUrl === 'data:,') {
      alert('Please sign first!');
      return;
    }

    const link = document.createElement('a');
    link.download = 'signature.png';
    link.href = dataUrl;
    link.click();
  }
}
