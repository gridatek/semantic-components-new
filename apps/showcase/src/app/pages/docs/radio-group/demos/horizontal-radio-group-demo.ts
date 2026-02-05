import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScRadioGroup, ScRadioField, ScRadio } from '@semantic-components/ui';

@Component({
  selector: 'app-horizontal-radio-group-demo',
  imports: [FormsModule, ScRadioGroup, ScRadioField, ScRadio],
  template: `
    <div sc-radio-group class="flex flex-row gap-4">
      <label sc-radio-field>
        <input
          type="radio"
          sc-radio
          name="horizontal"
          value="all"
          [(ngModel)]="horizontalValue"
          id="h1"
        />
        <span class="text-sm font-medium">All</span>
      </label>
      <label sc-radio-field>
        <input
          type="radio"
          sc-radio
          name="horizontal"
          value="unread"
          [(ngModel)]="horizontalValue"
          id="h2"
        />
        <span class="text-sm font-medium">Unread</span>
      </label>
      <label sc-radio-field>
        <input
          type="radio"
          sc-radio
          name="horizontal"
          value="archived"
          [(ngModel)]="horizontalValue"
          id="h3"
        />
        <span class="text-sm font-medium">Archived</span>
      </label>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HorizontalRadioGroupDemo {
  horizontalValue = 'all';
}
