import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { form, FormField, required } from '@angular/forms/signals';
import { ScField, ScLabel, ScTextarea } from '@semantic-components/ui';

@Component({
  selector: 'app-label-textarea-demo',
  imports: [FormField, ScField, ScLabel, ScTextarea],
  template: `
    <div sc-field>
      <label sc-label>Your message</label>
      <textarea
        sc-textarea
        [formField]="textareaForm.message"
        placeholder="Type your message here."
      ></textarea>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelTextareaDemo {
  readonly formModel = signal({ message: '' });
  readonly textareaForm = form(this.formModel, (s) => {
    required(s.message);
  });
}
