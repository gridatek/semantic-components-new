import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';

@Component({
  selector: '[sc-rating-star]',
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      [class]="iconClass()"
    >
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      />
    </svg>
  `,
  host: {
    'data-slot': 'rating-star',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScRatingStar {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly size = input<'sm' | 'default' | 'lg'>('default');

  protected readonly iconClass = computed(() =>
    cn(
      this.size() === 'sm' && 'size-4',
      this.size() === 'default' && 'size-5',
      this.size() === 'lg' && 'size-6',
      this.classInput(),
    ),
  );
}
