import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  model,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';

export type SheetSide = 'top' | 'right' | 'bottom' | 'left';

@Component({
  selector: 'div[sc-sheet-provider]',
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'sheet-provider',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSheetProvider {
  readonly classInput = input<string>('', { alias: 'class' });

  /** Which side the sheet slides in from */
  readonly side = input<SheetSide>('right');

  /** Whether the sheet is open */
  readonly open = model<boolean>(false);

  protected readonly class = computed(() => cn('relative', this.classInput()));
}
