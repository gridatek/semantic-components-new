import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScNumberInput,
  ScNumberInputDecrement,
  ScNumberInputField,
  ScNumberInputIncrement,
} from '@semantic-components/ui';

@Component({
  selector: 'app-step-number-input-demo',
  imports: [
    ScNumberInput,
    ScNumberInputField,
    ScNumberInputIncrement,
    ScNumberInputDecrement,
  ],
  template: `
    <div class="flex flex-col gap-2">
      <div
        sc-number-input
        [(value)]="value"
        [step]="0.5"
        [min]="0"
        [max]="10"
        class="w-32"
      >
        <button sc-number-input-decrement></button>
        <input sc-number-input-field />
        <button sc-number-input-increment></button>
      </div>
      <p class="text-sm text-muted-foreground">Value: {{ value() }}</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepNumberInputDemo {
  readonly value = signal<number | null>(5);
}
