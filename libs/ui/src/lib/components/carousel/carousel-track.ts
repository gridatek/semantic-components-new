import {
  computed,
  Component,
  ElementRef,
  inject,
  input,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { cn } from '../../utils';
import { ScCarousel } from './carousel';

@Component({
  selector: 'div[sc-carousel-track]',
  template: `
    <div [class]="containerClass()">
      <ng-content />
    </div>
  `,
  host: {
    'data-slot': 'carousel-content',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCarouselTrack {
  private readonly carousel = inject(ScCarousel);
  private readonly elementRef = inject(ElementRef<HTMLElement>);

  readonly classInput = input<string>('', { alias: 'class' });

  readonly viewportElement = computed(() => this.elementRef.nativeElement);

  protected readonly class = computed(() => cn('overflow-hidden'));

  protected readonly containerClass = computed(() => {
    const isHorizontal = this.carousel.orientation() === 'horizontal';
    return cn(
      'flex',
      isHorizontal ? '-ml-4' : '-mt-4 flex-col',
      this.classInput(),
    );
  });
}
