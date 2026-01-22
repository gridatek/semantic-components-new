import { computed, Directive, inject, input } from '@angular/core';
import { cn } from '../../utils';
import { ScDialogContent } from './sc-dialog-content';

@Directive({
  selector: 'h2[sc-dialog-title]',
  host: {
    'data-slot': 'dialog-title',
    '[id]': 'dialogContent.titleId',
    '[class]': 'class()',
  },
})
export class ScDialogTitle {
  readonly dialogContent = inject(ScDialogContent);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('text-lg font-semibold leading-none tracking-tight', this.classInput()),
  );
}
