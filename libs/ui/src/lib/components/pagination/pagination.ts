import { computed, Directive, input, output } from '@angular/core';
import { cn } from '../../utils';

export type ScPaginationPageData =
  | { type: 'page'; value: number }
  | { type: 'ellipsis'; value: string };

@Directive({
  selector: 'nav[sc-pagination]',
  exportAs: 'scPagination',
  host: {
    'data-slot': 'pagination',
    role: 'navigation',
    '[attr.aria-label]': '"pagination"',
    '[class]': 'class()',
  },
})
export class ScPagination {
  readonly classInput = input<string>('', { alias: 'class' });

  // Smart pagination inputs
  readonly currentPage = input<number>(1);
  readonly pageSize = input<number>(10);
  readonly totalItems = input<number>(0);
  readonly siblingCount = input<number>(1); // Number of pages to show on each side of current page
  readonly showEdges = input<boolean>(true); // Show first and last pages

  // Output event when page changes
  readonly pageChange = output<number>();

  protected readonly class = computed(() =>
    cn('mx-auto flex w-full justify-center', this.classInput()),
  );

  // Computed total pages
  readonly totalPages = computed(() => {
    const total = this.totalItems();
    const size = this.pageSize();
    return Math.ceil(total / size);
  });

  // Computed pages array for rendering
  readonly pages = computed(() => {
    const current = this.currentPage();
    const total = this.totalPages();
    const siblings = this.siblingCount();
    const edges = this.showEdges();

    return this.generatePageNumbers(current, total, siblings, edges);
  });

  /**
   * Trigger a page change. Called internally by child components.
   * @param page The target page number
   */
  goToPage(page: number): void {
    const total = this.totalPages();
    if (page >= 1 && page <= total && page !== this.currentPage()) {
      this.pageChange.emit(page);
    }
  }

  private generatePageNumbers(
    currentPage: number,
    totalPages: number,
    siblingCount: number,
    showEdges: boolean,
  ): ScPaginationPageData[] {
    // If total pages is less than or equal to 7, show all pages
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => ({
        type: 'page' as const,
        value: i + 1,
      }));
    }

    const pages: ScPaginationPageData[] = [];

    // Always show first page if edges are enabled
    if (showEdges) {
      pages.push({ type: 'page', value: 1 });
    }

    // Calculate the range of pages to show around current page
    const leftSibling = Math.max(currentPage - siblingCount, showEdges ? 2 : 1);
    const rightSibling = Math.min(
      currentPage + siblingCount,
      showEdges ? totalPages - 1 : totalPages,
    );

    // Add ellipsis after first page if needed
    if (showEdges && leftSibling > 2) {
      pages.push({ type: 'ellipsis', value: 'ellipsis-left' });
    }

    // Add pages around current page
    for (let i = leftSibling; i <= rightSibling; i++) {
      pages.push({ type: 'page', value: i });
    }

    // Add ellipsis before last page if needed
    if (showEdges && rightSibling < totalPages - 1) {
      pages.push({ type: 'ellipsis', value: 'ellipsis-right' });
    }

    // Always show last page if edges are enabled
    if (showEdges) {
      pages.push({ type: 'page', value: totalPages });
    }

    return pages;
  }
}
