import { computed, Directive, inject, input } from '@angular/core';
import { cn } from '../../utils';
import { ScSheetProvider } from './sheet-provider';

@Directive({
  selector: 'button[sc-sheet-close]',
  host: {
    'data-slot': 'sheet-close',
    '[class]': 'class()',
    '(click)': 'closeSheet()',
  },
})
export class ScSheetClose {
  private readonly sheetProvider = inject(ScSheetProvider);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity',
      'hover:opacity-100',
      'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
      'disabled:pointer-events-none',
      '[&>svg]:size-4',
      this.classInput(),
    ),
  );

  closeSheet(): void {
    this.sheetProvider.open.set(false);
  }
}
