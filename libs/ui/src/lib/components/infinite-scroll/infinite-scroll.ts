import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  Directive,
  ElementRef,
  inject,
  input,
  output,
  signal,
  ViewEncapsulation,
  contentChild,
  AfterViewInit,
} from '@angular/core';
import { cn } from '../../utils';

@Directive({
  selector: '[sc-infinite-scroll-loader]',
  host: {
    'data-slot': 'infinite-scroll-loader',
  },
})
export class ScInfiniteScrollLoader {}

@Directive({
  selector: '[sc-infinite-scroll-end]',
  host: {
    'data-slot': 'infinite-scroll-end',
  },
})
export class ScInfiniteScrollEnd {}

@Component({
  selector: 'sc-infinite-scroll',
  exportAs: 'scInfiniteScroll',
  template: `
    <div #container [class]="containerClass()" (scroll)="onScroll($event)">
      <ng-content />

      @if (loading()) {
        <div [class]="loaderContainerClass()">
          <ng-content select="[sc-infinite-scroll-loader]" />
          @if (!hasCustomLoader()) {
            <div class="flex items-center justify-center gap-2 py-4">
              <svg
                class="size-5 animate-spin text-muted-foreground"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                />
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <span class="text-sm text-muted-foreground">Loading more...</span>
            </div>
          }
        </div>
      }

      @if (hasReachedEnd() && !loading()) {
        <div [class]="endContainerClass()">
          <ng-content select="[sc-infinite-scroll-end]" />
          @if (!hasCustomEnd()) {
            <div class="py-4 text-center text-sm text-muted-foreground">
              {{ endMessage() }}
            </div>
          }
        </div>
      }
    </div>
  `,
  host: {
    'data-slot': 'infinite-scroll',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScInfiniteScroll implements AfterViewInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly elementRef = inject(ElementRef);

  readonly classInput = input<string>('', { alias: 'class' });
  readonly threshold = input<number>(100);
  readonly disabled = input<boolean>(false);
  readonly loading = input<boolean>(false);
  readonly hasReachedEnd = input<boolean>(false);
  readonly endMessage = input<string>('No more items to load');
  readonly direction = input<'down' | 'up'>('down');

  readonly loadMore = output<void>();

  private readonly customLoader = contentChild(ScInfiniteScrollLoader);
  private readonly customEnd = contentChild(ScInfiniteScrollEnd);

  protected readonly hasCustomLoader = computed(() => !!this.customLoader());
  protected readonly hasCustomEnd = computed(() => !!this.customEnd());

  private observer: IntersectionObserver | null = null;
  private sentinelEl: HTMLElement | null = null;

  protected readonly containerClass = computed(() =>
    cn('overflow-auto', this.classInput()),
  );

  protected readonly loaderContainerClass = computed(() => cn(''));

  protected readonly endContainerClass = computed(() => cn(''));

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();

    this.destroyRef.onDestroy(() => {
      this.cleanup();
    });
  }

  private setupIntersectionObserver(): void {
    // Create sentinel element
    this.sentinelEl = document.createElement('div');
    this.sentinelEl.style.height = '1px';
    this.sentinelEl.style.width = '100%';
    this.sentinelEl.setAttribute('data-sentinel', 'true');

    const container =
      this.elementRef.nativeElement.querySelector(
        '[data-slot="infinite-scroll"] > div',
      ) || this.elementRef.nativeElement;

    if (this.direction() === 'down') {
      container.appendChild(this.sentinelEl);
    } else {
      container.prepend(this.sentinelEl);
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (
          entry.isIntersecting &&
          !this.disabled() &&
          !this.loading() &&
          !this.hasReachedEnd()
        ) {
          this.loadMore.emit();
        }
      },
      {
        root: container,
        rootMargin: `${this.threshold()}px`,
        threshold: 0,
      },
    );

    this.observer.observe(this.sentinelEl);
  }

  private cleanup(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    if (this.sentinelEl) {
      this.sentinelEl.remove();
      this.sentinelEl = null;
    }
  }

  onScroll(event: Event): void {
    // Fallback scroll-based detection
    const target = event.target as HTMLElement;
    const threshold = this.threshold();

    if (this.disabled() || this.loading() || this.hasReachedEnd()) return;

    if (this.direction() === 'down') {
      const scrollBottom =
        target.scrollHeight - target.scrollTop - target.clientHeight;
      if (scrollBottom <= threshold) {
        this.loadMore.emit();
      }
    } else {
      if (target.scrollTop <= threshold) {
        this.loadMore.emit();
      }
    }
  }

  scrollToTop(): void {
    const container = this.elementRef.nativeElement.querySelector('div');
    if (container) {
      container.scrollTop = 0;
    }
  }

  scrollToBottom(): void {
    const container = this.elementRef.nativeElement.querySelector('div');
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }
}

@Component({
  selector: 'sc-virtual-scroll',
  exportAs: 'scVirtualScroll',
  template: `
    <div #viewport [class]="viewportClass()" (scroll)="onScroll()">
      <div [style.height.px]="totalHeight()" [style.position]="'relative'">
        <div [style.transform]="'translateY(' + offsetY() + 'px)'">
          @for (item of visibleItems(); track trackByFn()(item, $index)) {
            <div [style.height.px]="itemHeight()">
              <ng-content />
            </div>
          }
        </div>
      </div>
    </div>
  `,
  host: {
    'data-slot': 'virtual-scroll',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScVirtualScroll<T> {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly items = input<T[]>([]);
  readonly itemHeight = input<number>(50);
  readonly overscan = input<number>(3);
  readonly trackByFn = input<(item: T, index: number) => unknown>((_, i) => i);

  private readonly scrollTop = signal(0);
  private viewportEl: HTMLElement | null = null;

  protected readonly viewportClass = computed(() =>
    cn('overflow-auto', this.classInput()),
  );

  protected readonly totalHeight = computed(
    () => this.items().length * this.itemHeight(),
  );

  protected readonly visibleRange = computed(() => {
    const viewportHeight = this.viewportEl?.clientHeight || 400;
    const start = Math.floor(this.scrollTop() / this.itemHeight());
    const visibleCount = Math.ceil(viewportHeight / this.itemHeight());
    const overscan = this.overscan();

    return {
      start: Math.max(0, start - overscan),
      end: Math.min(this.items().length, start + visibleCount + overscan),
    };
  });

  protected readonly visibleItems = computed(() => {
    const { start, end } = this.visibleRange();
    return this.items().slice(start, end);
  });

  protected readonly offsetY = computed(() => {
    return this.visibleRange().start * this.itemHeight();
  });

  onScroll(): void {
    if (this.viewportEl) {
      this.scrollTop.set(this.viewportEl.scrollTop);
    }
  }

  scrollToIndex(index: number): void {
    if (this.viewportEl) {
      this.viewportEl.scrollTop = index * this.itemHeight();
    }
  }
}
