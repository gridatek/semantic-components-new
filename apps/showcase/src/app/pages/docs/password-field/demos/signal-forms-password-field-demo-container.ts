import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { SignalFormsPasswordFieldDemo } from './signal-forms-password-field-demo';

@Component({
  selector: 'app-signal-forms-password-field-demo-container',
  imports: [DemoContainer, SignalFormsPasswordFieldDemo],
  template: `
    <app-demo-container
      title="Signal Forms"
      demoUrl="/demos/password-field/signal-forms-password-field-demo"
      [code]="code"
    >
      <app-signal-forms-password-field-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SignalFormsPasswordFieldDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScPasswordField,
  ScPasswordFieldGroup,
  ScPasswordFieldInput,
  ScPasswordFieldToggle,
  ScLabel,
} from '@semantic-components/ui';

@Component({
  imports: [
    ScPasswordField,
    ScPasswordFieldGroup,
    ScPasswordFieldInput,
    ScPasswordFieldToggle,
    ScLabel,
  ],
  template: \`
    <div class="max-w-sm space-y-4">
      <div sc-password-field [(value)]="password" class="space-y-2">
        <label sc-label>Password</label>
        <div sc-password-field-group>
          <input sc-password-field-input placeholder="Enter password" />
          <button sc-password-field-toggle></button>
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
export class SignalFormsPasswordFieldDemo {
  readonly password = signal('');

  formState(): string {
    return JSON.stringify(
      {
        password: this.password(),
      },
      null,
      2,
    );
  }
}`;
}
