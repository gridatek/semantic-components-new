import { computed, Directive, inject, input } from '@angular/core';
import { cn } from '../../utils';
import { ScSheetContent } from './sc-sheet-content';

@Directive({
  selector: 'h2[sc-sheet-title]',
  host: {
    'data-slot': 'sheet-title',
    '[id]': 'sheetContent.titleId',
    '[class]': 'class()',
  },
})
export class ScSheetTitle {
  readonly sheetContent = inject(ScSheetContent);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('text-lg font-semibold text-foreground', this.classInput()),
  );
}
