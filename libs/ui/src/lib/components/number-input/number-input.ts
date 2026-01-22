import {
  computed,
  Directive,
  InjectionToken,
  input,
  model,
} from '@angular/core';
import { cn } from '../../utils';

// Token for number input context
export const SC_NUMBER_INPUT = new InjectionToken<ScNumberInput>(
  'SC_NUMBER_INPUT',
);

@Directive({
  selector: '[sc-number-input]',
  exportAs: 'scNumberInput',
  providers: [{ provide: SC_NUMBER_INPUT, useExisting: ScNumberInput }],
  host: {
    'data-slot': 'number-input',
    '[class]': 'class()',
    '[attr.data-disabled]': 'disabled() || null',
  },
})
export class ScNumberInput {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly value = model<number | null>(null);
  readonly min = input<number | null>(null);
  readonly max = input<number | null>(null);
  readonly step = input<number>(1);
  readonly disabled = input<boolean>(false);
  readonly allowEmpty = input<boolean>(true);

  protected readonly class = computed(() =>
    cn(
      'inline-flex items-center rounded-md border border-input bg-background',
      'focus-within:ring-1 focus-within:ring-ring',
      'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
      this.classInput(),
    ),
  );

  readonly canIncrement = computed(() => {
    if (this.disabled()) return false;
    const val = this.value();
    const max = this.max();
    if (val === null) return true;
    if (max === null) return true;
    return val < max;
  });

  readonly canDecrement = computed(() => {
    if (this.disabled()) return false;
    const val = this.value();
    const min = this.min();
    if (val === null) return true;
    if (min === null) return true;
    return val > min;
  });

  increment(): void {
    if (!this.canIncrement()) return;

    const current = this.value() ?? 0;
    const step = this.step();
    const max = this.max();
    let newValue = current + step;

    if (max !== null && newValue > max) {
      newValue = max;
    }

    this.value.set(this.roundToStep(newValue));
  }

  decrement(): void {
    if (!this.canDecrement()) return;

    const current = this.value() ?? 0;
    const step = this.step();
    const min = this.min();
    let newValue = current - step;

    if (min !== null && newValue < min) {
      newValue = min;
    }

    this.value.set(this.roundToStep(newValue));
  }

  setValue(value: number | null): void {
    if (this.disabled()) return;

    if (value === null) {
      if (this.allowEmpty()) {
        this.value.set(null);
      }
      return;
    }

    const min = this.min();
    const max = this.max();

    let clamped = value;
    if (min !== null && clamped < min) clamped = min;
    if (max !== null && clamped > max) clamped = max;

    this.value.set(this.roundToStep(clamped));
  }

  private roundToStep(value: number): number {
    const step = this.step();
    const decimals = this.getDecimalPlaces(step);
    return Number(value.toFixed(decimals));
  }

  private getDecimalPlaces(num: number): number {
    const str = num.toString();
    const dotIndex = str.indexOf('.');
    return dotIndex === -1 ? 0 : str.length - dotIndex - 1;
  }
}
