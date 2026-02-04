import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScCheckboxDirective,
  ScInvisibleCheckbox,
  ScVisualCheckbox,
} from '@semantic-components/ui';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-checkbox-demo',
  imports: [
    ScCheckboxDirective,
    ScInvisibleCheckbox,
    ScVisualCheckbox,
    FormsModule,
  ],
  template: `
    <div class="rounded-lg border p-6 max-w-md">
      <div class="space-y-4">
        <h4 class="font-semibold">Notification Preferences</h4>
        <div class="space-y-4">
          <div class="flex items-center space-x-2">
            <div sc-checkbox>
              <input
                type="checkbox"
                sc-invisible-checkbox
                [(ngModel)]="emailNotif"
                id="email-notif"
                name="emailNotifications"
              />
              <span sc-visual-checkbox></span>
            </div>
            <label
              for="email-notif"
              class="text-sm font-medium leading-none cursor-pointer"
            >
              Email notifications
            </label>
          </div>
          <div class="flex items-center space-x-2">
            <div sc-checkbox>
              <input
                type="checkbox"
                sc-invisible-checkbox
                [(ngModel)]="smsNotif"
                id="sms-notif"
                name="smsNotifications"
              />
              <span sc-visual-checkbox></span>
            </div>
            <label
              for="sms-notif"
              class="text-sm font-medium leading-none cursor-pointer"
            >
              SMS notifications
            </label>
          </div>
          <div class="flex items-center space-x-2">
            <div sc-checkbox>
              <input
                type="checkbox"
                sc-invisible-checkbox
                [(ngModel)]="pushNotif"
                id="push-notif"
                name="pushNotifications"
              />
              <span sc-visual-checkbox></span>
            </div>
            <label
              for="push-notif"
              class="text-sm font-medium leading-none cursor-pointer"
            >
              Push notifications
            </label>
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormCheckboxDemo {
  readonly emailNotif = signal(true);
  readonly smsNotif = signal(false);
  readonly pushNotif = signal(true);
}
