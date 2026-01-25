import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScNumberInput,
  ScNumberInputDecrement,
  ScNumberInputField,
  ScNumberInputIncrement,
} from '@semantic-components/ui';

@Component({
  selector: 'app-form-number-input-demo',
  imports: [
    ScNumberInput,
    ScNumberInputField,
    ScNumberInputIncrement,
    ScNumberInputDecrement,
  ],
  template: `
    <div class="max-w-xs space-y-2">
      <label class="text-sm font-medium">Age</label>
      <div sc-number-input [(value)]="age" [min]="0" [max]="120" class="w-full">
        <button sc-number-input-decrement></button>
        <input sc-number-input-field class="text-left" />
        <button sc-number-input-increment></button>
      </div>
      <p class="text-xs text-muted-foreground">Enter your age (0-120)</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormNumberInputDemo {
  readonly age = signal<number | null>(25);
}
