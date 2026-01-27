import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScPasswordField,
  ScPasswordFieldGroup,
  ScPasswordFieldInput,
  ScPasswordFieldToggle,
} from '@semantic-components/ui';
import { ScLabel } from '@semantic-components/ui';

@Component({
  selector: 'app-basic-password-field-demo',
  imports: [
    ScPasswordField,
    ScPasswordFieldGroup,
    ScPasswordFieldInput,
    ScPasswordFieldToggle,
    ScLabel,
  ],
  template: `
    <div class="space-y-2">
      <label sc-label for="password">Password</label>
      <div sc-password-field [(value)]="password">
        <div sc-password-field-group>
          <input
            sc-password-field-input
            id="password"
            placeholder="Enter password"
          />
          <button sc-password-field-toggle></button>
        </div>
      </div>
    </div>

    <p class="mt-4 text-sm text-muted-foreground">
      Value: {{ password() || '(empty)' }}
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicPasswordFieldDemo {
  readonly password = signal<string>('');
}
