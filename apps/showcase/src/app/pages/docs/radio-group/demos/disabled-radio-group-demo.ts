import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ScRadioFieldGroup,
  ScRadioField,
  ScRadio,
} from '@semantic-components/ui';

@Component({
  selector: 'app-disabled-radio-group-demo',
  imports: [FormsModule, ScRadioFieldGroup, ScRadioField, ScRadio],
  template: `
    <div class="flex flex-col gap-4">
      <div>
        <p class="text-xs text-muted-foreground mb-2">
          Individual item disabled:
        </p>
        <div sc-radio-field-group>
          <label sc-radio-field class="flex items-center space-x-2">
            <input
              type="radio"
              sc-radio
              name="individual"
              value="option1"
              [(ngModel)]="disabledDemo"
              id="d1"
            />
            <span class="text-sm">Option 1</span>
          </label>
          <label sc-radio-field class="flex items-center space-x-2">
            <input
              type="radio"
              sc-radio
              name="individual"
              value="option2"
              [(ngModel)]="disabledDemo"
              id="d2"
              [disabled]="true"
            />
            <span class="text-sm opacity-50">Option 2 (disabled)</span>
          </label>
          <label sc-radio-field class="flex items-center space-x-2">
            <input
              type="radio"
              sc-radio
              name="individual"
              value="option3"
              [(ngModel)]="disabledDemo"
              id="d3"
            />
            <span class="text-sm">Option 3</span>
          </label>
        </div>
      </div>
      <div>
        <p class="text-xs text-muted-foreground mb-2">Entire group disabled:</p>
        <div sc-radio-field-group>
          <label sc-radio-field class="flex items-center space-x-2">
            <input
              type="radio"
              sc-radio
              name="group"
              value="option1"
              [disabled]="true"
              id="g1"
            />
            <span class="text-sm opacity-50">Option 1</span>
          </label>
          <label sc-radio-field class="flex items-center space-x-2">
            <input
              type="radio"
              sc-radio
              name="group"
              value="option2"
              [disabled]="true"
              id="g2"
            />
            <span class="text-sm opacity-50">Option 2</span>
          </label>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledRadioGroupDemo {
  disabledDemo = 'option1';
}
