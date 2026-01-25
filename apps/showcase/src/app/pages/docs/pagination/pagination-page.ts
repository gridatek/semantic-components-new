import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicPaginationDemoContainer } from './demos/basic-pagination-demo-container';
import { EllipsisPaginationDemoContainer } from './demos/ellipsis-pagination-demo-container';
import { ManyPagesPaginationDemoContainer } from './demos/many-pages-pagination-demo-container';
import { ButtonsPaginationDemoContainer } from './demos/buttons-pagination-demo-container';
import { FirstPagePaginationDemoContainer } from './demos/first-page-pagination-demo-container';
import { LastPagePaginationDemoContainer } from './demos/last-page-pagination-demo-container';

@Component({
  selector: 'app-pagination-page',
  imports: [BasicPaginationDemoContainer, EllipsisPaginationDemoContainer, ManyPagesPaginationDemoContainer, ButtonsPaginationDemoContainer, FirstPagePaginationDemoContainer, LastPagePaginationDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Pagination</h1>
        <p class="text-muted-foreground">Pagination with page navigation, next and previous links.</p>
      </div>
      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-basic-pagination-demo-container />
        <app-ellipsis-pagination-demo-container />
        <app-many-pages-pagination-demo-container />
        <app-buttons-pagination-demo-container />
        <app-first-page-pagination-demo-container />
        <app-last-page-pagination-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PaginationPage {}
