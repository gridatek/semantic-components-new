import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScButtonDemoContainer } from './demos/button-demo-container';

@Component({
  selector: 'app-button-page',
  imports: [ScButtonDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Button</h1>
        <p class="text-muted-foreground">
          Displays a button or a component that looks like a button.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-button-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ButtonPage {}
