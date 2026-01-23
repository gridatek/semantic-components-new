import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScStepperDemoContainer } from './demos/stepper-demo-container';

@Component({
  selector: 'app-stepper-page',
  imports: [ScStepperDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Stepper</h1>
        <p class="text-muted-foreground">
          A multi-step wizard component for guiding users through a process.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-stepper-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StepperPage {}
