import {
  computed,
  Directive,
  InjectionToken,
  input,
  model,
  signal,
} from '@angular/core';
import { cn } from '../../utils';

// Token for rating context
export const SC_RATING = new InjectionToken<ScRating>('SC_RATING');

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
