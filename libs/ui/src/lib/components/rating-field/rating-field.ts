import {
  computed,
  Directive,
  InjectionToken,
  input,
  model,
} from '@angular/core';
import { cn } from '../../utils';

// Token for rating field context
export const SC_RATING_FIELD = new InjectionToken<ScRatingField>(
  'SC_RATING_FIELD',
);

@Directive({
  selector: '[sc-rating-field]',
  providers: [{ provide: SC_RATING_FIELD, useExisting: ScRatingField }],
  host: {
    'data-slot': 'rating-field',
    role: 'group',
    '[class]': 'class()',
    '[attr.aria-label]': 'label() || null',
    '[attr.aria-labelledby]': 'ariaLabelledby() || null',
    '[attr.data-disabled]': 'disabled() || null',
    '[attr.data-readonly]': 'readonly() || null',
  },
})
export class ScRatingField {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly max = input<number>(5);
  readonly value = model<number>(0);
  readonly readonly = input<boolean>(false);
  readonly disabled = input<boolean>(false);
  readonly allowHalf = input<boolean>(false);
  readonly allowClear = input<boolean>(true);
  readonly label = input<string>('');
  readonly ariaLabelledby = input<string>('');

  protected readonly class = computed(() =>
    cn('inline-flex items-center', this.classInput()),
  );

  setValue(value: number): void {
    if (this.readonly() || this.disabled()) return;

    // Validate value is within range
    const max = this.max();
    const clampedValue = Math.max(0, Math.min(max, value));

    // Allow clearing by clicking the same value
    if (this.allowClear() && clampedValue === this.value()) {
      this.value.set(0);
    } else {
      this.value.set(clampedValue);
    }
  }
}
