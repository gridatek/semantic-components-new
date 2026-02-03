import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FileExplorerTreeDemoContainer } from './demos/file-explorer-tree-demo-container';
import { NavigationTreeDemoContainer } from './demos/navigation-tree-demo-container';
import { SimpleTreeDemoContainer } from './demos/simple-tree-demo-container';

@Component({
  selector: 'app-tree-page',
  imports: [
    FileExplorerTreeDemoContainer,
    NavigationTreeDemoContainer,
    SimpleTreeDemoContainer,
  ],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Tree</h1>
        <p class="text-muted-foreground">
          A hierarchical collapsible tree for displaying nested data.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-file-explorer-tree-demo-container />
        <app-navigation-tree-demo-container />
        <app-simple-tree-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TreePage {}
