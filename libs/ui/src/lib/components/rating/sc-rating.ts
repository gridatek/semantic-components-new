import {
  ChangeDetectionStrategy,
  Component,
  computed,
  Directive,
  inject,
  InjectionToken,
  input,
  model,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';

// Token for rating context
export const SC_RATING = new InjectionToken<ScRating>('SC_RATING');

// ============================================================================
// Rating
// ============================================================================
@Directive({
  selector: '[sc-rating]',
  providers: [{ provide: SC_RATING, useExisting: ScRating }],
  host: {
    'data-slot': 'rating',
    role: 'radiogroup',
    '[class]': 'class()',
    '[attr.aria-label]': '"Rating"',
    '[attr.aria-valuenow]': 'value()',
    '[attr.aria-valuemin]': '0',
    '[attr.aria-valuemax]': 'max()',
  },
})
export class ScRating {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly max = input<number>(5);
  readonly value = model<number>(0);
  readonly readonly = input<boolean>(false);
  readonly disabled = input<boolean>(false);
  readonly allowHalf = input<boolean>(false);
  readonly allowClear = input<boolean>(true);

  readonly hoveredValue = signal<number | null>(null);

  protected readonly class = computed(() =>
    cn('inline-flex items-center gap-0.5', this.classInput()),
  );

  readonly displayValue = computed(() => {
    const hovered = this.hoveredValue();
    return hovered !== null ? hovered : this.value();
  });

  setHoveredValue(value: number | null): void {
    if (!this.readonly() && !this.disabled()) {
      this.hoveredValue.set(value);
    }
  }

  setValue(value: number): void {
    if (this.readonly() || this.disabled()) return;

    // Allow clearing by clicking the same value
    if (this.allowClear() && value === this.value()) {
      this.value.set(0);
    } else {
      this.value.set(value);
    }
  }

  onKeydown(event: KeyboardEvent, currentValue: number): void {
    if (this.readonly() || this.disabled()) return;

    const step = this.allowHalf() ? 0.5 : 1;
    const max = this.max();

    if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
      event.preventDefault();
      const newValue = Math.min(max, this.value() + step);
      this.value.set(newValue);
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
      event.preventDefault();
      const newValue = Math.max(0, this.value() - step);
      this.value.set(newValue);
    } else if (event.key === 'Home') {
      event.preventDefault();
      this.value.set(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      this.value.set(max);
    } else if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      this.setValue(currentValue);
    }
  }
}

// ============================================================================
// RatingItem
// ============================================================================
@Component({
  selector: '[sc-rating-item]',
  template: `
    <span class="relative">
      <!-- Empty state -->
      <ng-content select="[empty]" />

      <!-- Filled state (clipped for partial fill) -->
      @if (fillPercent() > 0) {
        <span
          class="absolute inset-0 overflow-hidden"
          [style.width.%]="fillPercent()"
        >
          <ng-content select="[filled]" />
        </span>
      }
    </span>
  `,
  host: {
    'data-slot': 'rating-item',
    role: 'radio',
    '[class]': 'class()',
    '[attr.aria-checked]': 'isSelected()',
    '[attr.aria-label]': 'value() + " star" + (value() !== 1 ? "s" : "")',
    '[attr.tabindex]': 'rating.disabled() ? -1 : 0',
    '[attr.data-state]': 'state()',
    '[attr.data-disabled]': 'rating.disabled() || null',
    '[attr.data-readonly]': 'rating.readonly() || null',
    '(click)': 'onClick($event)',
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
    '(keydown)': 'rating.onKeydown($event, value())',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScRatingItem {
  readonly rating = inject(SC_RATING);

  readonly classInput = input<string>('', { alias: 'class' });
  readonly value = input.required<number>();

  protected readonly class = computed(() =>
    cn(
      'relative cursor-pointer text-muted-foreground transition-colors',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm',
      'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
      'data-[readonly]:cursor-default',
      this.classInput(),
    ),
  );

  protected readonly isSelected = computed(
    () => this.rating.value() >= this.value(),
  );

  protected readonly state = computed(() => {
    const displayValue = this.rating.displayValue();
    const itemValue = this.value();

    if (displayValue >= itemValue) return 'full';
    if (this.rating.allowHalf() && displayValue >= itemValue - 0.5)
      return 'half';
    return 'empty';
  });

  protected readonly fillPercent = computed(() => {
    const displayValue = this.rating.displayValue();
    const itemValue = this.value();

    if (displayValue >= itemValue) return 100;
    if (displayValue >= itemValue - 1) {
      return Math.max(0, (displayValue - (itemValue - 1)) * 100);
    }
    return 0;
  });

  onClick(event: MouseEvent): void {
    if (this.rating.readonly() || this.rating.disabled()) return;

    if (this.rating.allowHalf()) {
      const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
      const x = event.clientX - rect.left;
      const isLeftHalf = x < rect.width / 2;
      this.rating.setValue(isLeftHalf ? this.value() - 0.5 : this.value());
    } else {
      this.rating.setValue(this.value());
    }
  }

  onMouseEnter(): void {
    this.rating.setHoveredValue(this.value());
  }

  onMouseLeave(): void {
    this.rating.setHoveredValue(null);
  }
}

// ============================================================================
// RatingStar (default star icon)
// ============================================================================
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

// ============================================================================
// RatingStars (convenience component with built-in stars)
// ============================================================================
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
