import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScCollapsible,
  ScCollapsibleContent,
  ScCollapsibleTrigger,
} from '@semantic-components/ui';

@Component({
  selector: 'app-disabled-collapsible-demo',
  imports: [ScCollapsible, ScCollapsibleContent, ScCollapsibleTrigger],
  template: `
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
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledCollapsibleDemo {}
