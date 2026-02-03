import { Directive, inject } from '@angular/core';
import { SC_FIELD_TOKEN } from './field';

@Directive({
  selector:
    'input[sc-field-control], textarea[sc-field-control], select[sc-field-control]',
  host: {
    '[attr.id]': 'field.id()',
    '[attr.aria-invalid]': 'field.invalid()',
    '[attr.disabled]': 'field.disabled() || null',
  },
})
export class ScFieldControl {
  readonly field = inject(SC_FIELD_TOKEN);
}
