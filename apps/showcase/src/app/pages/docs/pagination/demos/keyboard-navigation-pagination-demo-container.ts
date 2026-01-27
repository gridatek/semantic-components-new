import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { KeyboardNavigationPaginationDemo } from './keyboard-navigation-pagination-demo';

@Component({
  selector: 'app-keyboard-navigation-pagination-demo-container',
  imports: [DemoContainer, KeyboardNavigationPaginationDemo],
  template: `
    <app-demo-container title="Keyboard Navigation" [code]="code">
      <app-keyboard-navigation-pagination-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KeyboardNavigationPaginationDemoContainer {
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
  ScPaginationPageSize,
  ScPaginationPrevious,
} from '@semantic-components/ui';

@Component({
  selector: 'app-keyboard-navigation-pagination-demo',
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
    ScPaginationPageSize,
  ],
  template: \`
    <div class="space-y-6">
      <div class="rounded-lg border border-border bg-muted/50 p-4">
        <h3 class="mb-2 font-semibold">Keyboard Navigation</h3>
        <ul class="space-y-1 text-sm text-muted-foreground">
          <li><kbd class="rounded bg-background px-1.5 py-0.5 font-mono text-xs">Tab</kbd> - Move between controls</li>
          <li><kbd class="rounded bg-background px-1.5 py-0.5 font-mono text-xs">Enter</kbd> / <kbd class="rounded bg-background px-1.5 py-0.5 font-mono text-xs">Space</kbd> - Activate button</li>
          <li><kbd class="rounded bg-background px-1.5 py-0.5 font-mono text-xs">↑</kbd> <kbd class="rounded bg-background px-1.5 py-0.5 font-mono text-xs">↓</kbd> - Navigate page size options</li>
        </ul>
      </div>

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
        <div class="mb-4 flex items-center justify-between">
          <label class="flex items-center gap-2">
            <span class="text-sm text-muted-foreground">Items per page:</span>
            <sc-pagination-page-size />
          </label>

          <p class="text-sm text-muted-foreground">
            Page {{ currentPage() }} of {{ pagination.totalPages() }} ({{
              totalItems()
            }}
            items total)
          </p>
        </div>

        <ul sc-pagination-list>
          <li sc-pagination-item>
            <button
              sc-pagination-first
              [disabled]="currentPage() === 1"
              aria-label="Go to first page"
            >
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
                <path d="m11 17-5-5 5-5" />
                <path d="m18 17-5-5 5-5" />
              </svg>
              <span>First</span>
            </button>
          </li>
          <li sc-pagination-item>
            <button
              sc-pagination-previous
              [disabled]="currentPage() === 1"
              aria-label="Go to previous page"
            >
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
                <span sc-pagination-ellipsis aria-hidden="true">
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
                  [attr.aria-label]="'Go to page ' + page.value"
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
              aria-label="Go to next page"
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
          <li sc-pagination-item>
            <button
              sc-pagination-last
              [disabled]="currentPage() === pagination.totalPages()"
              aria-label="Go to last page"
            >
              <span>Last</span>
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
                <path d="m13 17 5-5-5-5" />
                <path d="m6 17 5-5-5-5" />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KeyboardNavigationPaginationDemo {
  readonly currentPage = signal(1);
  readonly pageSize = signal(10);
  readonly totalItems = signal(250);
}`;
}
