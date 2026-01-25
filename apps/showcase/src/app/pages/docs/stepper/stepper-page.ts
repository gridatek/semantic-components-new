import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HorizontalStepperDemoContainer } from './demos/horizontal-stepper-demo-container';
import { VerticalStepperDemoContainer } from './demos/vertical-stepper-demo-container';
import { SimpleStepperDemoContainer } from './demos/simple-stepper-demo-container';

@Component({
  selector: 'app-stepper-page',
  imports: [HorizontalStepperDemoContainer, VerticalStepperDemoContainer, SimpleStepperDemoContainer],
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
        <app-horizontal-stepper-demo-container />
        <app-vertical-stepper-demo-container />
        <app-simple-stepper-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StepperPage {}
