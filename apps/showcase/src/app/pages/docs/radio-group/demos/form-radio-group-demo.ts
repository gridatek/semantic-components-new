import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScRadioGroup, ScRadioField, ScRadio } from '@semantic-components/ui';

@Component({
  selector: 'app-form-radio-group-demo',
  imports: [FormsModule, ScRadioGroup, ScRadioField, ScRadio],
  template: `
    <div class="rounded-lg border p-6 max-w-md">
      <div class="space-y-4">
        <h4 id="notify-heading" class="font-semibold">
          Notification Preferences
        </h4>
        <div sc-radio-group class="gap-3">
          <label sc-radio-field class="flex items-center space-x-2">
            <input
              type="radio"
              sc-radio
              name="notify"
              value="all"
              [(ngModel)]="notifyValue"
              id="notify-all"
            />
            <span class="text-sm font-medium">All new messages</span>
          </label>
          <label sc-radio-field class="flex items-center space-x-2">
            <input
              type="radio"
              sc-radio
              name="notify"
              value="mentions"
              [(ngModel)]="notifyValue"
              id="notify-mentions"
            />
            <span class="text-sm font-medium">
              Direct messages and mentions
            </span>
          </label>
          <label sc-radio-field class="flex items-center space-x-2">
            <input
              type="radio"
              sc-radio
              name="notify"
              value="none"
              [(ngModel)]="notifyValue"
              id="notify-none"
            />
            <span class="text-sm font-medium">Nothing</span>
          </label>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormRadioGroupDemo {
  notifyValue = 'mentions';
}
