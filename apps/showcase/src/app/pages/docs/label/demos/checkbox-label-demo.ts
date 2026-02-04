import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScLabel,
  ScCheckboxField,
  ScInvisibleCheckbox,
} from '@semantic-components/ui';

@Component({
  selector: 'app-checkbox-label-demo',
  imports: [ScLabel, ScCheckboxField, ScInvisibleCheckbox],
  template: `
    <div sc-checkbox-field>
      <input type="checkbox" sc-invisible-checkbox id="terms-label" />
      <label sc-label [for]="'terms-label'">Accept terms and conditions</label>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxLabelDemo {}
