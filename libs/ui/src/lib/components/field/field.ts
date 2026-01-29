import {
  computed,
  Directive,
  InjectionToken,
  input,
  signal,
} from '@angular/core';
import { cn } from '../../utils';

export type ScFieldOrientation = 'vertical' | 'horizontal' | 'responsive';

export interface ScFieldContext {
  orientation: () => ScFieldOrientation;
  invalid: () => boolean;
  disabled: () => boolean;
}

export const SC_FIELD_TOKEN = new InjectionToken<ScFieldContext>(
  'SC_FIELD_TOKEN',
);

@Directive({
  selector: '[sc-field]',
  host: {
    role: 'group',
    'data-slot': 'field',
    '[attr.data-orientation]': 'orientation()',
    '[attr.data-invalid]': 'invalid()',
    '[attr.data-disabled]': 'disabled()',
    '[class]': 'class()',
  },
  providers: [
    {
      provide: SC_FIELD_TOKEN,
      useExisting: ScField,
    },
  ],
})
export class ScField implements ScFieldContext {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly orientation = input<ScFieldOrientation>('vertical');
  readonly invalid = input<boolean>(false);
  readonly disabled = input<boolean>(false);

  protected readonly class = computed(() => {
    const orientation = this.orientation();
    const invalid = this.invalid();

    const baseClasses =
      'gap-2 group/field flex w-full data-[invalid=true]:text-destructive';

    const orientationClasses = {
      vertical: 'flex-col [&>*]:w-full [&>.sr-only]:w-auto',
      horizontal:
        'flex-row items-center [&>[data-slot=field-label]]:flex-auto has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px',
      responsive:
        'flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto @md/field-group:[&>[data-slot=field-label]]:flex-auto @md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px',
    };

    return cn(
      baseClasses,
      orientationClasses[orientation] || orientationClasses.vertical,
      this.classInput(),
    );
  });
}
