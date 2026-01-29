import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { PageSizePaginationDemo } from './page-size-pagination-demo';

@Component({
  selector: 'app-page-size-pagination-demo-container',
  imports: [DemoContainer, PageSizePaginationDemo],
  template: `
    <app-demo-container
      title="Page Size Selector"
      [code]="code"
      demoUrl="/demos/pagination/page-size-pagination-demo"
    >
      <app-page-size-pagination-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageSizePaginationDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScPagination,
  ScPaginationEllipsis,
  ScPaginationItem,
  ScPaginationLink,
  ScPaginationList,
  ScPaginationNext,
  ScPaginationPageSize,
  ScPaginationPrevious,
} from '@semantic-components/ui';
import {
  SiChevronLeftIcon,
  SiChevronRightIcon,
  SiEllipsisIcon,
} from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-page-size-pagination-demo',
  imports: [
    ScPagination,
    ScPaginationList,
    ScPaginationItem,
    ScPaginationLink,
    ScPaginationPrevious,
    ScPaginationNext,
    ScPaginationEllipsis,
    ScPaginationPageSize,
    SiChevronLeftIcon,
    SiChevronRightIcon,
    SiEllipsisIcon,
  ],
  template: \`
    <div class="space-y-4">
      <nav
        sc-pagination
        #pagination="scPagination"
        [currentPage]="currentPage()"
        [pageSize]="pageSize()"
        [totalItems]="totalItems()"
        [siblingCount]="1"
        [showEdges]="true"
        [pageSizeOptions]="[10, 25, 50, 100]"
        (pageChange)="currentPage.set($event)"
        (pageSizeChange)="pageSize.set($event)"
      >
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="text-sm text-muted-foreground">Items per page:</span>
            <sc-pagination-page-size />
          </div>

          <p class="text-sm text-muted-foreground">
            Page {{ currentPage() }} of {{ pagination.totalPages() }} ({{
              totalItems()
            }}
            items total)
          </p>
        </div>

        <ul sc-pagination-list>
          <li sc-pagination-item>
            <button sc-pagination-previous>
              <svg si-chevron-left-icon class="size-4"></svg>
              <span>Previous</span>
            </button>
          </li>

          @for (page of pagination.pages(); track page.value) {
            <li sc-pagination-item>
              @if (page.type === 'ellipsis') {
                <span sc-pagination-ellipsis>
                  <svg si-ellipsis-icon class="size-4"></svg>
                  <span class="sr-only">More pages</span>
                </span>
              } @else {
                <button sc-pagination-link [page]="page.value">
                  {{ page.value }}
                </button>
              }
            </li>
          }

          <li sc-pagination-item>
            <button sc-pagination-next>
              <span>Next</span>
              <svg si-chevron-right-icon class="size-4"></svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageSizePaginationDemo {
  readonly currentPage = signal(1);
  readonly pageSize = signal(10);
  readonly totalItems = signal(250);
}`;
}
