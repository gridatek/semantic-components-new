import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { SizesNumberInputDemo } from './sizes-number-input-demo';

@Component({
  selector: 'app-sizes-number-input-demo-container',
  imports: [DemoContainer, SizesNumberInputDemo],
  template: `
    <app-demo-container title="Different Widths" [code]="code">
      <app-sizes-number-input-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SizesNumberInputDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScNumberInput,
  ScNumberInputDecrement,
  ScNumberInputField,
  ScNumberInputIncrement,
} from '@semantic-components/ui';

@Component({
  selector: 'app-sizes-number-input-demo',
  imports: [
    ScNumberInput,
    ScNumberInputField,
    ScNumberInputIncrement,
    ScNumberInputDecrement,
  ],
  template: \`
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
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SizesNumberInputDemo {
  readonly smallValue = signal<number | null>(10);
  readonly mediumValue = signal<number | null>(25);
  readonly largeValue = signal<number | null>(100);
}`;
}
