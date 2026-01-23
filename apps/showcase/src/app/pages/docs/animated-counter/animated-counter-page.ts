import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicAnimatedCounterDemoContainer } from './demos/basic-animated-counter-demo-container';
import { EasingAnimatedCounterDemoContainer } from './demos/easing-animated-counter-demo-container';
import { PrefixAnimatedCounterDemoContainer } from './demos/prefix-animated-counter-demo-container';

@Component({
  selector: 'app-animated-counter-page',
  imports: [
    BasicAnimatedCounterDemoContainer,
    EasingAnimatedCounterDemoContainer,
    PrefixAnimatedCounterDemoContainer,
  ],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">AnimatedCounter</h1>
        <p class="text-muted-foreground">A animated counter component.</p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-basic-animated-counter-demo-container />
        <app-easing-animated-counter-demo-container />
        <app-prefix-animated-counter-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AnimatedCounterPage {}
