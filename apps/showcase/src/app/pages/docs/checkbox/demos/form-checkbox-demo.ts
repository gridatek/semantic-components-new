import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScCheckbox } from '@semantic-components/ui';

@Component({
  selector: 'app-form-checkbox-demo',
  imports: [ScCheckbox],
  template: `
    <div class="rounded-lg border p-6 max-w-md">
      <div class="space-y-4">
        <h4 class="font-semibold">Notification Preferences</h4>
        <div class="space-y-4">
          <div class="flex items-center space-x-2">
            <sc-checkbox [(checked)]="emailNotif" id="email-notif" />
            <label for="email-notif" class="text-sm font-medium leading-none">
              Email notifications
            </label>
          </div>
          <div class="flex items-center space-x-2">
            <sc-checkbox [(checked)]="smsNotif" id="sms-notif" />
            <label for="sms-notif" class="text-sm font-medium leading-none">
              SMS notifications
            </label>
          </div>
          <div class="flex items-center space-x-2">
            <sc-checkbox [(checked)]="pushNotif" id="push-notif" />
            <label for="push-notif" class="text-sm font-medium leading-none">
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
