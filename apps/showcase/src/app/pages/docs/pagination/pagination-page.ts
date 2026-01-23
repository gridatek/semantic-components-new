import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScPaginationDemoContainer } from './demos/pagination-demo-container';

@Component({
  selector: 'app-pagination-page',
  imports: [ScPaginationDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Pagination</h1>
        <p class="text-muted-foreground">
          Pagination with page navigation, next and previous links.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-pagination-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PaginationPage {}
