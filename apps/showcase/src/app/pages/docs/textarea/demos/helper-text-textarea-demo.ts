import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScField,
  ScFieldDescription,
  ScLabel,
  ScTextarea,
} from '@semantic-components/ui';

@Component({
  selector: 'app-helper-text-textarea-demo',
  imports: [ScField, ScFieldDescription, ScLabel, ScTextarea],
  template: `
    <div sc-field>
      <label sc-label>Bio</label>
      <textarea sc-textarea placeholder="Tell us about yourself"></textarea>
      <p sc-field-description>
        Your bio will be visible on your public profile.
      </p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelperTextTextareaDemo {}
