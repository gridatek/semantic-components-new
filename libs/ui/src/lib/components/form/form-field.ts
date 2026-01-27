import { computed, Directive, InjectionToken, input } from '@angular/core';

/**
 * Represents the field state from Angular Signal Forms.
 * This interface matches the FieldState returned by calling a form field.
 */
export interface SignalFormFieldState {
  value: () => unknown;
  invalid: () => boolean;
  valid: () => boolean;
  touched: () => boolean;
  dirty: () => boolean;
  errors: () => Record<string, unknown> | null;
}

/**
 * Represents a Signal Forms field that can be called to get its state.
 */
export type SignalFormField = (() => SignalFormFieldState) & {
  [key: string]: unknown;
};

// Token for sharing form field state
export const SC_FORM_FIELD = new InjectionToken<ScFormField>('SC_FORM_FIELD');

@Directive({
  selector: '[sc-form-field]',
  providers: [{ provide: SC_FORM_FIELD, useExisting: ScFormField }],
  host: {
    'data-slot': 'form-field',
  },
})
export class ScFormField {
  readonly name = input.required<string>();
  readonly field = input<SignalFormField>();

  readonly invalid = computed(() => this.field?.()?.().invalid() ?? false);
  readonly touched = computed(() => this.field?.()?.().touched() ?? false);
  readonly dirty = computed(() => this.field?.()?.().dirty() ?? false);
  readonly errors = computed(() => this.field?.()?.().errors() ?? null);

  readonly showError = computed(
    () => this.invalid() && (this.touched() || this.dirty()),
  );

  readonly errorMessage = computed(() => {
    const errors = this.errors();
    if (!errors) return '';

    if (errors['required']) return 'This field is required';
    if (errors['email']) return 'Please enter a valid email';
    if (errors['minLength']) {
      const minLengthError = errors['minLength'] as { min: number };
      return `Minimum length is ${minLengthError.min} characters`;
    }
    if (errors['maxLength']) {
      const maxLengthError = errors['maxLength'] as { max: number };
      return `Maximum length is ${maxLengthError.max} characters`;
    }
    if (errors['min']) {
      const minError = errors['min'] as { min: number };
      return `Minimum value is ${minError.min}`;
    }
    if (errors['max']) {
      const maxError = errors['max'] as { max: number };
      return `Maximum value is ${maxError.max}`;
    }
    if (errors['pattern']) return 'Invalid format';

    // Return first custom error message if available
    const firstError = Object.keys(errors)[0];
    if (typeof errors[firstError] === 'string') {
      return errors[firstError] as string;
    }

    return 'Invalid value';
  });
}
