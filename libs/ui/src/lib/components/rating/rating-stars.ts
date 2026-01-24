import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';
import { SC_RATING } from './rating';
import { ScRatingItem } from './rating-item';

@Component({
  selector: '[sc-rating-stars]',
  template: `
    @for (i of stars(); track i) {
      <span sc-rating-item [value]="i" [class]="itemClass()">
        <svg
          empty
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          [class]="starClass()"
        >
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          />
        </svg>
        <svg
          filled
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          [class]="filledStarClass()"
        >
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          />
        </svg>
      </span>
    }
  `,
  imports: [ScRatingItem],
  host: {
    'data-slot': 'rating-stars',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScRatingStars {
  private readonly rating = inject(SC_RATING);

  readonly classInput = input<string>('', { alias: 'class' });
  readonly size = input<'sm' | 'default' | 'lg'>('default');
  readonly color = input<string>('text-yellow-400');

  protected readonly stars = computed(() => {
    const max = this.rating.max();
    return Array.from({ length: max }, (_, i) => i + 1);
  });

  protected readonly itemClass = computed(() => this.classInput());

  protected readonly starClass = computed(() =>
    cn(
      this.size() === 'sm' && 'size-4',
      this.size() === 'default' && 'size-5',
      this.size() === 'lg' && 'size-6',
    ),
  );

  protected readonly filledStarClass = computed(() =>
    cn(this.starClass(), this.color()),
  );
}
