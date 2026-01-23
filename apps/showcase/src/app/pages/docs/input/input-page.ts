import { ChangeDetectionStrategy, Component } from '@angular/core';
import InputDemoContainer from './demos/input-demo-container';

@Component({
  selector: 'app-input-page',
  imports: [InputDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Input</h1>
        <p class="text-muted-foreground">
          Displays a form input field or a component that looks like an input
          field.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-input-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InputPage {}
