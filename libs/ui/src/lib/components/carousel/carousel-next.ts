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
  selector: 'button[sc-carousel-next]',
  template: `
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
    <span class="sr-only">Next slide</span>
  `,
  host: {
    'data-slot': 'carousel-next',
    type: 'button',
    '[class]': 'class()',
    '[disabled]': '!carousel.canScrollNext()',
    '(click)': 'carousel.scrollNext()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCarouselNext {
  readonly carousel = inject(ScCarousel);

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => {
    const isHorizontal = this.carousel.orientation() === 'horizontal';
    return cn(
      'absolute size-8 rounded-full',
      'inline-flex items-center justify-center',
      'border border-input bg-background',
      'hover:bg-accent hover:text-accent-foreground',
      'disabled:pointer-events-none disabled:opacity-50',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      isHorizontal
        ? '-right-12 top-1/2 -translate-y-1/2'
        : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
      this.classInput(),
    );
  });
}
