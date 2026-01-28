import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScPasswordField,
  ScPasswordFieldGroup,
  ScPasswordFieldInput,
  ScPasswordFieldToggle,
  ScPasswordFieldStrength,
  ScLabel,
} from '@semantic-components/ui';

@Component({
  selector: 'app-strength-password-field-demo',
  imports: [
    ScPasswordField,
    ScPasswordFieldGroup,
    ScPasswordFieldInput,
    ScPasswordFieldToggle,
    ScPasswordFieldStrength,
    ScLabel,
  ],
  template: `
    <div class="space-y-2">
      <label sc-label for="password-strength">Password</label>
      <div sc-password-field [(value)]="password">
        <div sc-password-field-group>
          <input
            sc-password-field-input
            id="password-strength"
            placeholder="Enter password"
            autocomplete="new-password"
          />
          <button sc-password-field-toggle></button>
        </div>
        <div sc-password-field-strength></div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StrengthPasswordFieldDemo {
  readonly password = signal<string>('');
}
