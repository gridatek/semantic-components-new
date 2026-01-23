import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScTooltip,
  ScTooltipPortal,
  ScTooltipProvider,
  ScTooltipTrigger,
} from '@semantic-components/ui';

@Component({
  selector: 'app-basic-tooltip-demo',
  imports: [ScTooltip, ScTooltipProvider, ScTooltipPortal, ScTooltipTrigger],
  template: `
    <div sc-tooltip-provider>
      <button
        sc-tooltip-trigger
        class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        Hover me
      </button>
      <div sc-tooltip-portal><div sc-tooltip>Add to library</div></div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicTooltipDemo {}
