import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { form, FormField, required } from '@angular/forms/signals';
import { ScField, ScInput, ScLabel } from '@semantic-components/ui';

@Component({
  selector: 'app-label-input-demo',
  imports: [FormField, ScField, ScInput, ScLabel],
  template: `
    <div sc-field>
      <label sc-label>Email</label>
      <input
        sc-input
        type="email"
        [formField]="emailForm.email"
        placeholder="Email"
      />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelInputDemo {
  readonly formModel = signal({ email: '' });
  readonly emailForm = form(this.formModel, (s) => {
    required(s.email);
  });
}
