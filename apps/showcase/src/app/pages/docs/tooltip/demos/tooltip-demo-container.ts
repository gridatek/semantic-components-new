import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScTooltipDemo } from './tooltip-demo';

@Component({
  selector: 'app-tooltip-demo-container',
  imports: [DemoContainer, ScTooltipDemo],
  template: `
    <app-demo-container title="Tooltip" [code]="code">
      <app-sc-tooltip-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTooltipDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScTooltip,
  ScTooltipContent,
  ScTooltipTrigger,
} from '@semantic-components/ui';

@Component({
  selector: 'app-sc-tooltip-demo',
  imports: [ScTooltip, ScTooltipContent, ScTooltipTrigger],
  template: \`
    <div class="flex flex-wrap items-center gap-8">
      <!-- Basic Tooltip (Top) -->
      <div sc-tooltip>
        <button
          sc-tooltip-trigger
          class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Hover me
        </button>
        <div sc-tooltip-content>Add to library</div>
      </div>

      <!-- Bottom Tooltip -->
      <div sc-tooltip side="bottom">
        <button
          sc-tooltip-trigger
          class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Bottom
        </button>
        <div sc-tooltip-content>Tooltip on bottom</div>
      </div>

      <!-- Left Tooltip -->
      <div sc-tooltip side="left">
        <button
          sc-tooltip-trigger
          class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Left
        </button>
        <div sc-tooltip-content>Tooltip on left</div>
      </div>

      <!-- Right Tooltip -->
      <div sc-tooltip side="right">
        <button
          sc-tooltip-trigger
          class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Right
        </button>
        <div sc-tooltip-content>Tooltip on right</div>
      </div>

      <!-- With Icon Button -->
      <div sc-tooltip>
        <button
          sc-tooltip-trigger
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
            <path d="M12 5v14" />
            <path d="M5 12h14" />
          </svg>
          <span class="sr-only">Add item</span>
        </button>
        <div sc-tooltip-content>Add item</div>
      </div>

      <!-- With custom delay -->
      <div sc-tooltip [delayDuration]="500">
        <button
          sc-tooltip-trigger
          class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          500ms delay
        </button>
        <div sc-tooltip-content>This tooltip has a 500ms delay</div>
      </div>

      <!-- No delay -->
      <div sc-tooltip [delayDuration]="0">
        <button
          sc-tooltip-trigger
          class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          No delay
        </button>
        <div sc-tooltip-content>Instant tooltip</div>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTooltipDemo {}`;
}
