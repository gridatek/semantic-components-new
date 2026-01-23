import { ChangeDetectionStrategy, Component } from '@angular/core';
import AnimatedCounterDemoContainer from './demos/animated-counter-demo-container';

@Component({
  selector: 'app-animated-counter-page',
  imports: [AnimatedCounterDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">AnimatedCounter</h1>
        <p class="text-muted-foreground">A animated counter component.</p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-animated-counter-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AnimatedCounterPage {}
