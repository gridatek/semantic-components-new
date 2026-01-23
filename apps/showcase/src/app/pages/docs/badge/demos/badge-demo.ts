import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScBadge } from '@semantic-components/ui';

@Component({
  selector: 'app-sc-badge-demo',
  imports: [ScBadge],
  template: `
    <div class="space-y-8">
      <!-- Variants -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Variants</h3>
        <div class="flex flex-wrap items-center gap-2">
          <div sc-badge>Default</div>
          <div sc-badge variant="secondary">Secondary</div>
          <div sc-badge variant="destructive">Destructive</div>
          <div sc-badge variant="outline">Outline</div>
        </div>
      </div>

      <!-- With Icons -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">With Icons</h3>
        <div class="flex flex-wrap items-center gap-2">
          <div sc-badge class="gap-1">
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
              class="size-3"
            >
              <path
                d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
              />
            </svg>
            Premium
          </div>
          <div sc-badge variant="secondary" class="gap-1">
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
              class="size-3"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            Pending
          </div>
          <div sc-badge variant="destructive" class="gap-1">
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
              class="size-3"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="15" x2="9" y1="9" y2="15" />
              <line x1="9" x2="15" y1="9" y2="15" />
            </svg>
            Error
          </div>
          <div sc-badge variant="outline" class="gap-1">
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
              class="size-3"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Completed
          </div>
        </div>
      </div>

      <!-- Status Badges -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Status Badges</h3>
        <div class="flex flex-wrap items-center gap-2">
          <div sc-badge class="bg-green-500 hover:bg-green-500/80">Active</div>
          <div sc-badge class="bg-yellow-500 hover:bg-yellow-500/80">
            Warning
          </div>
          <div sc-badge class="bg-blue-500 hover:bg-blue-500/80">Info</div>
          <div sc-badge class="bg-purple-500 hover:bg-purple-500/80">New</div>
        </div>
      </div>

      <!-- In Context -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">In Context</h3>
        <div class="space-y-3">
          <div class="flex items-center justify-between rounded-lg border p-4">
            <div>
              <p class="font-medium">Pro Plan</p>
              <p class="text-sm text-muted-foreground">
                Unlimited access to all features
              </p>
            </div>
            <div sc-badge>Popular</div>
          </div>
          <div class="flex items-center justify-between rounded-lg border p-4">
            <div>
              <p class="font-medium">Enterprise Plan</p>
              <p class="text-sm text-muted-foreground">
                For large organizations
              </p>
            </div>
            <div sc-badge variant="secondary">Coming Soon</div>
          </div>
          <div class="flex items-center justify-between rounded-lg border p-4">
            <div>
              <p class="font-medium">Legacy Plan</p>
              <p class="text-sm text-muted-foreground">No longer available</p>
            </div>
            <div sc-badge variant="destructive">Deprecated</div>
          </div>
        </div>
      </div>

      <!-- Notification Count -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Notification Count</h3>
        <div class="flex items-center gap-6">
          <div class="relative">
            <button
              class="inline-flex size-10 items-center justify-center rounded-md border border-input bg-background hover:bg-accent"
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
                class="size-5"
              >
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
              </svg>
            </button>
            <span
              sc-badge
              class="absolute -right-1 -top-1 flex size-5 items-center justify-center p-0"
            >
              3
            </span>
          </div>
          <div class="relative">
            <button
              class="inline-flex size-10 items-center justify-center rounded-md border border-input bg-background hover:bg-accent"
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
                class="size-5"
              >
                <path
                  d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                />
              </svg>
            </button>
            <span
              sc-badge
              variant="destructive"
              class="absolute -right-1 -top-1 flex size-5 items-center justify-center p-0"
            >
              9+
            </span>
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScBadgeDemo {}
