import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScSignaturePadDemoContainer } from './demos/signature-pad-demo-container';

@Component({
  selector: 'app-signature-pad-page',
  imports: [ScSignaturePadDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">SignaturePad</h1>
        <p class="text-muted-foreground">
          Canvas-based signature capture with touch and mouse support.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-signature-pad-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SignaturePadPage {}
