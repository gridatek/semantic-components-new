import { ChangeDetectionStrategy, Component } from '@angular/core';
import LightboxDemoContainer from './demos/lightbox-demo-container';

@Component({
  selector: 'app-lightbox-page',
  imports: [LightboxDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Lightbox</h1>
        <p class="text-muted-foreground">
          Full-screen image viewer with zoom, navigation, and keyboard support.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-lightbox-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LightboxPage {}
