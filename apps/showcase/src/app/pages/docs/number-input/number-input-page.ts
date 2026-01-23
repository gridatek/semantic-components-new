import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScNumberInputDemoContainer } from './demos/number-input-demo-container';

@Component({
  selector: 'app-number-input-page',
  imports: [ScNumberInputDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">NumberInput</h1>
        <p class="text-muted-foreground">
          A numeric input component with increment and decrement buttons.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-number-input-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NumberInputPage {}
