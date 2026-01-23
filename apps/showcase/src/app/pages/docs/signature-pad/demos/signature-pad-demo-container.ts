import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScSignaturePadDemo } from './signature-pad-demo';

@Component({
  selector: 'app-signature-pad-demo-container',
  imports: [DemoContainer, ScSignaturePadDemo],
  template: `
    <app-demo-container title="Signature" [code]="code">
      <app-signature-pad-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSignaturePadDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScSignaturePad } from '@semantic-components/ui';

@Component({
  selector: 'app-signature-pad-demo',
  imports: [ScSignaturePad],
  template: \`
    <div class="space-y-8">
      <!-- Basic Signature Pad -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Basic Signature Pad</h3>
        <p class="text-sm text-muted-foreground">
          Draw your signature using mouse or touch.
        </p>
        <sc-signature-pad
          #pad1
          [width]="400"
          [height]="200"
          (signatureChange)="onSignatureChange($event)"
        />
        <div class="flex gap-2">
          <button
            (click)="exportSignature(pad1)"
            class="px-4 py-2 text-sm border rounded-md hover:bg-accent"
          >
            Export as PNG
          </button>
        </div>
      </section>

      <!-- Custom Colors -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Custom Colors</h3>
        <p class="text-sm text-muted-foreground">
          Blue pen on light gray background.
        </p>
        <sc-signature-pad
          [width]="400"
          [height]="200"
          [penColor]="'#1d4ed8'"
          [backgroundColor]="'#f3f4f6'"
          [penWidth]="3"
        />
      </section>

      <!-- Different Pen Width -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Thick Pen</h3>
        <p class="text-sm text-muted-foreground">
          Thicker pen stroke for bold signatures.
        </p>
        <sc-signature-pad [width]="400" [height]="200" [penWidth]="5" />
      </section>

      <!-- Without Controls -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Without Controls</h3>
        <p class="text-sm text-muted-foreground">
          Hide the built-in undo/clear buttons.
        </p>
        <sc-signature-pad
          #pad2
          [width]="400"
          [height]="150"
          [showControls]="false"
        />
        <div class="flex gap-2">
          <button
            (click)="pad2.undo()"
            class="px-3 py-1.5 text-sm border rounded-md hover:bg-accent"
          >
            Undo
          </button>
          <button
            (click)="pad2.clear()"
            class="px-3 py-1.5 text-sm border rounded-md hover:bg-accent"
          >
            Clear
          </button>
        </div>
      </section>

      <!-- Disabled State -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Disabled</h3>
        <p class="text-sm text-muted-foreground">
          Signature pad in disabled state.
        </p>
        <sc-signature-pad [width]="400" [height]="150" [disabled]="true" />
      </section>

      <!-- Small Size -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Small Size</h3>
        <p class="text-sm text-muted-foreground">
          Compact signature pad for limited space.
        </p>
        <sc-signature-pad [width]="300" [height]="100" [penWidth]="1.5" />
      </section>

      <!-- With Signature Preview -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">With Preview</h3>
        <p class="text-sm text-muted-foreground">
          Sign below to see a live preview of your signature.
        </p>
        <sc-signature-pad
          [width]="400"
          [height]="200"
          (signatureChange)="previewSignature.set($event)"
        />
        @if (previewSignature()) {
          <div class="mt-4">
            <p class="text-sm font-medium mb-2">Preview:</p>
            <img
              [src]="previewSignature()"
              alt="Signature preview"
              class="border rounded-lg max-w-[200px]"
            />
          </div>
        }
      </section>

      <!-- Form Integration -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Form Integration</h3>
        <p class="text-sm text-muted-foreground">
          Track signature state for form validation.
        </p>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              class="w-full max-w-sm px-3 py-2 border rounded-md"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label class="block text-sm font-medium mb-1">Signature</label>
            <sc-signature-pad
              [width]="400"
              [height]="150"
              [(isEmpty)]="signatureIsEmpty"
            />
            @if (signatureIsEmpty()) {
              <p class="text-sm text-muted-foreground mt-1">
                Please sign above
              </p>
            } @else {
              <p class="text-sm text-green-600 mt-1">Signature captured</p>
            }
          </div>
        </div>
      </section>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSignaturePadDemo {
  readonly previewSignature = signal<string>('');
  readonly signatureIsEmpty = signal<boolean>(true);

  onSignatureChange(dataUrl: string): void {
    console.log('Signature changed:', dataUrl ? 'Has signature' : 'Empty');
  }

  exportSignature(pad: ScSignaturePad): void {
    const dataUrl = pad.toDataURL('image/png');
    if (!dataUrl || dataUrl === 'data:,') {
      alert('Please sign first!');
      return;
    }

    // Create download link
    const link = document.createElement('a');
    link.download = 'signature.png';
    link.href = dataUrl;
    link.click();
  }
}`;
}
