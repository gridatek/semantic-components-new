import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { FirstLastPaginationDemo } from './first-last-pagination-demo';

@Component({
  selector: 'app-first-last-pagination-demo-container',
  imports: [DemoContainer, FirstLastPaginationDemo],
  template: `
    <app-demo-container
      title="With First & Last Buttons"
      [code]="code"
      demoUrl="/demos/pagination/first-last-pagination-demo"
    >
      <app-first-last-pagination-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstLastPaginationDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScPagination,
  ScPaginationEllipsis,
  ScPaginationFirst,
  ScPaginationItem,
  ScPaginationLast,
  ScPaginationLink,
  ScPaginationList,
  ScPaginationNext,
  ScPaginationPrevious,
} from '@semantic-components/ui';

@Component({
  selector: 'app-first-last-pagination-demo',
  imports: [
    ScPagination,
    ScPaginationList,
    ScPaginationItem,
    ScPaginationLink,
    ScPaginationPrevious,
    ScPaginationNext,
    ScPaginationFirst,
    ScPaginationLast,
    ScPaginationEllipsis,
  ],
  template: \`
    <div class="space-y-4">
      <div class="flex items-center gap-4">
        <p class="text-sm text-muted-foreground">
          Page {{ currentPage() }} of {{ pagination.totalPages() }} ({{
            totalItems()
          }}
          items total)
        </p>
      </div>

      <nav
        sc-pagination
        #pagination="scPagination"
        [currentPage]="currentPage()"
        [pageSize]="pageSize()"
        [totalItems]="totalItems()"
        [siblingCount]="1"
        [showEdges]="true"
        (pageChange)="currentPage.set($event)"
      >
        <ul sc-pagination-list>
          <li sc-pagination-item>
            <button
              sc-pagination-first
              [disabled]="currentPage() === 1"
            >
              <svg class="size-4"><!-- chevrons-left icon --></svg>
              <span>First</span>
            </button>
          </li>
          <li sc-pagination-item>
            <button
              sc-pagination-previous
              [disabled]="currentPage() === 1"
            >
              <svg class="size-4"><!-- chevron-left icon --></svg>
              <span>Previous</span>
            </button>
          </li>

          @for (page of pagination.pages(); track page.value) {
            <li sc-pagination-item>
              @if (page.type === 'ellipsis') {
                <span sc-pagination-ellipsis>
                  <svg class="size-4"><!-- more-horizontal icon --></svg>
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
              <svg class="size-4"><!-- chevron-right icon --></svg>
            </button>
          </li>
          <li sc-pagination-item>
            <button
              sc-pagination-last
              [disabled]="currentPage() === pagination.totalPages()"
            >
              <span>Last</span>
              <svg class="size-4"><!-- chevrons-right icon --></svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstLastPaginationDemo {
  readonly currentPage = signal(1);
  readonly pageSize = signal(10);
  readonly totalItems = signal(100);
}`;
}
