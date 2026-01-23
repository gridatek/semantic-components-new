import { ChangeDetectionStrategy, Component } from '@angular/core';
import TreeViewDemoContainer from './demos/tree-view-demo-container';

@Component({
  selector: 'app-tree-view-page',
  imports: [TreeViewDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">TreeView</h1>
        <p class="text-muted-foreground">
          A hierarchical collapsible tree for displaying nested data.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-tree-view-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TreeViewPage {}
