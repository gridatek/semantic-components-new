import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScPasswordField,
  ScPasswordFieldGroup,
  ScPasswordFieldInput,
  ScPasswordFieldToggle,
} from '@semantic-components/ui';
import { ScLabel } from '@semantic-components/ui';

@Component({
  selector: 'app-disabled-password-field-demo',
  imports: [
    ScPasswordField,
    ScPasswordFieldGroup,
    ScPasswordFieldInput,
    ScPasswordFieldToggle,
    ScLabel,
  ],
  template: `
    <div class="space-y-2">
      <label sc-label>Password (Disabled)</label>
      <div sc-password-field [value]="'********'" [disabled]="true">
        <div sc-password-field-group>
          <input sc-password-field-input />
          <button sc-password-field-toggle></button>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledPasswordFieldDemo {}
