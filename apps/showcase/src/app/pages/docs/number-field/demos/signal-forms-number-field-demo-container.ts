import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { SignalFormsNumberFieldDemo } from './signal-forms-number-field-demo';

@Component({
  selector: 'app-signal-forms-number-field-demo-container',
  imports: [DemoContainer, SignalFormsNumberFieldDemo],
  template: `
    <app-demo-container
      title="Signal Forms"
      demoUrl="/demos/number-field/signal-forms-number-field-demo"
      [code]="code"
    >
      <app-signal-forms-number-field-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SignalFormsNumberFieldDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScNumberField,
  ScNumberFieldDecrement,
  ScNumberFieldGroup,
  ScNumberFieldIncrement,
  ScNumberFieldInput,
  ScNumberFieldScrubArea,
  ScLabel,
} from '@semantic-components/ui';

@Component({
  imports: [
    ScNumberField,
    ScNumberFieldScrubArea,
    ScNumberFieldGroup,
    ScNumberFieldDecrement,
    ScNumberFieldInput,
    ScNumberFieldIncrement,
    ScLabel,
  ],
  template: \`
    <div class="max-w-sm space-y-4">
      <div sc-number-field [(value)]="quantity" [min]="0" [max]="100" class="space-y-2">
        <div sc-number-field-scrub-area>
          <label sc-label>Quantity</label>
        </div>

        <div sc-number-field-group>
          <button sc-number-field-decrement></button>
          <input sc-number-field-input />
          <button sc-number-field-increment></button>
        </div>
      </div>

      <div class="rounded-lg border bg-muted/50 p-4">
        <p class="text-sm font-medium">Form Value:</p>
        <pre class="mt-2 text-xs text-muted-foreground">{{ formState() }}</pre>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalFormsNumberFieldDemo {
  readonly quantity = signal<number | null>(10);

  formState(): string {
    return JSON.stringify(
      {
        quantity: this.quantity(),
      },
      null,
      2,
    );
  }
}`;
}
