import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScCheckboxField,
  ScInvisibleCheckbox,
  ScLabel,
} from '@semantic-components/ui';

@Component({
  selector: 'app-disabled-checkbox-demo',
  imports: [ScCheckboxField, ScInvisibleCheckbox, ScLabel],
  template: `
    <div class="flex flex-col gap-4">
      <div sc-checkbox-field>
        <input
          type="checkbox"
          sc-invisible-checkbox
          [disabled]="true"
          id="disabled-unchecked"
        />
        <label sc-label for="disabled-unchecked">Disabled unchecked</label>
      </div>
      <div sc-checkbox-field>
        <input
          type="checkbox"
          sc-invisible-checkbox
          [checked]="true"
          [disabled]="true"
          id="disabled-checked"
        />
        <label sc-label for="disabled-checked">Disabled checked</label>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledCheckboxDemo {}
