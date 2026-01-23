import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScTooltip,
  ScTooltipPortal,
  ScTooltipTrigger,
  ScTooltipProvider,
} from '@semantic-components/ui';

@Component({
  selector: 'app-positions-tooltip-demo',
  imports: [ScTooltip, ScTooltipPortal, ScTooltipTrigger, ScTooltipProvider],
  template: `
    <div class="flex flex-wrap items-center gap-8">
      <div sc-tooltip-provider side="bottom">
        <button
          sc-tooltip-trigger
          class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Bottom
        </button>
        <div sc-tooltip-portal><div sc-tooltip>Tooltip on bottom</div></div>
      </div>

      <div sc-tooltip-provider side="left">
        <button
          sc-tooltip-trigger
          class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Left
        </button>
        <div sc-tooltip-portal><div sc-tooltip>Tooltip on left</div></div>
      </div>

      <div sc-tooltip-provider side="right">
        <button
          sc-tooltip-trigger
          class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Right
        </button>
        <div sc-tooltip-portal><div sc-tooltip>Tooltip on right</div></div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PositionsTooltipDemo {}
