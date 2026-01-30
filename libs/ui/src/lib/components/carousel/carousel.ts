import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  input,
  signal,
  ViewEncapsulation,
  output,
  AfterViewInit,
  DestroyRef,
  inject,
} from '@angular/core';
import EmblaCarousel, {
  type EmblaCarouselType,
  EmblaOptionsType,
  EmblaPluginType,
} from 'embla-carousel';
import { cn } from '../../utils';
import { ScCarouselViewport } from './carousel-viewport';

export type CarouselOrientation = 'horizontal' | 'vertical';
export type CarouselApi = EmblaCarouselType;
export type CarouselOptions = EmblaOptionsType;
export type CarouselPlugin = EmblaPluginType;

@Component({
  selector: 'div[sc-carousel]',
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'carousel',
    role: 'region',
    'aria-roledescription': 'carousel',
    '[class]': 'class()',
    '(keydown)': 'onKeyDown($event)',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCarousel implements AfterViewInit {
  private readonly destroyRef = inject(DestroyRef);

  readonly classInput = input<string>('', { alias: 'class' });
  readonly orientation = input<CarouselOrientation>('horizontal');
  readonly opts = input<CarouselOptions>({});
  readonly plugins = input<CarouselPlugin[]>([]);

  readonly setApi = output<CarouselApi>();

  private readonly viewport = contentChild(ScCarouselViewport);

  readonly canScrollPrev = signal(false);
  readonly canScrollNext = signal(true);

  private api: CarouselApi | null = null;

  protected readonly class = computed(() => cn('relative', this.classInput()));

  ngAfterViewInit(): void {
    const viewportEl = this.viewport()?.viewportElement();
    if (!viewportEl) return;

    const options = {
      ...this.opts(),
      axis: (this.orientation() === 'horizontal' ? 'x' : 'y') as 'x' | 'y',
    };

    this.api = EmblaCarousel(viewportEl, options, this.plugins());

    this.setApi.emit(this.api);
    this.updateScrollState();

    this.api.on('select', () => this.updateScrollState());
    this.api.on('reInit', () => this.updateScrollState());

    this.destroyRef.onDestroy(() => {
      this.api?.destroy();
    });
  }

  scrollPrev(): void {
    this.api?.scrollPrev();
  }

  scrollNext(): void {
    this.api?.scrollNext();
  }

  private updateScrollState(): void {
    if (!this.api) return;
    this.canScrollPrev.set(this.api.canScrollPrev());
    this.canScrollNext.set(this.api.canScrollNext());
  }

  protected onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.scrollPrev();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.scrollNext();
    }
  }
}
