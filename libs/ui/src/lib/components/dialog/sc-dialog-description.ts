import { computed, Directive, inject, input } from '@angular/core';
import { cn } from '../../utils';
import { ScDialogContent } from './sc-dialog-content';

@Directive({
  selector: 'p[sc-dialog-description]',
  host: {
    'data-slot': 'dialog-description',
    '[id]': 'dialogContent.descriptionId',
    '[class]': 'class()',
  },
})
export class ScDialogDescription {
  readonly dialogContent = inject(ScDialogContent);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('text-muted-foreground text-sm', this.classInput()),
  );
}
