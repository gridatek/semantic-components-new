import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScNumberInput,
  ScNumberInputField,
  ScNumberInputStepper,
} from '@semantic-components/ui';

@Component({
  selector: 'app-stepper-number-input-demo',
  imports: [ScNumberInput, ScNumberInputField, ScNumberInputStepper],
  template: `
    <div class="flex flex-col gap-2">
      <div sc-number-input [(value)]="value" [min]="0" [max]="99" class="w-24">
        <input sc-number-input-field class="text-right pr-1" />
        <div sc-number-input-stepper></div>
      </div>
      <p class="text-sm text-muted-foreground">Value: {{ value() }}</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperNumberInputDemo {
  readonly value = signal<number | null>(1);
}
