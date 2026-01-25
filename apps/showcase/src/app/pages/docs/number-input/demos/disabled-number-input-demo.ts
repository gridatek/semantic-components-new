import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScNumberInput,
  ScNumberInputDecrement,
  ScNumberInputField,
  ScNumberInputIncrement,
} from '@semantic-components/ui';

@Component({
  selector: 'app-disabled-number-input-demo',
  imports: [
    ScNumberInput,
    ScNumberInputField,
    ScNumberInputIncrement,
    ScNumberInputDecrement,
  ],
  template: `
    <div sc-number-input [value]="5" [disabled]="true" class="w-32">
      <button sc-number-input-decrement></button>
      <input sc-number-input-field />
      <button sc-number-input-increment></button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledNumberInputDemo {}
