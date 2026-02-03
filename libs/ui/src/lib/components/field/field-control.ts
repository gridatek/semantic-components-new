import { computed, Directive, inject, input } from '@angular/core';
import { SC_FIELD_TOKEN } from './field';

@Directive({
  selector:
    'input[sc-field-control], textarea[sc-field-control], select[sc-field-control]',
  host: {
    '[attr.id]': 'controlId()',
    '[attr.aria-invalid]': 'ariaInvalid()',
    '[attr.disabled]': 'controlDisabled()',
  },
})
export class ScFieldControl {
  private readonly field = inject(SC_FIELD_TOKEN, { optional: true });

  readonly id = input<string>();
  readonly invalid = input<boolean>();
  readonly disabled = input<boolean>();

  protected readonly controlId = computed(() => {
    return this.id() ?? this.field?.id();
  });

  protected readonly ariaInvalid = computed(() => {
    const invalid = this.invalid() ?? this.field?.invalid();
    return invalid ?? null;
  });

  protected readonly controlDisabled = computed(() => {
    const disabled = this.disabled() ?? this.field?.disabled();
    return disabled || null;
  });
}
