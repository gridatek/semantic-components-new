import { Directive, inject, InjectionToken, input } from '@angular/core';
import { AbstractControl, FormGroupDirective, NgForm } from '@angular/forms';

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

  private readonly form = inject(FormGroupDirective, { optional: true });
  private readonly ngForm = inject(NgForm, { optional: true });

  get control(): AbstractControl | null {
    const formDir = this.form || this.ngForm;
    if (!formDir) return null;
    return formDir.form.get(this.name()) ?? null;
  }

  get invalid(): boolean {
    return this.control?.invalid ?? false;
  }

  get touched(): boolean {
    return this.control?.touched ?? false;
  }

  get dirty(): boolean {
    return this.control?.dirty ?? false;
  }

  get showError(): boolean {
    return this.invalid && (this.touched || this.dirty);
  }

  get errorMessage(): string {
    const control = this.control;
    if (!control || !control.errors) return '';

    const errors = control.errors;
    if (errors['required']) return 'This field is required';
    if (errors['email']) return 'Please enter a valid email';
    if (errors['minlength']) {
      return `Minimum length is ${errors['minlength'].requiredLength} characters`;
    }
    if (errors['maxlength']) {
      return `Maximum length is ${errors['maxlength'].requiredLength} characters`;
    }
    if (errors['min']) return `Minimum value is ${errors['min'].min}`;
    if (errors['max']) return `Maximum value is ${errors['max'].max}`;
    if (errors['pattern']) return 'Invalid format';

    // Return first custom error message if available
    const firstError = Object.keys(errors)[0];
    if (typeof errors[firstError] === 'string') {
      return errors[firstError];
    }

    return 'Invalid value';
  }
}
