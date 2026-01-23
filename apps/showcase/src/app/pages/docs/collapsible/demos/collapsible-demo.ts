import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScCollapsible,
  ScCollapsibleContent,
  ScCollapsibleTrigger,
} from '@semantic-components/ui';

@Component({
  selector: 'app-sc-collapsible-demo',
  imports: [ScCollapsible, ScCollapsibleContent, ScCollapsibleTrigger],
  template: `
    <div class="flex flex-col gap-8">
      <!-- Basic Collapsible -->
      <div sc-collapsible class="w-[350px] space-y-2">
        <div class="flex items-center justify-between space-x-4 px-4">
          <h4 class="text-sm font-semibold">
            &#64;peduarte starred 3 repositories
          </h4>
          <button
            sc-collapsible-trigger
            class="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-input bg-background text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <svg
              class="size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <rect width="5" height="5" x="3" y="3" rx="1" />
              <rect width="5" height="5" x="16" y="3" rx="1" />
              <rect width="5" height="5" x="3" y="16" rx="1" />
              <rect width="5" height="5" x="16" y="16" rx="1" />
            </svg>
            <span class="sr-only">Toggle</span>
          </button>
        </div>
        <div class="rounded-md border px-4 py-3 font-mono text-sm">
          &#64;radix-ui/primitives
        </div>
        <div sc-collapsible-content class="space-y-2">
          <div class="rounded-md border px-4 py-3 font-mono text-sm">
            &#64;radix-ui/colors
          </div>
          <div class="rounded-md border px-4 py-3 font-mono text-sm">
            &#64;stitches/react
          </div>
        </div>
      </div>

      <!-- Initially Open -->
      <div sc-collapsible [open]="true" class="w-[350px] space-y-2">
        <div class="flex items-center justify-between space-x-4 px-4">
          <h4 class="text-sm font-semibold">Initially Open</h4>
          <button
            sc-collapsible-trigger
            class="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-input bg-background text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <svg
              class="size-4 transition-transform duration-200"
              [class.rotate-180]="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
            <span class="sr-only">Toggle</span>
          </button>
        </div>
        <div sc-collapsible-content>
          <div class="rounded-md border px-4 py-3 text-sm">
            This collapsible is open by default. You can toggle it closed by
            clicking the button.
          </div>
        </div>
      </div>

      <!-- Disabled -->
      <div sc-collapsible [disabled]="true" class="w-[350px] space-y-2">
        <div class="flex items-center justify-between space-x-4 px-4">
          <h4 class="text-sm font-semibold text-muted-foreground">
            Disabled Collapsible
          </h4>
          <button
            sc-collapsible-trigger
            class="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-input bg-background text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            <svg
              class="size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
            <span class="sr-only">Toggle</span>
          </button>
        </div>
        <div sc-collapsible-content>
          <div class="rounded-md border px-4 py-3 text-sm">
            This content is hidden.
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCollapsibleDemo {}
