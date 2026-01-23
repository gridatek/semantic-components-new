import { ChangeDetectionStrategy, Component } from '@angular/core';
import ToggleDemoContainer from './demos/toggle-demo-container';

@Component({
  selector: 'app-toggle-page',
  imports: [ToggleDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Toggle</h1>
        <p class="text-muted-foreground">
          A two-state button that can be either on or off.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-toggle-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TogglePage {}
