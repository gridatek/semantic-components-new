import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScTooltip,
  ScTooltipContent,
  ScTooltipTrigger,
} from '@semantic-components/ui';

@Component({
  selector: 'app-delay-tooltip-demo',
  imports: [ScTooltip, ScTooltipContent, ScTooltipTrigger],
  template: `
    <div class="flex flex-wrap items-center gap-8">
      <div sc-tooltip [delayDuration]="500">
        <button
          sc-tooltip-trigger
          class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          500ms delay
        </button>
        <div sc-tooltip-content>This tooltip has a 500ms delay</div>
      </div>

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
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DelayTooltipDemo {}
