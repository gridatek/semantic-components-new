import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { MinmaxNumberInputDemo } from './minmax-number-input-demo';

@Component({
  selector: 'app-minmax-number-input-demo-container',
  imports: [DemoContainer, MinmaxNumberInputDemo],
  template: `
    <app-demo-container title="Min/Max (0-100)" [code]="code">
      <app-minmax-number-input-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinmaxNumberInputDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScNumberInput,
  ScNumberInputDecrement,
  ScNumberInputField,
  ScNumberInputIncrement,
} from '@semantic-components/ui';

@Component({
  selector: 'app-minmax-number-input-demo',
  imports: [
    ScNumberInput,
    ScNumberInputField,
    ScNumberInputIncrement,
    ScNumberInputDecrement,
  ],
  template: \`
    <div class="flex flex-col gap-2">
      <div sc-number-input [(value)]="value" [min]="0" [max]="100" class="w-32">
        <button sc-number-input-decrement></button>
        <input sc-number-input-field />
        <button sc-number-input-increment></button>
      </div>
      <p class="text-sm text-muted-foreground">Value: {{ value() }}</p>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinmaxNumberInputDemo {
  readonly value = signal<number | null>(50);
}`;
}
