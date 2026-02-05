import { _IdGenerator } from '@angular/cdk/a11y';
import {
  computed,
  Directive,
  inject,
  InjectionToken,
  input,
} from '@angular/core';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils';
import { SC_FIELD_ID } from '../label/label-id';

const fieldVariants = cva(
  'gap-2 group/field flex w-full data-[invalid=true]:text-destructive',
  {
    variants: {
      orientation: {
        vertical: 'flex-col [&>*]:w-full [&>.sr-only]:w-auto',
        horizontal:
          'flex-row items-center [&>[data-slot=label]]:flex-auto has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px',
        responsive:
          'flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto @md/field-group:[&>[data-slot=label]]:flex-auto @md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px',
      },
    },
    defaultVariants: {
      orientation: 'vertical',
    },
  },
);

export type ScFieldVariants = VariantProps<typeof fieldVariants>;

export interface ScFieldContext {
  id: () => string;
  orientation: () => ScFieldVariants['orientation'];
  invalid: () => boolean;
  disabled: () => boolean;
}

export const SC_FIELD = new InjectionToken<ScFieldContext>('SC_FIELD');

@Directive({
  selector: '[sc-field]',
  host: {
    role: 'group',
    'data-slot': 'field',
    '[attr.id]': 'id()',
    '[attr.data-orientation]': 'orientation()',
    '[attr.data-invalid]': 'invalid()',
    '[attr.data-disabled]': 'disabled()',
    '[class]': 'class()',
  },
  providers: [
    {
      provide: SC_FIELD,
      useExisting: ScField,
    },
    {
      provide: SC_FIELD_ID,
      useExisting: ScField,
    },
  ],
})
export class ScField implements ScFieldContext {
  readonly id = input(inject(_IdGenerator).getId('sc-field-'));
  readonly classInput = input<string>('', { alias: 'class' });
  readonly orientation = input<ScFieldVariants['orientation']>('vertical');
  readonly invalid = input<boolean>(false);
  readonly disabled = input<boolean>(false);

  protected readonly class = computed(() =>
    cn(fieldVariants({ orientation: this.orientation() }), this.classInput()),
  );
}
