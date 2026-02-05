import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { disabled, form, FormField } from '@angular/forms/signals';
import { ScField, ScInput, ScLabel } from '@semantic-components/ui';

@Component({
  selector: 'app-disabled-input-demo',
  imports: [FormField, ScField, ScInput, ScLabel],
  template: `
    <div sc-field>
      <label sc-label>Disabled</label>
      <input
        sc-input
        type="text"
        [formField]="disabledForm.text"
        placeholder="Disabled input"
      />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledInputDemo {
  readonly formModel = signal({ text: '' });
  readonly disabledForm = form(this.formModel, (s) => {
    disabled(s.text);
  });
}
