import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  input,
} from '@angular/core';
import { cn } from '../../utils';
import { ScPagination } from './pagination';

@Component({
  selector: 'a[sc-pagination-next], button[sc-pagination-next]',
  host: {
    'data-slot': 'pagination-next',
    '[class]': 'class()',
    '[attr.aria-label]': '"Go to next page"',
    '[attr.aria-disabled]': 'disabled() || null',
    '[attr.href]': 'isAnchor() ? "#" : null',
    '(click)': 'onClick($event)',
  },
  template: `
    <ng-content />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPaginationNext {
  private readonly pagination = inject(ScPagination, { optional: true });
  private readonly elementRef = inject(ElementRef<HTMLElement>);

  readonly classInput = input<string>('', { alias: 'class' });
  readonly disabledInput = input<boolean, unknown>(false, {
    alias: 'disabled',
    transform: booleanAttribute,
  });

  protected readonly disabled = computed(() => {
    if (this.disabledInput()) return true;
    if (this.pagination) {
      return this.pagination.currentPage() === this.pagination.totalPages();
    }
    return false;
  });

  protected readonly isAnchor = computed(
    () => this.elementRef.nativeElement.tagName === 'A',
  );

  protected readonly class = computed(() =>
    cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'hover:bg-accent hover:text-accent-foreground',
      'aria-disabled:pointer-events-none aria-disabled:opacity-50',
      '[&_svg]:size-4',
      'gap-1 pr-2.5 h-10 px-4 py-2',
      this.classInput(),
    ),
  );

  onClick(event: Event): void {
    event.preventDefault();

    if (this.disabled()) {
      return;
    }

    if (this.pagination) {
      const nextPage = this.pagination.currentPage() + 1;
      this.pagination.goToPage(nextPage);
    }
  }
}
