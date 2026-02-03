import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { FormCheckboxDemo } from './form-checkbox-demo';

@Component({
  selector: 'app-form-checkbox-demo-container',
  imports: [DemoContainer, FormCheckboxDemo],
  template: `
    <app-demo-container
      title="Form Example"
      demoUrl="/demos/checkbox/form-checkbox-demo"
      [code]="code"
    >
      <app-form-checkbox-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormCheckboxDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScCheckbox } from '@semantic-components/ui';

@Component({
  selector: 'app-form-checkbox-demo',
  imports: [ScCheckbox],
  template: \`
    <div class="rounded-lg border p-6 max-w-md">
      <div class="space-y-4">
        <h4 class="font-semibold">Notification Preferences</h4>
        <div class="space-y-4">
          <div class="flex items-center space-x-2">
            <sc-checkbox
              [(checked)]="emailNotif"
              id="email-notif"
              name="emailNotifications"
            />
            <label
              for="email-notif"
              class="text-sm font-medium leading-none cursor-pointer"
            >
              Email notifications
            </label>
          </div>
          <div class="flex items-center space-x-2">
            <sc-checkbox
              [(checked)]="smsNotif"
              id="sms-notif"
              name="smsNotifications"
            />
            <label
              for="sms-notif"
              class="text-sm font-medium leading-none cursor-pointer"
            >
              SMS notifications
            </label>
          </div>
          <div class="flex items-center space-x-2">
            <sc-checkbox
              [(checked)]="pushNotif"
              id="push-notif"
              name="pushNotifications"
            />
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
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormCheckboxDemo {
  readonly emailNotif = signal(true);
  readonly smsNotif = signal(false);
  readonly pushNotif = signal(true);
}`;
}
