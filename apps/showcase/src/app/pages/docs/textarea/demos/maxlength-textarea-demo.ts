import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScField,
  ScFieldDescription,
  ScLabel,
  ScTextarea,
} from '@semantic-components/ui';

@Component({
  selector: 'app-maxlength-textarea-demo',
  imports: [ScField, ScFieldDescription, ScLabel, ScTextarea],
  template: `
    <div sc-field>
      <label sc-label>Description</label>
      <textarea
        sc-textarea
        maxlength="200"
        placeholder="Enter description..."
      ></textarea>
      <p sc-field-description>Max 200 characters.</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaxlengthTextareaDemo {}
