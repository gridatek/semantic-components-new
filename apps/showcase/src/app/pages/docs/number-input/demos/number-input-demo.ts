import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScNumberInput,
  ScNumberInputDecrement,
  ScNumberInputField,
  ScNumberInputIncrement,
  ScNumberInputStepper,
} from '@semantic-components/ui';

@Component({
  selector: 'app-sc-number-input-demo',
  imports: [
    ScNumberInput,
    ScNumberInputField,
    ScNumberInputIncrement,
    ScNumberInputDecrement,
    ScNumberInputStepper,
  ],
  template: `
    <div class="space-y-8">
      <!-- Basic -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Basic Number Input</h3>
        <div class="flex flex-col gap-2">
          <div sc-number-input [(value)]="basicValue" class="w-32">
            <button sc-number-input-decrement></button>
            <input sc-number-input-field />
            <button sc-number-input-increment></button>
          </div>
          <p class="text-sm text-muted-foreground">
            Value: {{ basicValue() ?? 'null' }}
          </p>
        </div>
      </div>

      <!-- With Min/Max -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">With Min/Max (0-100)</h3>
        <div class="flex flex-col gap-2">
          <div
            sc-number-input
            [(value)]="minMaxValue"
            [min]="0"
            [max]="100"
            class="w-32"
          >
            <button sc-number-input-decrement></button>
            <input sc-number-input-field />
            <button sc-number-input-increment></button>
          </div>
          <p class="text-sm text-muted-foreground">
            Value: {{ minMaxValue() }}
          </p>
        </div>
      </div>

      <!-- Custom Step -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Custom Step (0.5)</h3>
        <div class="flex flex-col gap-2">
          <div
            sc-number-input
            [(value)]="stepValue"
            [step]="0.5"
            [min]="0"
            [max]="10"
            class="w-32"
          >
            <button sc-number-input-decrement></button>
            <input sc-number-input-field />
            <button sc-number-input-increment></button>
          </div>
          <p class="text-sm text-muted-foreground">Value: {{ stepValue() }}</p>
        </div>
      </div>

      <!-- Decimal Step -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Decimal Step (0.01)</h3>
        <div class="flex flex-col gap-2">
          <div
            sc-number-input
            [(value)]="decimalValue"
            [step]="0.01"
            class="w-36"
          >
            <button sc-number-input-decrement></button>
            <input sc-number-input-field />
            <button sc-number-input-increment></button>
          </div>
          <p class="text-sm text-muted-foreground">
            Value: {{ decimalValue() }}
          </p>
        </div>
      </div>

      <!-- Vertical Stepper -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Vertical Stepper</h3>
        <div class="flex flex-col gap-2">
          <div
            sc-number-input
            [(value)]="stepperValue"
            [min]="0"
            [max]="99"
            class="w-24"
          >
            <input sc-number-input-field class="text-right pr-1" />
            <div sc-number-input-stepper></div>
          </div>
          <p class="text-sm text-muted-foreground">
            Value: {{ stepperValue() }}
          </p>
        </div>
      </div>

      <!-- Disabled -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Disabled</h3>
        <div sc-number-input [value]="5" [disabled]="true" class="w-32">
          <button sc-number-input-decrement></button>
          <input sc-number-input-field />
          <button sc-number-input-increment></button>
        </div>
      </div>

      <!-- Different Sizes -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Different Widths</h3>
        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-4">
            <span class="w-20 text-sm text-muted-foreground">Small</span>
            <div sc-number-input [(value)]="smallValue" class="w-24">
              <button sc-number-input-decrement></button>
              <input sc-number-input-field />
              <button sc-number-input-increment></button>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <span class="w-20 text-sm text-muted-foreground">Medium</span>
            <div sc-number-input [(value)]="mediumValue" class="w-32">
              <button sc-number-input-decrement></button>
              <input sc-number-input-field />
              <button sc-number-input-increment></button>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <span class="w-20 text-sm text-muted-foreground">Large</span>
            <div sc-number-input [(value)]="largeValue" class="w-40">
              <button sc-number-input-decrement></button>
              <input sc-number-input-field />
              <button sc-number-input-increment></button>
            </div>
          </div>
        </div>
      </div>

      <!-- Quantity Selector Example -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Quantity Selector Example</h3>
        <div class="flex items-center gap-4 rounded-lg border p-4 max-w-sm">
          <div class="size-16 rounded-md bg-muted"></div>
          <div class="flex-1">
            <p class="font-medium">Product Name</p>
            <p class="text-sm text-muted-foreground">$29.99</p>
          </div>
          <div
            sc-number-input
            [(value)]="quantity"
            [min]="1"
            [max]="10"
            class="w-28"
          >
            <button sc-number-input-decrement></button>
            <input sc-number-input-field />
            <button sc-number-input-increment></button>
          </div>
        </div>
      </div>

      <!-- Form Field Example -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Form Field Example</h3>
        <div class="max-w-xs space-y-2">
          <label class="text-sm font-medium">Age</label>
          <div
            sc-number-input
            [(value)]="age"
            [min]="0"
            [max]="120"
            class="w-full"
          >
            <button sc-number-input-decrement></button>
            <input sc-number-input-field class="text-left" />
            <button sc-number-input-increment></button>
          </div>
          <p class="text-xs text-muted-foreground">Enter your age (0-120)</p>
        </div>
      </div>

      <!-- Price Input Example -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Price Input Example</h3>
        <div class="max-w-xs space-y-2">
          <label class="text-sm font-medium">Price</label>
          <div class="flex items-center gap-2">
            <span class="text-sm text-muted-foreground">$</span>
            <div
              sc-number-input
              [(value)]="price"
              [min]="0"
              [step]="0.01"
              class="flex-1"
            >
              <input sc-number-input-field class="text-left" />
              <div sc-number-input-stepper></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScNumberInputDemo {
  readonly basicValue = signal<number | null>(0);
  readonly minMaxValue = signal<number | null>(50);
  readonly stepValue = signal<number | null>(5);
  readonly decimalValue = signal<number | null>(0.5);
  readonly stepperValue = signal<number | null>(1);
  readonly smallValue = signal<number | null>(10);
  readonly mediumValue = signal<number | null>(25);
  readonly largeValue = signal<number | null>(100);
  readonly quantity = signal<number | null>(1);
  readonly age = signal<number | null>(25);
  readonly price = signal<number | null>(9.99);
}
