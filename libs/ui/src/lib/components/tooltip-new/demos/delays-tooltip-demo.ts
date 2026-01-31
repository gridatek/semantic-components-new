import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScTooltip } from '../tooltip.directive';

@Component({
  selector: 'app-delays-tooltip-new-demo',
  imports: [ScTooltip],
  template: `
    <div class="flex flex-wrap items-center gap-4">
      <button
        scTooltip="Instant tooltip (no delay)"
        [tooltipDelay]="0"
        class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        No delay
      </button>
      <button
        scTooltip="Default delay (200ms)"
        class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        Default (200ms)
      </button>
      <button
        scTooltip="Slow tooltip (500ms)"
        [tooltipDelay]="500"
        class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        Slow (500ms)
      </button>
      <button
        scTooltip="With hide delay (300ms)"
        [tooltipHideDelay]="300"
        class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        Hide delay (300ms)
      </button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DelaysTooltipNewDemo {}
