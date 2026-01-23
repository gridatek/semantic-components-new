import { ChangeDetectionStrategy, Component } from '@angular/core';
import KbdDemoContainer from './demos/kbd-demo-container';

@Component({
  selector: 'app-kbd-page',
  imports: [KbdDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Kbd</h1>
        <p class="text-muted-foreground">
          A component for displaying keyboard keys and shortcuts.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-kbd-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class KbdPage {}
