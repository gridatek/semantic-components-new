import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScAlert,
  ScAlertDescription,
  ScAlertTitle,
} from '@semantic-components/ui';

@Component({
  selector: 'app-sc-alert-demo',
  imports: [ScAlert, ScAlertDescription, ScAlertTitle],
  template: `
    <div class="space-y-8">
      <!-- Default Alert -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Default Alert</h3>
        <div sc-alert>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-4"
          >
            <path d="M12 12h.01" />
            <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
            <path d="M22 13a18.15 18.15 0 0 1-20 0" />
            <rect width="20" height="14" x="2" y="6" rx="2" />
          </svg>
          <h5 sc-alert-title>Heads up!</h5>
          <div sc-alert-description>
            You can add components to your app using the cli.
          </div>
        </div>
      </div>

      <!-- Destructive Alert -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Destructive Alert</h3>
        <div sc-alert variant="destructive">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-4"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" x2="12" y1="8" y2="12" />
            <line x1="12" x2="12.01" y1="16" y2="16" />
          </svg>
          <h5 sc-alert-title>Error</h5>
          <div sc-alert-description>
            Your session has expired. Please log in again.
          </div>
        </div>
      </div>

      <!-- Alert without Icon -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Without Icon</h3>
        <div sc-alert>
          <h5 sc-alert-title>Note</h5>
          <div sc-alert-description>
            This is an alert without an icon. It still works perfectly fine.
          </div>
        </div>
      </div>

      <!-- Info Alert -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Info Alert</h3>
        <div sc-alert>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-4"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
          <h5 sc-alert-title>Information</h5>
          <div sc-alert-description>
            This feature is currently in beta. Some functionality may change.
          </div>
        </div>
      </div>

      <!-- Success Alert (custom styling) -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Success Alert (Custom)</h3>
        <div
          sc-alert
          class="border-green-500/50 text-green-600 [&>svg]:text-green-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-4"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <path d="m9 11 3 3L22 4" />
          </svg>
          <h5 sc-alert-title>Success!</h5>
          <div sc-alert-description>
            Your changes have been saved successfully.
          </div>
        </div>
      </div>

      <!-- Warning Alert (custom styling) -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Warning Alert (Custom)</h3>
        <div
          sc-alert
          class="border-yellow-500/50 text-yellow-600 [&>svg]:text-yellow-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-4"
          >
            <path
              d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
            />
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
          </svg>
          <h5 sc-alert-title>Warning</h5>
          <div sc-alert-description>
            Your account is about to expire. Please renew your subscription.
          </div>
        </div>
      </div>

      <!-- Alert with Long Content -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">With Long Content</h3>
        <div sc-alert>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-4"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
          <h5 sc-alert-title>Terms of Service Update</h5>
          <div sc-alert-description>
            <p>
              We've updated our Terms of Service. Please review the changes
              carefully as they affect how we handle your data and your rights
              as a user.
            </p>
            <p class="mt-2">
              Key changes include updated privacy policies, new data retention
              rules, and modifications to our refund policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAlertDemo {}
