import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { WithoutLabelNumberFieldDemo } from './without-label-number-field-demo';

@Component({
  selector: 'app-without-label-number-field-demo-container',
  imports: [DemoContainer, WithoutLabelNumberFieldDemo],
  template: `
    <app-demo-container
      title="Without Scrub Area"
      demoUrl="/demos/number-field/without-label-number-field-demo"
      [code]="code"
    >
      <app-without-label-number-field-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class WithoutLabelNumberFieldDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScNumberField,
  ScNumberFieldDecrement,
  ScNumberFieldGroup,
  ScNumberFieldIncrement,
  ScNumberFieldInput,
} from '@semantic-components/ui';

@Component({
  imports: [
    ScNumberField,
    ScNumberFieldGroup,
    ScNumberFieldDecrement,
    ScNumberFieldInput,
    ScNumberFieldIncrement,
  ],
  template: \`
    <div class="flex items-center gap-4">
      <span class="text-sm font-medium">Quantity:</span>
      <div sc-number-field [(value)]="quantity" [min]="1" [max]="10" class="w-28">
        <div sc-number-field-group>
          <button sc-number-field-decrement></button>
          <input sc-number-field-input />
          <button sc-number-field-increment></button>
        </div>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WithoutLabelNumberFieldDemo {
  readonly quantity = signal<number | null>(1);
}`;
}
