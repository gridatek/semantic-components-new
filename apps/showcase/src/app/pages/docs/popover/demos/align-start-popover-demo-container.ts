import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { AlignStartPopoverDemo } from './align-start-popover-demo';

@Component({
  selector: 'app-align-start-popover-demo-container',
  imports: [DemoContainer, AlignStartPopoverDemo],
  template: `
    <app-demo-container
      title="Align Start"
      demoUrl="/demos/popover/align-start-popover-demo"
      [code]="code"
    >
      <app-align-start-popover-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlignStartPopoverDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScPopoverProvider,
  ScPopoverContent,
  ScPopoverTrigger,
} from '@semantic-components/ui';

@Component({
  selector: 'app-align-start-popover-demo',
  imports: [ScPopoverProvider, ScPopoverContent, ScPopoverTrigger],
  template: \`
    <div sc-popover-provider align="start">
      <button
        sc-popover-trigger
        class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        Align Start
      </button>
      <div sc-popover-content>
        <p class="text-sm">This popover is aligned to the start.</p>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlignStartPopoverDemo {}`;
}
