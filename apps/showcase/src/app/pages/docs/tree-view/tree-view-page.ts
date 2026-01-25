import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FileExplorerTreeViewDemoContainer } from './demos/file-explorer-tree-view-demo-container';
import { NavigationTreeViewDemoContainer } from './demos/navigation-tree-view-demo-container';
import { SimpleTreeViewDemoContainer } from './demos/simple-tree-view-demo-container';

@Component({
  selector: 'app-tree-view-page',
  imports: [
    FileExplorerTreeViewDemoContainer,
    NavigationTreeViewDemoContainer,
    SimpleTreeViewDemoContainer,
  ],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Tree View</h1>
        <p class="text-muted-foreground">
          A hierarchical collapsible tree for displaying nested data.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-file-explorer-tree-view-demo-container />
        <app-navigation-tree-view-demo-container />
        <app-simple-tree-view-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TreeViewPage {}
