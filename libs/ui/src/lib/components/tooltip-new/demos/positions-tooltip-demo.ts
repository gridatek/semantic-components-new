import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScTooltip } from '../tooltip.directive';

@Component({
  selector: 'app-positions-tooltip-new-demo',
  imports: [ScTooltip],
  template: `
    <div class="flex flex-wrap items-center gap-4">
      <button
        scTooltip="Tooltip on top"
        tooltipPosition="top"
        class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        Top
      </button>
      <button
        scTooltip="Tooltip on right"
        tooltipPosition="right"
        class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        Right
      </button>
      <button
        scTooltip="Tooltip on bottom"
        tooltipPosition="bottom"
        class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        Bottom
      </button>
      <button
        scTooltip="Tooltip on left"
        tooltipPosition="left"
        class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        Left
      </button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PositionsTooltipNewDemo {}
