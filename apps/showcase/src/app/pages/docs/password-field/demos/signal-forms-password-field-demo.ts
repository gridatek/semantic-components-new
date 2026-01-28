import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScPasswordField,
  ScPasswordFieldGroup,
  ScPasswordFieldInput,
  ScPasswordFieldToggle,
} from '@semantic-components/ui';
import { ScLabel } from '@semantic-components/ui';

@Component({
  selector: 'app-signal-forms-password-field-demo',
  imports: [
    ScPasswordField,
    ScPasswordFieldGroup,
    ScPasswordFieldInput,
    ScPasswordFieldToggle,
    ScLabel,
  ],
  template: `
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
  `,
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
}
