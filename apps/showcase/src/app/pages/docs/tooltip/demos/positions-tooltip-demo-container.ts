import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { PositionsTooltipDemo } from './positions-tooltip-demo';

@Component({
  selector: 'app-positions-tooltip-demo-container',
  imports: [DemoContainer, PositionsTooltipDemo],
  template: `
    <app-demo-container
      title="Positions"
      demoUrl="/demos/tooltip/positions-tooltip-demo"
      [code]="code"
    >
      <app-positions-tooltip-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PositionsTooltipDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScTooltip, ScTooltipContent, ScTooltipTrigger } from '@semantic-components/ui';

@Component({
  selector: 'app-positions-tooltip-demo',
  imports: [ScTooltip, ScTooltipContent, ScTooltipTrigger],
  template: \`
    <div class="flex flex-wrap items-center gap-8">
      <div sc-tooltip side="bottom">
        <button
          sc-tooltip-trigger
          class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Bottom
        </button>
        <div sc-tooltip-content>Tooltip on bottom</div>
      </div>

      <div sc-tooltip side="left">
        <button
          sc-tooltip-trigger
          class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Left
        </button>
        <div sc-tooltip-content>Tooltip on left</div>
      </div>

      <div sc-tooltip side="right">
        <button
          sc-tooltip-trigger
          class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Right
        </button>
        <div sc-tooltip-content>Tooltip on right</div>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PositionsTooltipDemo {}`;
}
