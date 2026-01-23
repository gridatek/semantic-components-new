import { ChangeDetectionStrategy, Component } from '@angular/core';
import ConfettiDemoContainer from './demos/confetti-demo-container';

@Component({
  selector: 'app-confetti-page',
  imports: [ConfettiDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Confetti</h1>
        <p class="text-muted-foreground">A confetti component.</p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-confetti-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ConfettiPage {}
