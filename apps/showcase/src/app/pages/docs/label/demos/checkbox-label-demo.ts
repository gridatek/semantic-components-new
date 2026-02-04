import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScLabel,
  ScCheckboxDirective,
  ScInvisibleCheckbox,
  ScVisualCheckbox,
  ScField,
} from '@semantic-components/ui';

@Component({
  selector: 'app-checkbox-label-demo',
  imports: [
    ScField,
    ScLabel,
    ScCheckboxDirective,
    ScInvisibleCheckbox,
    ScVisualCheckbox,
  ],
  template: `
    <div sc-field orientation="horizontal">
      <div sc-checkbox>
        <input type="checkbox" sc-invisible-checkbox id="terms-label" />
        <span sc-visual-checkbox></span>
      </div>
      <label sc-label [for]="'terms-label'">Accept terms and conditions</label>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxLabelDemo {}
