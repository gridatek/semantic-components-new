import { computed, Directive, input } from '@angular/core';
import { cn } from '../../utils';

export interface ScFieldErrorItem {
  message?: string;
}

@Directive({
  selector: '[sc-field-error]',
  host: {
    role: 'alert',
    'data-slot': 'field-error',
    '[class]': 'class()',
  },
})
export class ScFieldError {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly errors = input<ScFieldErrorItem[]>([]);

  /**
   * Computed list of unique error messages
   */
  readonly uniqueErrors = computed(() => {
    const errorList = this.errors();
    if (!errorList?.length) {
      return [];
    }

    const uniqueMap = new Map<string, ScFieldErrorItem>();
    errorList.forEach((error) => {
      if (error?.message) {
        uniqueMap.set(error.message, error);
      }
    });

    return Array.from(uniqueMap.values());
  });

  /**
   * Whether there are multiple errors to display
   */
  readonly hasMultipleErrors = computed(() => {
    return this.uniqueErrors().length > 1;
  });

  /**
   * Single error message (when there's only one error)
   */
  readonly singleError = computed(() => {
    const errors = this.uniqueErrors();
    return errors.length === 1 ? errors[0]?.message : null;
  });

  protected readonly class = computed(() =>
    cn('text-destructive text-sm font-normal', this.classInput()),
  );
}
