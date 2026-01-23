import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScPopoverDemo } from './popover-demo';

@Component({
  selector: 'app-popover-demo-container',
  imports: [DemoContainer, ScPopoverDemo],
  template: `
    <app-demo-container title="Popover" [code]="code">
      <app-sc-popover-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPopoverDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScPopover,
  ScPopoverContent,
  ScPopoverTrigger,
} from '@semantic-components/ui';

@Component({
  selector: 'app-sc-popover-demo',
  imports: [ScPopover, ScPopoverContent, ScPopoverTrigger],
  template: \`
    <div class="flex flex-wrap gap-8">
      <!-- Basic Popover -->
      <div sc-popover>
        <button
          sc-popover-trigger
          class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Open Popover
        </button>
        <div sc-popover-content>
          <div class="grid gap-4">
            <div class="space-y-2">
              <h4 class="font-medium leading-none">Dimensions</h4>
              <p class="text-sm text-muted-foreground">
                Set the dimensions for the layer.
              </p>
            </div>
            <div class="grid gap-2">
              <div class="grid grid-cols-3 items-center gap-4">
                <label for="width" class="text-sm">Width</label>
                <input
                  id="width"
                  value="100%"
                  class="col-span-2 h-8 rounded-md border border-input bg-transparent px-3 text-sm"
                />
              </div>
              <div class="grid grid-cols-3 items-center gap-4">
                <label for="maxWidth" class="text-sm">Max. width</label>
                <input
                  id="maxWidth"
                  value="300px"
                  class="col-span-2 h-8 rounded-md border border-input bg-transparent px-3 text-sm"
                />
              </div>
              <div class="grid grid-cols-3 items-center gap-4">
                <label for="height" class="text-sm">Height</label>
                <input
                  id="height"
                  value="25px"
                  class="col-span-2 h-8 rounded-md border border-input bg-transparent px-3 text-sm"
                />
              </div>
              <div class="grid grid-cols-3 items-center gap-4">
                <label for="maxHeight" class="text-sm">Max. height</label>
                <input
                  id="maxHeight"
                  value="none"
                  class="col-span-2 h-8 rounded-md border border-input bg-transparent px-3 text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Top Popover -->
      <div sc-popover side="top">
        <button
          sc-popover-trigger
          class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Top
        </button>
        <div sc-popover-content>
          <p class="text-sm">This popover appears on top.</p>
        </div>
      </div>

      <!-- Right Popover -->
      <div sc-popover side="right">
        <button
          sc-popover-trigger
          class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Right
        </button>
        <div sc-popover-content>
          <p class="text-sm">This popover appears on the right.</p>
        </div>
      </div>

      <!-- Left Popover -->
      <div sc-popover side="left">
        <button
          sc-popover-trigger
          class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Left
        </button>
        <div sc-popover-content>
          <p class="text-sm">This popover appears on the left.</p>
        </div>
      </div>

      <!-- Aligned Start -->
      <div sc-popover align="start">
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

      <!-- Aligned End -->
      <div sc-popover align="end">
        <button
          sc-popover-trigger
          class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Align End
        </button>
        <div sc-popover-content>
          <p class="text-sm">This popover is aligned to the end.</p>
        </div>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPopoverDemo {}`;
}
