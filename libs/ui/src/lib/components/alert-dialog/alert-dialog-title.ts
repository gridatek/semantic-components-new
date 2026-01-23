import { computed, Directive, inject, input } from '@angular/core';
import { cn } from '../../utils';
import { ScAlertDialogContent } from './alert-dialog-content';

@Directive({
  selector: 'h2[sc-alert-dialog-title]',
  host: {
    'data-slot': 'alert-dialog-title',
    '[id]': 'dialogContent.titleId',
    '[class]': 'class()',
  },
})
export class ScAlertDialogTitle {
  readonly dialogContent = inject(ScAlertDialogContent);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('text-lg font-semibold', this.classInput()),
  );
}
