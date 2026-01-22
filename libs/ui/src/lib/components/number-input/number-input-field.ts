import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';
import { SC_NUMBER_INPUT } from './number-input';

@Component({
  selector: 'input[sc-number-input-field]',
  template: ``,
  host: {
    'data-slot': 'number-input-field',
    type: 'text',
    inputmode: 'decimal',
    '[class]': 'class()',
    '[value]': 'displayValue()',
    '[disabled]': 'numberInput.disabled()',
    '[attr.aria-valuemin]': 'numberInput.min()',
    '[attr.aria-valuemax]': 'numberInput.max()',
    '[attr.aria-valuenow]': 'numberInput.value()',
    '(input)': 'onInput($event)',
    '(blur)': 'onBlur()',
    '(keydown)': 'onKeydown($event)',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScNumberInputField {
  readonly numberInput = inject(SC_NUMBER_INPUT);

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'h-9 w-full bg-transparent px-3 py-1 text-sm text-center',
      'focus:outline-none',
      'disabled:cursor-not-allowed',
      '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
      this.classInput(),
    ),
  );

  protected readonly displayValue = computed(() => {
    const val = this.numberInput.value();
    return val === null ? '' : String(val);
  });

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value.trim();

    if (value === '' || value === '-') {
      return; // Allow typing negative numbers
    }

    const parsed = parseFloat(value);
    if (!isNaN(parsed)) {
      // Don't clamp while typing, just update
      this.numberInput.value.set(parsed);
    }
  }

  onBlur(): void {
    // On blur, clamp to min/max and handle empty
    const val = this.numberInput.value();
    if (val === null) {
      if (!this.numberInput.allowEmpty()) {
        this.numberInput.setValue(this.numberInput.min() ?? 0);
      }
    } else {
      this.numberInput.setValue(val);
    }
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.numberInput.increment();
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.numberInput.decrement();
    }
  }
}
