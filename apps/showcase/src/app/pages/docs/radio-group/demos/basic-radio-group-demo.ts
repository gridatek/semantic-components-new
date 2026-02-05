import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScRadioGroup, ScRadioField, ScRadio } from '@semantic-components/ui';

@Component({
  selector: 'app-basic-radio-group-demo',
  imports: [FormsModule, ScRadioGroup, ScRadioField, ScRadio],
  template: `
    <div sc-radio-group>
      <label sc-radio-field class="flex items-center space-x-2">
        <input
          type="radio"
          sc-radio
          name="spacing"
          value="default"
          [(ngModel)]="value"
          id="r1"
        />
        <span class="text-sm font-medium leading-none">Default</span>
      </label>
      <label sc-radio-field class="flex items-center space-x-2">
        <input
          type="radio"
          sc-radio
          name="spacing"
          value="comfortable"
          [(ngModel)]="value"
          id="r2"
        />
        <span class="text-sm font-medium leading-none">Comfortable</span>
      </label>
      <label sc-radio-field class="flex items-center space-x-2">
        <input
          type="radio"
          sc-radio
          name="spacing"
          value="compact"
          [(ngModel)]="value"
          id="r3"
        />
        <span class="text-sm font-medium leading-none">Compact</span>
      </label>
    </div>
    <p class="mt-2 text-sm text-muted-foreground">
      Selected: {{ value || 'none' }}
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicRadioGroupDemo {
  value = 'comfortable';
}
