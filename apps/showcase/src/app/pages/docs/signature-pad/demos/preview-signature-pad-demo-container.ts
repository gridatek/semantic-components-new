import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { PreviewSignaturePadDemo } from './preview-signature-pad-demo';

@Component({
  selector: 'app-preview-signature-pad-demo-container',
  imports: [DemoContainer, PreviewSignaturePadDemo],
  template: `
    <app-demo-container title="With Preview" [code]="code">
      <app-preview-signature-pad-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewSignaturePadDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScSignaturePad } from '@semantic-components/ui';

@Component({
  selector: 'app-preview-signature-pad-demo',
  imports: [ScSignaturePad],
  template: \`
    <div class="space-y-4">
      <sc-signature-pad
        [width]="400"
        [height]="200"
        (signatureChange)="previewSignature.set($event)"
      />
      @if (previewSignature()) {
        <div>
          <p class="text-sm font-medium mb-2">Preview:</p>
          <img
            [src]="previewSignature()"
            alt="Signature preview"
            class="border rounded-lg max-w-[200px]"
          />
        </div>
      }
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewSignaturePadDemo {
  readonly previewSignature = signal<string>('');
}`;
}
