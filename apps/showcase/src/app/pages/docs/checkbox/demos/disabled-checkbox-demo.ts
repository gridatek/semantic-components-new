import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScCheckboxDirective,
  ScInvisibleCheckbox,
  ScVisualCheckbox,
} from '@semantic-components/ui';

@Component({
  selector: 'app-disabled-checkbox-demo',
  imports: [ScCheckboxDirective, ScInvisibleCheckbox, ScVisualCheckbox],
  template: `
    <div class="flex flex-col gap-4">
      <div class="flex items-center space-x-2">
        <div sc-checkbox>
          <input
            type="checkbox"
            sc-invisible-checkbox
            [disabled]="true"
            id="disabled-unchecked"
          />
          <span sc-visual-checkbox></span>
        </div>
        <label
          for="disabled-unchecked"
          class="text-sm font-medium leading-none opacity-70"
        >
          Disabled unchecked
        </label>
      </div>
      <div class="flex items-center space-x-2">
        <div sc-checkbox>
          <input
            type="checkbox"
            sc-invisible-checkbox
            [checked]="true"
            [disabled]="true"
            id="disabled-checked"
          />
          <span sc-visual-checkbox></span>
        </div>
        <label
          for="disabled-checked"
          class="text-sm font-medium leading-none opacity-70"
        >
          Disabled checked
        </label>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledCheckboxDemo {}
