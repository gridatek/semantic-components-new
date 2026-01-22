import { computed, Directive, input } from '@angular/core';
import { cn } from '../../utils';

@Directive({
  selector: 'div[sc-alert-dialog-footer]',
  host: {
    'data-slot': 'alert-dialog-footer',
    '[class]': 'class()',
  },
})
export class ScAlertDialogFooter {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
      this.classInput(),
    ),
  );
}
