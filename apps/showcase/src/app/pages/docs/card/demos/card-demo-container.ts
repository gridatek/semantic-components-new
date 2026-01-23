import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScCardDemo } from './card-demo';

@Component({
  selector: 'app-card-demo-container',
  imports: [DemoContainer, ScCardDemo],
  template: `
    <app-demo-container title="Card" [code]="code">
      <app-sc-card-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCardDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScCard,
  ScCardContent,
  ScCardDescription,
  ScCardFooter,
  ScCardHeader,
  ScCardTitle,
} from '@semantic-components/ui';
import { ScInput } from '@semantic-components/ui';
import { ScLabel } from '@semantic-components/ui';

@Component({
  selector: 'app-sc-card-demo',
  imports: [
    ScCard,
    ScCardContent,
    ScCardDescription,
    ScCardFooter,
    ScCardHeader,
    ScCardTitle,
    ScInput,
    ScLabel,
  ],
  template: \`
    <div class="space-y-8">
      <!-- Basic Card -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Basic Card</h3>
        <div sc-card class="w-[350px]">
          <div sc-card-header>
            <h3 sc-card-title>Card Title</h3>
            <p sc-card-description>Card description goes here.</p>
          </div>
          <div sc-card-content>
            <p>
              Card content goes here. This is where the main content of the card
              lives.
            </p>
          </div>
          <div sc-card-footer>
            <p class="text-sm text-muted-foreground">Card footer</p>
          </div>
        </div>
      </div>

      <!-- Card with Form -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Card with Form</h3>
        <div sc-card class="w-[350px]">
          <div sc-card-header>
            <h3 sc-card-title>Create project</h3>
            <p sc-card-description>Deploy your new project in one-click.</p>
          </div>
          <div sc-card-content>
            <div class="grid w-full items-center gap-4">
              <div class="flex flex-col space-y-1.5">
                <label sc-label for="name">Name</label>
                <input sc-input id="name" placeholder="Name of your project" />
              </div>
              <div class="flex flex-col space-y-1.5">
                <label sc-label for="framework">Framework</label>
                <select
                  id="framework"
                  class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">Select a framework</option>
                  <option value="next">Next.js</option>
                  <option value="angular">Angular</option>
                  <option value="vue">Vue</option>
                  <option value="svelte">Svelte</option>
                </select>
              </div>
            </div>
          </div>
          <div sc-card-footer class="flex justify-between">
            <button
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
              Cancel
            </button>
            <button
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Deploy
            </button>
          </div>
        </div>
      </div>

      <!-- Notification Card -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Notification Card</h3>
        <div sc-card class="w-[380px]">
          <div sc-card-header>
            <h3 sc-card-title>Notifications</h3>
            <p sc-card-description>You have 3 unread messages.</p>
          </div>
          <div sc-card-content class="grid gap-4">
            <div class="flex items-center space-x-4 rounded-md border p-4">
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
                class="size-6"
              >
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
              </svg>
              <div class="flex-1 space-y-1">
                <p class="text-sm font-medium leading-none">
                  Push Notifications
                </p>
                <p class="text-sm text-muted-foreground">
                  Send notifications to device.
                </p>
              </div>
            </div>
            <div class="flex items-center space-x-4 rounded-md border p-4">
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
                class="size-6"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <div class="flex-1 space-y-1">
                <p class="text-sm font-medium leading-none">
                  Email Notifications
                </p>
                <p class="text-sm text-muted-foreground">
                  Receive emails about activity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Cards -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Stats Cards</h3>
        <div class="grid gap-4 md:grid-cols-3">
          <div sc-card>
            <div sc-card-header class="pb-2">
              <p sc-card-description>Total Revenue</p>
              <h3 sc-card-title class="text-4xl">$45,231.89</h3>
            </div>
            <div sc-card-content>
              <p class="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </div>
          </div>
          <div sc-card>
            <div sc-card-header class="pb-2">
              <p sc-card-description>Subscriptions</p>
              <h3 sc-card-title class="text-4xl">+2,350</h3>
            </div>
            <div sc-card-content>
              <p class="text-xs text-muted-foreground">
                +180.1% from last month
              </p>
            </div>
          </div>
          <div sc-card>
            <div sc-card-header class="pb-2">
              <p sc-card-description>Active Now</p>
              <h3 sc-card-title class="text-4xl">+573</h3>
            </div>
            <div sc-card-content>
              <p class="text-xs text-muted-foreground">+201 since last hour</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCardDemo {}`;
}
