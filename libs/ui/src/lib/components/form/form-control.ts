import { Directive, inject } from '@angular/core';
import { SC_FORM_FIELD } from './form-field';

@Directive({
  selector: '[sc-form-control]',
  host: {
    'data-slot': 'form-control',
    '[attr.aria-invalid]': 'formField?.showError || null',
    '[attr.aria-describedby]': 'describedBy',
  },
})
export class ScFormControl {
  readonly formField = inject(SC_FORM_FIELD, { optional: true });

  get describedBy(): string | null {
    if (!this.formField) return null;
    const name = this.formField.name();
    const parts: string[] = [];
    parts.push(`${name}-description`);
    if (this.formField.showError) {
      parts.push(`${name}-message`);
    }
    return parts.join(' ');
  }
}
