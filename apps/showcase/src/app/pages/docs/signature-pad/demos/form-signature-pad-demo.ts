import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScSignaturePad } from '@semantic-components/ui';

@Component({
  selector: 'app-form-signature-pad-demo',
  imports: [ScSignaturePad],
  template: `
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
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormSignaturePadDemo {
  readonly signatureIsEmpty = signal<boolean>(true);
}
