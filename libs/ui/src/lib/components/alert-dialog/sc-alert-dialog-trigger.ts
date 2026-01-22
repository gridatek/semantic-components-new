import { computed, Directive, inject, input } from '@angular/core';
import { cn } from '../../utils';
import { ScAlertDialog } from './sc-alert-dialog';

@Directive({
  selector: 'button[sc-alert-dialog-trigger]',
  host: {
    'data-slot': 'alert-dialog-trigger',
    '[class]': 'class()',
    '[attr.aria-haspopup]': '"alertdialog"',
    '[attr.aria-expanded]': 'alertDialog.open()',
    '(click)': 'openDialog()',
  },
})
export class ScAlertDialogTrigger {
  readonly alertDialog = inject(ScAlertDialog);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('', this.classInput()));

  openDialog(): void {
    this.alertDialog.open.set(true);
  }
}
