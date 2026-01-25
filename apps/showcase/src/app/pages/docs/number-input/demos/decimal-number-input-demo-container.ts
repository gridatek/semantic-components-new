import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { DecimalNumberInputDemo } from './decimal-number-input-demo';

@Component({
  selector: 'app-decimal-number-input-demo-container',
  imports: [DemoContainer, DecimalNumberInputDemo],
  template: `
    <app-demo-container title="Decimal Step (0.01)" [code]="code">
      <app-decimal-number-input-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DecimalNumberInputDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScNumberInput,
  ScNumberInputDecrement,
  ScNumberInputField,
  ScNumberInputIncrement,
} from '@semantic-components/ui';

@Component({
  selector: 'app-decimal-number-input-demo',
  imports: [
    ScNumberInput,
    ScNumberInputField,
    ScNumberInputIncrement,
    ScNumberInputDecrement,
  ],
  template: \`
    <div class="flex flex-col gap-2">
      <div sc-number-input [(value)]="value" [step]="0.01" class="w-36">
        <button sc-number-input-decrement></button>
        <input sc-number-input-field />
        <button sc-number-input-increment></button>
      </div>
      <p class="text-sm text-muted-foreground">Value: {{ value() }}</p>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DecimalNumberInputDemo {
  readonly value = signal<number | null>(0.5);
}`;
}
