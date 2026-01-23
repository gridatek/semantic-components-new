import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScMarqueeDemoContainer } from './demos/marquee-demo-container';

@Component({
  selector: 'app-marquee-page',
  imports: [ScMarqueeDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Marquee</h1>
        <p class="text-muted-foreground">
          Scrolling content with smooth animations, multiple directions, and
          customizable speed.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-marquee-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MarqueePage {}
