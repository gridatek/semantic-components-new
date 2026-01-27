import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { PageSizePaginationDemo } from './page-size-pagination-demo';

@Component({
  selector: 'app-page-size-pagination-demo-container',
  imports: [DemoContainer, PageSizePaginationDemo],
  template: `
    <app-demo-container title="Page Size Selector" [code]="code">
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
            <button sc-pagination-previous [disabled]="currentPage() === 1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="size-4"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              <span>Previous</span>
            </button>
          </li>

          @for (page of pagination.pages(); track page.value) {
            <li sc-pagination-item>
              @if (page.type === 'ellipsis') {
                <span sc-pagination-ellipsis>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="size-4"
                  >
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="19" cy="12" r="1" />
                    <circle cx="5" cy="12" r="1" />
                  </svg>
                  <span class="sr-only">More pages</span>
                </span>
              } @else {
                <button
                  sc-pagination-link
                  [page]="page.value"
                  [isActive]="page.value === currentPage()"
                >
                  {{ page.value }}
                </button>
              }
            </li>
          }

          <li sc-pagination-item>
            <button
              sc-pagination-next
              [disabled]="currentPage() === pagination.totalPages()"
            >
              <span>Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="size-4"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
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
