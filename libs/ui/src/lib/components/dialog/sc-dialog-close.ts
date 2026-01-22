import { computed, Directive, inject, input } from '@angular/core';
import { cn } from '../../utils';
import { ScDialog } from './sc-dialog';

@Directive({
  selector: 'button[sc-dialog-close]',
  host: {
    'data-slot': 'dialog-close',
    '[class]': 'class()',
    '(click)': 'closeDialog()',
  },
})
export class ScDialogClose {
  private readonly dialog = inject(ScDialog);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity',
      'hover:opacity-100',
      'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
      'disabled:pointer-events-none',
      this.classInput(),
    ),
  );

  closeDialog(): void {
    this.dialog.open.set(false);
  }
}
