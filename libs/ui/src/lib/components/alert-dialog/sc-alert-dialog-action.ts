import { computed, Directive, inject, input } from '@angular/core';
import { cn } from '../../utils';
import { ScAlertDialog } from './sc-alert-dialog';

@Directive({
  selector: 'button[sc-alert-dialog-action]',
  host: {
    'data-slot': 'alert-dialog-action',
    '[class]': 'class()',
    '(click)': 'action()',
  },
})
export class ScAlertDialogAction {
  private readonly alertDialog = inject(ScAlertDialog);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'inline-flex h-9 items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-xs transition-colors',
      'hover:bg-primary/90',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      this.classInput(),
    ),
  );

  action(): void {
    this.alertDialog.open.set(false);
  }
}
