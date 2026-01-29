import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScPagination,
  ScPaginationList,
  ScPaginationEllipsis,
  ScPaginationItem,
  ScPaginationLink,
  ScPaginationNext,
  ScPaginationPrevious,
} from '@semantic-components/ui';
import {
  SiChevronLeftIcon,
  SiChevronRightIcon,
  SiEllipsisIcon,
} from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-many-pages-pagination-demo',
  imports: [
    ScPagination,
    ScPaginationList,
    ScPaginationEllipsis,
    ScPaginationItem,
    ScPaginationLink,
    ScPaginationNext,
    ScPaginationPrevious,
    SiChevronLeftIcon,
    SiChevronRightIcon,
    SiEllipsisIcon,
  ],
  template: `
    <nav
      sc-pagination
      #pagination="scPagination"
      [currentPage]="currentPage()"
      [totalItems]="200"
      [pageSize]="10"
      (pageChange)="currentPage.set($event)"
    >
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
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManyPagesPaginationDemo {
  readonly currentPage = signal(5);
}
