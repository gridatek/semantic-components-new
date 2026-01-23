import { ChangeDetectionStrategy, Component } from '@angular/core';
import SpotlightDemoContainer from './demos/spotlight-demo-container';

@Component({
  selector: 'app-spotlight-page',
  imports: [SpotlightDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Spotlight</h1>
        <p class="text-muted-foreground">
          Highlight specific UI elements with a spotlight overlay effect.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-spotlight-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SpotlightPage {}
