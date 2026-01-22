import { computed, Directive, inject, input } from '@angular/core';
import { cn } from '../../utils';
import { ScDialog } from './sc-dialog';

@Directive({
  selector: 'button[sc-dialog-trigger]',
  host: {
    'data-slot': 'dialog-trigger',
    '[class]': 'class()',
    '[attr.aria-haspopup]': '"dialog"',
    '[attr.aria-expanded]': 'dialog.open()',
    '(click)': 'openDialog()',
  },
})
export class ScDialogTrigger {
  readonly dialog = inject(ScDialog);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('', this.classInput()));

  openDialog(): void {
    this.dialog.open.set(true);
  }
}
