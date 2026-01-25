import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { BasicNumberInputDemo } from './basic-number-input-demo';

@Component({
  selector: 'app-basic-number-input-demo-container',
  imports: [DemoContainer, BasicNumberInputDemo],
  template: `
    <app-demo-container title="Basic" [code]="code">
      <app-basic-number-input-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicNumberInputDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScNumberInput,
  ScNumberInputDecrement,
  ScNumberInputField,
  ScNumberInputIncrement,
} from '@semantic-components/ui';

@Component({
  selector: 'app-basic-number-input-demo',
  imports: [
    ScNumberInput,
    ScNumberInputField,
    ScNumberInputIncrement,
    ScNumberInputDecrement,
  ],
  template: \`
    <div class="flex flex-col gap-2">
      <div sc-number-input [(value)]="value" class="w-32">
        <button sc-number-input-decrement></button>
        <input sc-number-input-field />
        <button sc-number-input-increment></button>
      </div>
      <p class="text-sm text-muted-foreground">Value: {{ value() ?? 'null' }}</p>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicNumberInputDemo {
  readonly value = signal<number | null>(0);
}`;
}
