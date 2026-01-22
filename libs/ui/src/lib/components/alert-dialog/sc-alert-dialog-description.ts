import { computed, Directive, inject, input } from '@angular/core';
import { cn } from '../../utils';
import { ScAlertDialogContent } from './sc-alert-dialog-content';

@Directive({
  selector: 'p[sc-alert-dialog-description]',
  host: {
    'data-slot': 'alert-dialog-description',
    '[id]': 'dialogContent.descriptionId',
    '[class]': 'class()',
  },
})
export class ScAlertDialogDescription {
  readonly dialogContent = inject(ScAlertDialogContent);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('text-muted-foreground text-sm', this.classInput()),
  );
}
