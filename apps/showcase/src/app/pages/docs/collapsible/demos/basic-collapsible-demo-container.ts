import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { BasicCollapsibleDemo } from './basic-collapsible-demo';

@Component({
  selector: 'app-basic-collapsible-demo-container',
  imports: [DemoContainer, BasicCollapsibleDemo],
  template: `
    <app-demo-container title="Basic" [code]="code">
      <app-basic-collapsible-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicCollapsibleDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScCollapsible,
  ScCollapsibleContent,
  ScCollapsiblePanel,
  ScCollapsibleTrigger,
} from '@semantic-components/ui';

@Component({
  selector: 'app-basic-collapsible-demo',
  imports: [ScCollapsible, ScCollapsibleContent, ScCollapsiblePanel, ScCollapsibleTrigger],
  template: \`
    <div sc-collapsible class="w-[350px] space-y-2">
      <div class="flex items-center justify-between space-x-4 px-4">
        <h4 class="text-sm font-semibold">
          Angular Project Dependencies
        </h4>
        <button
          sc-collapsible-trigger
          panelId="collapsible-1"
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
            <path d="m6 9 6 6 6-6" />
          </svg>
          <span class="sr-only">Toggle</span>
        </button>
      </div>
      <div class="rounded-md border px-4 py-3 font-mono text-sm">
        &#64;angular/core
      </div>
      <div sc-collapsible-panel panelId="collapsible-1">
        <div sc-collapsible-content class="space-y-2">
          <div class="rounded-md border px-4 py-3 font-mono text-sm">
            &#64;angular/common
          </div>
          <div class="rounded-md border px-4 py-3 font-mono text-sm">
            &#64;angular/forms
          </div>
        </div>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicCollapsibleDemo {}`;
}
