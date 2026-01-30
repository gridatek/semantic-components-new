import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  input,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';
import { ScCarouselTrack } from './carousel-track';

export type CarouselOrientation = 'horizontal' | 'vertical';

export interface CarouselOptions {
  align?: 'start' | 'center' | 'end';
  loop?: boolean;
}

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
export class ScCarousel {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly orientation = input<CarouselOrientation>('horizontal');
  readonly opts = input<CarouselOptions>({});

  private readonly content = contentChild(ScCarouselTrack);

  readonly canScrollPrev = signal(false);
  readonly canScrollNext = signal(true);

  protected readonly class = computed(() => cn('relative', this.classInput()));

  scrollPrev(): void {
    const content = this.content();
    if (!content) return;
    content.scrollPrev();
  }

  scrollNext(): void {
    const content = this.content();
    if (!content) return;
    content.scrollNext();
  }

  updateScrollState(canPrev: boolean, canNext: boolean): void {
    this.canScrollPrev.set(canPrev);
    this.canScrollNext.set(canNext);
  }

  protected onKeyDown(event: KeyboardEvent): void {
    const isHorizontal = this.orientation() === 'horizontal';

    if (isHorizontal && event.key === 'ArrowLeft') {
      event.preventDefault();
      this.scrollPrev();
    } else if (isHorizontal && event.key === 'ArrowRight') {
      event.preventDefault();
      this.scrollNext();
    } else if (!isHorizontal && event.key === 'ArrowUp') {
      event.preventDefault();
      this.scrollPrev();
    } else if (!isHorizontal && event.key === 'ArrowDown') {
      event.preventDefault();
      this.scrollNext();
    }
  }
}
