import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScLabel, ScCheckbox, ScField } from '@semantic-components/ui';

@Component({
  selector: 'app-checkbox-label-demo',
  imports: [ScField, ScLabel, ScCheckbox],
  template: `
    <div sc-field orientation="horizontal">
      <sc-checkbox id="terms-label" />
      <label sc-label [for]="'terms-label'">Accept terms and conditions</label>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxLabelDemo {}
