import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { PriceNumberInputDemo } from './price-number-input-demo';

@Component({
  selector: 'app-price-number-input-demo-container',
  imports: [DemoContainer, PriceNumberInputDemo],
  template: `
    <app-demo-container title="Price Input" [code]="code">
      <app-price-number-input-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriceNumberInputDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScNumberInput,
  ScNumberInputField,
  ScNumberInputStepper,
} from '@semantic-components/ui';

@Component({
  selector: 'app-price-number-input-demo',
  imports: [ScNumberInput, ScNumberInputField, ScNumberInputStepper],
  template: \`
    <div class="max-w-xs space-y-2">
      <label class="text-sm font-medium">Price</label>
      <div class="flex items-center gap-2">
        <span class="text-sm text-muted-foreground">$</span>
        <div sc-number-input [(value)]="price" [min]="0" [step]="0.01" class="flex-1">
          <input sc-number-input-field class="text-left" />
          <div sc-number-input-stepper></div>
        </div>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriceNumberInputDemo {
  readonly price = signal<number | null>(9.99);
}`;
}
