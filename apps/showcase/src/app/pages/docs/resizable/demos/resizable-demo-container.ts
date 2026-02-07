import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScResizableDemo } from './resizable-demo';

@Component({
  selector: 'app-resizable-demo-container',
  imports: [DemoContainer, ScResizableDemo],
  template: `
    <app-demo-container title="Resizable" [code]="code">
      <app-resizable-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScResizableDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScResizableHandle,
  ScResizablePanel,
  ScResizablePanelGroup,
} from '@semantic-components/ui';

@Component({
  selector: 'app-resizable-demo',
  imports: [ScResizableHandle, ScResizablePanel, ScResizablePanelGroup],
  template: \`
    <div class="space-y-8">
      <!-- Horizontal -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Horizontal</h3>
        <div
          sc-resizable-panel-group
          direction="horizontal"
          class="min-h-[200px] max-w-md rounded-lg border"
        >
          <div sc-resizable-panel [defaultSize]="50">
            <div class="flex h-full items-center justify-center p-6">
              <span class="font-semibold">One</span>
            </div>
          </div>
          <div sc-resizable-handle></div>
          <div sc-resizable-panel [defaultSize]="50">
            <div class="flex h-full items-center justify-center p-6">
              <span class="font-semibold">Two</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Vertical -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Vertical</h3>
        <div
          sc-resizable-panel-group
          direction="vertical"
          class="min-h-[300px] max-w-md rounded-lg border"
        >
          <div sc-resizable-panel [defaultSize]="30">
            <div class="flex h-full items-center justify-center p-6">
              <span class="font-semibold">Header</span>
            </div>
          </div>
          <div sc-resizable-handle></div>
          <div sc-resizable-panel [defaultSize]="70">
            <div class="flex h-full items-center justify-center p-6">
              <span class="font-semibold">Content</span>
            </div>
          </div>
        </div>
      </div>

      <!-- With Handle -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">With Handle</h3>
        <div
          sc-resizable-panel-group
          direction="horizontal"
          class="min-h-[200px] max-w-md rounded-lg border"
        >
          <div sc-resizable-panel [defaultSize]="30">
            <div class="flex h-full items-center justify-center p-6">
              <span class="font-semibold">Sidebar</span>
            </div>
          </div>
          <div sc-resizable-handle [withHandle]="true"></div>
          <div sc-resizable-panel [defaultSize]="70">
            <div class="flex h-full items-center justify-center p-6">
              <span class="font-semibold">Content</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Three Panels -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Three Panels</h3>
        <div
          sc-resizable-panel-group
          direction="horizontal"
          class="min-h-[200px] max-w-lg rounded-lg border"
        >
          <div sc-resizable-panel [defaultSize]="25" [minSize]="15">
            <div class="flex h-full items-center justify-center p-6">
              <span class="font-semibold">Left</span>
            </div>
          </div>
          <div sc-resizable-handle [withHandle]="true"></div>
          <div sc-resizable-panel [defaultSize]="50">
            <div class="flex h-full items-center justify-center p-6">
              <span class="font-semibold">Center</span>
            </div>
          </div>
          <div sc-resizable-handle [withHandle]="true"></div>
          <div sc-resizable-panel [defaultSize]="25" [minSize]="15">
            <div class="flex h-full items-center justify-center p-6">
              <span class="font-semibold">Right</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Nested Panels -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Nested Panels</h3>
        <div
          sc-resizable-panel-group
          direction="horizontal"
          class="min-h-[300px] max-w-lg rounded-lg border"
        >
          <div sc-resizable-panel [defaultSize]="30">
            <div class="flex h-full items-center justify-center p-6">
              <span class="font-semibold">Sidebar</span>
            </div>
          </div>
          <div sc-resizable-handle></div>
          <div sc-resizable-panel [defaultSize]="70">
            <div sc-resizable-panel-group direction="vertical" class="h-full">
              <div sc-resizable-panel [defaultSize]="40">
                <div class="flex h-full items-center justify-center p-6">
                  <span class="font-semibold">Top</span>
                </div>
              </div>
              <div sc-resizable-handle></div>
              <div sc-resizable-panel [defaultSize]="60">
                <div class="flex h-full items-center justify-center p-6">
                  <span class="font-semibold">Bottom</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- IDE Layout Example -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">IDE Layout</h3>
        <div
          sc-resizable-panel-group
          direction="horizontal"
          class="min-h-[400px] rounded-lg border"
        >
          <div
            sc-resizable-panel
            [defaultSize]="20"
            [minSize]="15"
            [maxSize]="30"
          >
            <div class="flex h-full flex-col bg-muted/30">
              <div class="border-b p-2 text-sm font-medium">Explorer</div>
              <div class="flex-1 p-2 text-sm text-muted-foreground">
                <div class="space-y-1">
                  <div>src/</div>
                  <div class="pl-2">app/</div>
                  <div class="pl-4">components/</div>
                  <div class="pl-4">pages/</div>
                </div>
              </div>
            </div>
          </div>
          <div sc-resizable-handle></div>
          <div sc-resizable-panel [defaultSize]="60">
            <div sc-resizable-panel-group direction="vertical" class="h-full">
              <div sc-resizable-panel [defaultSize]="70">
                <div class="flex h-full flex-col">
                  <div class="border-b p-2 text-sm font-medium">Editor</div>
                  <div
                    class="flex-1 p-4 font-mono text-sm text-muted-foreground"
                  >
                    // Your code here...
                  </div>
                </div>
              </div>
              <div sc-resizable-handle></div>
              <div sc-resizable-panel [defaultSize]="30" [minSize]="15">
                <div class="flex h-full flex-col bg-muted/30">
                  <div class="border-b p-2 text-sm font-medium">Terminal</div>
                  <div
                    class="flex-1 p-2 font-mono text-sm text-muted-foreground"
                  >
                    $ _
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div sc-resizable-handle></div>
          <div
            sc-resizable-panel
            [defaultSize]="20"
            [minSize]="15"
            [maxSize]="30"
          >
            <div class="flex h-full flex-col bg-muted/30">
              <div class="border-b p-2 text-sm font-medium">Outline</div>
              <div class="flex-1 p-2 text-sm text-muted-foreground">
                <div class="space-y-1">
                  <div>Functions</div>
                  <div>Classes</div>
                  <div>Variables</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScResizableDemo {}`;
}
