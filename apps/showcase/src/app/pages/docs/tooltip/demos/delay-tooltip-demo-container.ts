import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { DelayTooltipDemo } from './delay-tooltip-demo';

@Component({
  selector: 'app-delay-tooltip-demo-container',
  imports: [DemoContainer, DelayTooltipDemo],
  template: `
    <app-demo-container
      title="Delay"
      demoUrl="/demos/tooltip/delay-tooltip-demo"
      [code]="code"
    >
      <app-delay-tooltip-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DelayTooltipDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScTooltip, ScTooltipPortal, ScTooltipTrigger } from '@semantic-components/ui';

@Component({
  selector: 'app-delay-tooltip-demo',
  imports: [ScTooltip, ScTooltipPortal, ScTooltipTrigger],
  template: \`
    <div class="flex flex-wrap items-center gap-8">
      <div sc-tooltip [delayDuration]="500">
        <button
          sc-tooltip-trigger
          class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          500ms delay
        </button>
        <div sc-tooltip-portal>This tooltip has a 500ms delay</div>
      </div>

      <div sc-tooltip [delayDuration]="0">
        <button
          sc-tooltip-trigger
          class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          No delay
        </button>
        <div sc-tooltip-portal>Instant tooltip</div>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DelayTooltipDemo {}`;
}
