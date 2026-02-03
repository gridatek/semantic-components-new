import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScLabel, ScCheckbox } from '@semantic-components/ui';

@Component({
  selector: 'app-checkbox-label-demo',
  imports: [ScLabel, ScCheckbox],
  template: `
    <div class="flex items-center space-x-2">
      <sc-checkbox id="terms-label" />
      <label sc-label [for]="'terms-label'">Accept terms and conditions</label>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxLabelDemo {}
