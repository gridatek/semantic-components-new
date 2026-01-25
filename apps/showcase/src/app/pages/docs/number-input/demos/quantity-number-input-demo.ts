import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScNumberInput,
  ScNumberInputDecrement,
  ScNumberInputField,
  ScNumberInputIncrement,
} from '@semantic-components/ui';

@Component({
  selector: 'app-quantity-number-input-demo',
  imports: [
    ScNumberInput,
    ScNumberInputField,
    ScNumberInputIncrement,
    ScNumberInputDecrement,
  ],
  template: `
    <div class="flex items-center gap-4 rounded-lg border p-4 max-w-sm">
      <div class="size-16 rounded-md bg-muted"></div>
      <div class="flex-1">
        <p class="font-medium">Product Name</p>
        <p class="text-sm text-muted-foreground">$29.99</p>
      </div>
      <div sc-number-input [(value)]="quantity" [min]="1" [max]="10" class="w-28">
        <button sc-number-input-decrement></button>
        <input sc-number-input-field />
        <button sc-number-input-increment></button>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuantityNumberInputDemo {
  readonly quantity = signal<number | null>(1);
}
