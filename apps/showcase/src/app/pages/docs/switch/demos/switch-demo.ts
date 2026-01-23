import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScSwitch } from '@semantic-components/ui';

@Component({
  selector: 'app-switch-demo',
  imports: [ScSwitch],
  template: `
    <div class="space-y-8">
      <!-- Basic Switch -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Basic Switch</h3>
        <div class="flex items-center space-x-2">
          <button sc-switch id="airplane-mode"></button>
          <label for="airplane-mode" class="text-sm font-medium leading-none">
            Airplane Mode
          </label>
        </div>
      </div>

      <!-- With State Display -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">With State Display</h3>
        <div class="flex items-center space-x-2">
          <button
            sc-switch
            [(checked)]="notifications"
            id="notifications"
          ></button>
          <label for="notifications" class="text-sm font-medium leading-none">
            Notifications: {{ notifications() ? 'On' : 'Off' }}
          </label>
        </div>
      </div>

      <!-- Disabled States -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Disabled States</h3>
        <div class="space-y-3">
          <div class="flex items-center space-x-2">
            <button sc-switch [disabled]="true" id="disabled-off"></button>
            <label
              for="disabled-off"
              class="text-sm font-medium leading-none text-muted-foreground"
            >
              Disabled (Off)
            </label>
          </div>
          <div class="flex items-center space-x-2">
            <button
              sc-switch
              [checked]="true"
              [disabled]="true"
              id="disabled-on"
            ></button>
            <label
              for="disabled-on"
              class="text-sm font-medium leading-none text-muted-foreground"
            >
              Disabled (On)
            </label>
          </div>
        </div>
      </div>

      <!-- Settings Form -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Settings Form</h3>
        <div class="w-[400px] rounded-lg border p-4">
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div class="space-y-0.5">
                <label for="marketing" class="text-sm font-medium">
                  Marketing emails
                </label>
                <p class="text-sm text-muted-foreground">
                  Receive emails about new products and features.
                </p>
              </div>
              <button sc-switch [(checked)]="marketing" id="marketing"></button>
            </div>
            <div class="flex items-center justify-between">
              <div class="space-y-0.5">
                <label for="security" class="text-sm font-medium">
                  Security emails
                </label>
                <p class="text-sm text-muted-foreground">
                  Receive emails about your account security.
                </p>
              </div>
              <button sc-switch [(checked)]="security" id="security"></button>
            </div>
            <div class="flex items-center justify-between">
              <div class="space-y-0.5">
                <label for="updates" class="text-sm font-medium">
                  Product updates
                </label>
                <p class="text-sm text-muted-foreground">
                  Receive emails about product updates and tips.
                </p>
              </div>
              <button sc-switch [(checked)]="updates" id="updates"></button>
            </div>
          </div>
        </div>
      </div>

      <!-- With Description -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">With Description</h3>
        <div
          class="flex flex-row items-center justify-between rounded-lg border p-4"
        >
          <div class="space-y-0.5">
            <label for="dark-mode" class="text-base font-medium">
              Dark Mode
            </label>
            <p class="text-sm text-muted-foreground">
              Enable dark mode for a better viewing experience in low light.
            </p>
          </div>
          <button sc-switch id="dark-mode"></button>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSwitchDemo {
  readonly notifications = signal(true);
  readonly marketing = signal(false);
  readonly security = signal(true);
  readonly updates = signal(false);
}
