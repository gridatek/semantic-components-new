import { ChangeDetectionStrategy, Component } from '@angular/core';
import { VirtualListDemoContainer } from './demos/virtual-list-demo-container';

@Component({
  selector: 'app-virtual-list-page',
  imports: [VirtualListDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">VirtualList</h1>
        <p class="text-muted-foreground">
          Efficiently render large lists by only rendering visible items.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-virtual-list-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class VirtualListPage {}
