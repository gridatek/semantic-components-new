import { ChangeDetectionStrategy, Component } from '@angular/core';
import SwitchDemoContainer from './demos/switch-demo-container';

@Component({
  selector: 'app-switch-page',
  imports: [SwitchDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Switch</h1>
        <p class="text-muted-foreground">
          A control that allows the user to toggle between checked and not
          checked.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-switch-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SwitchPage {}
