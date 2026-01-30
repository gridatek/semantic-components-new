import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { cn } from '../../utils';
import { ScCarousel } from './carousel';

@Component({
  selector: 'button[sc-carousel-previous]',
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'carousel-previous',
    type: 'button',
    '[class]': 'class()',
    '[disabled]': '!carousel.canScrollPrev()',
    '(click)': 'carousel.scrollPrev()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCarouselPrevious {
  readonly carousel = inject(ScCarousel);

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => {
    const isHorizontal = this.carousel.orientation() === 'horizontal';
    return cn(
      'rounded-full absolute touch-manipulation',
      'size-8 inline-flex items-center justify-center',
      'border border-input bg-background',
      'hover:bg-accent hover:text-accent-foreground',
      'disabled:pointer-events-none disabled:opacity-50',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      isHorizontal
        ? 'top-1/2 -left-12 -translate-y-1/2'
        : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
      this.classInput(),
    );
  });
}
