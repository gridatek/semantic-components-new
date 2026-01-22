import { computed, Directive, inject, input } from '@angular/core';
import { cn } from '../../utils';
import { ScSheetContent } from './sc-sheet-content';

@Directive({
  selector: 'p[sc-sheet-description]',
  host: {
    'data-slot': 'sheet-description',
    '[id]': 'sheetContent.descriptionId',
    '[class]': 'class()',
  },
})
export class ScSheetDescription {
  readonly sheetContent = inject(ScSheetContent);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('text-muted-foreground text-sm', this.classInput()),
  );
}
