import {
  booleanAttribute,
  computed,
  Directive,
  inject,
  input,
} from '@angular/core';
import { cn } from '../../utils';
import { SC_FIELD } from '../field/field';

@Directive({
  selector: 'input[sc-input]',
  host: {
    'data-slot': 'input',
    '[attr.id]': 'controlId()',
    '[attr.aria-invalid]': 'ariaInvalid()',
    '[attr.disabled]': 'controlDisabled()',
    '[class]': 'class()',
  },
})
export class ScInput {
  private readonly field = inject(SC_FIELD, { optional: true });

  readonly id = input<string>();
  readonly invalid = input<boolean, unknown>(false, {
    transform: booleanAttribute,
  });
  readonly disabled = input<boolean, unknown>(false, {
    transform: booleanAttribute,
  });
  readonly classInput = input<string>('', { alias: 'class' });

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

  protected readonly class = computed(() =>
    cn(
      'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background',
      'file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground',
      'placeholder:text-muted-foreground',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      this.classInput(),
    ),
  );
}
