import {
  ChangeDetectionStrategy,
  Component,
  computed,
  Directive,
  ElementRef,
  inject,
  InjectionToken,
  input,
  model,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';

// Token for number input context
export const SC_NUMBER_INPUT = new InjectionToken<ScNumberInput>(
  'SC_NUMBER_INPUT',
);

// ============================================================================
// NumberInput
// ============================================================================
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

// ============================================================================
// NumberInputField
// ============================================================================
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

// ============================================================================
// NumberInputIncrement
// ============================================================================
@Component({
  selector: 'button[sc-number-input-increment]',
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      class="size-4"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  `,
  host: {
    'data-slot': 'number-input-increment',
    type: 'button',
    '[class]': 'class()',
    '[disabled]': '!numberInput.canIncrement()',
    '[attr.aria-label]': '"Increase value"',
    '(click)': 'onClick()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScNumberInputIncrement {
  readonly numberInput = inject(SC_NUMBER_INPUT);

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'inline-flex size-9 items-center justify-center border-l border-input',
      'hover:bg-accent hover:text-accent-foreground',
      'disabled:pointer-events-none disabled:opacity-50',
      'focus:outline-none focus-visible:ring-1 focus-visible:ring-ring',
      'rounded-r-md',
      this.classInput(),
    ),
  );

  onClick(): void {
    this.numberInput.increment();
  }
}

// ============================================================================
// NumberInputDecrement
// ============================================================================
@Component({
  selector: 'button[sc-number-input-decrement]',
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      class="size-4"
    >
      <path d="M5 12h14" />
    </svg>
  `,
  host: {
    'data-slot': 'number-input-decrement',
    type: 'button',
    '[class]': 'class()',
    '[disabled]': '!numberInput.canDecrement()',
    '[attr.aria-label]': '"Decrease value"',
    '(click)': 'onClick()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScNumberInputDecrement {
  readonly numberInput = inject(SC_NUMBER_INPUT);

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'inline-flex size-9 items-center justify-center border-r border-input',
      'hover:bg-accent hover:text-accent-foreground',
      'disabled:pointer-events-none disabled:opacity-50',
      'focus:outline-none focus-visible:ring-1 focus-visible:ring-ring',
      'rounded-l-md',
      this.classInput(),
    ),
  );

  onClick(): void {
    this.numberInput.decrement();
  }
}

// ============================================================================
// NumberInputStepper (vertical stepper variant)
// ============================================================================
@Component({
  selector: '[sc-number-input-stepper]',
  template: `
    <button
      type="button"
      class="flex h-1/2 items-center justify-center hover:bg-accent disabled:pointer-events-none disabled:opacity-50"
      [disabled]="!numberInput.canIncrement()"
      (click)="numberInput.increment()"
      aria-label="Increase value"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        class="size-3"
      >
        <path d="m18 15-6-6-6 6" />
      </svg>
    </button>
    <button
      type="button"
      class="flex h-1/2 items-center justify-center border-t border-input hover:bg-accent disabled:pointer-events-none disabled:opacity-50"
      [disabled]="!numberInput.canDecrement()"
      (click)="numberInput.decrement()"
      aria-label="Decrease value"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        class="size-3"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </button>
  `,
  host: {
    'data-slot': 'number-input-stepper',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScNumberInputStepper {
  readonly numberInput = inject(SC_NUMBER_INPUT);

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'flex flex-col border-l border-input w-6 rounded-r-md overflow-hidden',
      this.classInput(),
    ),
  );
}
