import { computed, Directive, inject } from '@angular/core';
import { SC_FORM_FIELD } from './form-field';

@Directive({
  selector: '[sc-form-control]',
  host: {
    'data-slot': 'form-control',
    '[attr.aria-invalid]': 'ariaInvalid()',
    '[attr.aria-describedby]': 'describedBy()',
  },
})
export class ScFormControl {
  readonly formField = inject(SC_FORM_FIELD, { optional: true });

  protected readonly ariaInvalid = computed(() =>
    this.formField?.showError() ? true : null,
  );

  protected readonly describedBy = computed(() => {
    if (!this.formField) return null;
    const name = this.formField.name();
    const parts: string[] = [];
    parts.push(`${name}-description`);
    if (this.formField.showError()) {
      parts.push(`${name}-message`);
    }
    return parts.join(' ');
  });
}
