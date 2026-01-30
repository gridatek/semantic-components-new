import { computed, Directive, ElementRef, inject, input } from '@angular/core';
import { cn } from '../../utils';
import { ScCarousel } from './carousel';

@Directive({
  selector: 'div[sc-carousel-track]',
  host: {
    'data-slot': 'carousel-track',
    '[class]': 'class()',
    '(scroll)': 'onScroll()',
  },
})
export class ScCarouselTrack {
  private readonly carousel = inject(ScCarousel);
  private readonly elementRef = inject(ElementRef<HTMLElement>);

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => {
    const isHorizontal = this.carousel.orientation() === 'horizontal';
    return cn(
      'flex',
      isHorizontal ? '-ml-4 flex-row' : '-mt-4 flex-col',
      'overflow-hidden scroll-smooth snap-mandatory',
      isHorizontal ? 'snap-x' : 'snap-y',
      this.classInput(),
    );
  });

  scrollPrev(): void {
    const el = this.elementRef.nativeElement;
    const isHorizontal = this.carousel.orientation() === 'horizontal';
    const scrollAmount = isHorizontal ? el.clientWidth : el.clientHeight;

    if (isHorizontal) {
      el.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      el.scrollBy({ top: -scrollAmount, behavior: 'smooth' });
    }
  }

  scrollNext(): void {
    const el = this.elementRef.nativeElement;
    const isHorizontal = this.carousel.orientation() === 'horizontal';
    const scrollAmount = isHorizontal ? el.clientWidth : el.clientHeight;

    if (isHorizontal) {
      el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else {
      el.scrollBy({ top: scrollAmount, behavior: 'smooth' });
    }
  }

  protected onScroll(): void {
    const el = this.elementRef.nativeElement;
    const isHorizontal = this.carousel.orientation() === 'horizontal';

    if (isHorizontal) {
      const canPrev = el.scrollLeft > 0;
      const canNext = el.scrollLeft < el.scrollWidth - el.clientWidth - 1;
      this.carousel.updateScrollState(canPrev, canNext);
    } else {
      const canPrev = el.scrollTop > 0;
      const canNext = el.scrollTop < el.scrollHeight - el.clientHeight - 1;
      this.carousel.updateScrollState(canPrev, canNext);
    }
  }
}
