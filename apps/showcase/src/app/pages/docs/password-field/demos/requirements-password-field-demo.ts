import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScPasswordField,
  ScPasswordFieldGroup,
  ScPasswordFieldInput,
  ScPasswordFieldToggle,
  ScPasswordFieldRequirements,
  ScLabel,
} from '@semantic-components/ui';

@Component({
  selector: 'app-requirements-password-field-demo',
  imports: [
    ScPasswordField,
    ScPasswordFieldGroup,
    ScPasswordFieldInput,
    ScPasswordFieldToggle,
    ScPasswordFieldRequirements,
    ScLabel,
  ],
  template: `
    <div sc-password-field [(value)]="password" class="space-y-2">
      <label sc-label>Password</label>
      <div sc-password-field-group>
        <input
          sc-password-field-input
          placeholder="Enter password"
          autocomplete="new-password"
        />
        <button sc-password-field-toggle></button>
      </div>
      <ul sc-password-field-requirements></ul>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequirementsPasswordFieldDemo {
  readonly password = signal<string>('');
}
