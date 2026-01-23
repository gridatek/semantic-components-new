import { ChangeDetectionStrategy, Component } from '@angular/core';
import CountdownDemoContainer from './demos/countdown-demo-container';

@Component({
  selector: 'app-countdown-page',
  imports: [CountdownDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Countdown</h1>
        <p class="text-muted-foreground">
          Countdown timer with multiple variants, customizable labels, and
          completion events.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-countdown-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CountdownPage {}
