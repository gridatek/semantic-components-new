import { ChangeDetectionStrategy, Component } from '@angular/core';
import SortableListDemoContainer from './demos/sortable-list-demo-container';

@Component({
  selector: 'app-sortable-list-page',
  imports: [SortableListDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">SortableList</h1>
        <p class="text-muted-foreground">
          A drag and drop list component for reordering items.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-sortable-list-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SortableListPage {}
