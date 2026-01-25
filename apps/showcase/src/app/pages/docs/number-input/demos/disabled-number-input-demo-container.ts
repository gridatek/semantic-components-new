import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { DisabledNumberInputDemo } from './disabled-number-input-demo';

@Component({
  selector: 'app-disabled-number-input-demo-container',
  imports: [DemoContainer, DisabledNumberInputDemo],
  template: `
    <app-demo-container title="Disabled" [code]="code">
      <app-disabled-number-input-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledNumberInputDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
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
  template: \`
    <div sc-number-input [value]="5" [disabled]="true" class="w-32">
      <button sc-number-input-decrement></button>
      <input sc-number-input-field />
      <button sc-number-input-increment></button>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledNumberInputDemo {}`;
}
