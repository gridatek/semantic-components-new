import { computed, Directive, inject, input } from '@angular/core';
import { cn } from '../../utils';
import { ScSheet } from './sc-sheet';

@Directive({
  selector: 'button[sc-sheet-trigger]',
  host: {
    'data-slot': 'sheet-trigger',
    '[class]': 'class()',
    '[attr.aria-haspopup]': '"dialog"',
    '[attr.aria-expanded]': 'sheet.open()',
    '(click)': 'openSheet()',
  },
})
export class ScSheetTrigger {
  readonly sheet = inject(ScSheet);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('', this.classInput()));

  openSheet(): void {
    this.sheet.open.set(true);
  }
}
