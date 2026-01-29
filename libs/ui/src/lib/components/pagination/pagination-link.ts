import {
  booleanAttribute,
  computed,
  Directive,
  ElementRef,
  inject,
  input,
} from '@angular/core';
import { cn } from '../../utils';
import { ScPagination } from './pagination';

@Directive({
  selector: 'a[sc-pagination-link], button[sc-pagination-link]',
  host: {
    'data-slot': 'pagination-link',
    '[class]': 'class()',
    '[attr.aria-current]': 'isActive() ? "page" : null',
    '[attr.aria-disabled]': 'disabled() || null',
    '[attr.href]': 'isAnchor() ? "#" : null',
    '(click)': 'onClick($event)',
  },
})
export class ScPaginationLink {
  private readonly pagination = inject(ScPagination, { optional: true });
  private readonly elementRef = inject(ElementRef<HTMLElement>);

  readonly classInput = input<string>('', { alias: 'class' });
  readonly page = input<number>();
  readonly size = input<'default' | 'sm' | 'lg' | 'icon'>('icon');
  readonly disabled = input<boolean, unknown>(false, {
    transform: booleanAttribute,
  });

  protected readonly isAnchor = computed(
    () => this.elementRef.nativeElement.tagName === 'A',
  );

  protected readonly isActive = computed(() => {
    const pageNum = this.page();
    if (pageNum === undefined || !this.pagination) return false;
    return pageNum === this.pagination.currentPage();
  });

  protected readonly class = computed(() => {
    const sizeClasses = {
      default: 'h-10 px-4 py-2',
      sm: 'h-9 px-3',
      lg: 'h-11 px-8',
      icon: 'size-10',
    };

    return cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'hover:bg-accent hover:text-accent-foreground',
      'aria-disabled:pointer-events-none aria-disabled:opacity-50',
      '[&_svg]:size-4',
      this.isActive() && 'border border-input bg-background',
      sizeClasses[this.size()],
      this.classInput(),
    );
  });

  onClick(event: Event): void {
    event.preventDefault();

    if (this.disabled()) {
      return;
    }

    const pageNum = this.page();
    if (pageNum !== undefined && this.pagination) {
      this.pagination.goToPage(pageNum);
    }
  }
}
