import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicNumberInputDemoContainer } from './demos/basic-number-input-demo-container';
import { MinmaxNumberInputDemoContainer } from './demos/minmax-number-input-demo-container';
import { StepNumberInputDemoContainer } from './demos/step-number-input-demo-container';
import { DecimalNumberInputDemoContainer } from './demos/decimal-number-input-demo-container';
import { StepperNumberInputDemoContainer } from './demos/stepper-number-input-demo-container';
import { DisabledNumberInputDemoContainer } from './demos/disabled-number-input-demo-container';
import { SizesNumberInputDemoContainer } from './demos/sizes-number-input-demo-container';
import { QuantityNumberInputDemoContainer } from './demos/quantity-number-input-demo-container';
import { FormNumberInputDemoContainer } from './demos/form-number-input-demo-container';
import { PriceNumberInputDemoContainer } from './demos/price-number-input-demo-container';

@Component({
  selector: 'app-number-input-page',
  imports: [
    BasicNumberInputDemoContainer,
    MinmaxNumberInputDemoContainer,
    StepNumberInputDemoContainer,
    DecimalNumberInputDemoContainer,
    StepperNumberInputDemoContainer,
    DisabledNumberInputDemoContainer,
    SizesNumberInputDemoContainer,
    QuantityNumberInputDemoContainer,
    FormNumberInputDemoContainer,
    PriceNumberInputDemoContainer,
  ],
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
        <app-basic-number-input-demo-container />
        <app-minmax-number-input-demo-container />
        <app-step-number-input-demo-container />
        <app-decimal-number-input-demo-container />
        <app-stepper-number-input-demo-container />
        <app-disabled-number-input-demo-container />
        <app-sizes-number-input-demo-container />
        <app-quantity-number-input-demo-container />
        <app-form-number-input-demo-container />
        <app-price-number-input-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NumberInputPage {}
