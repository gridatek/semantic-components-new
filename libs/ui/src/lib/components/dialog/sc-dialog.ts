import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  model,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';

@Component({
  selector: 'div[sc-dialog]',
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'dialog',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScDialog {
  readonly classInput = input<string>('', { alias: 'class' });

  /** Whether the dialog is open */
  readonly open = model<boolean>(false);

  protected readonly class = computed(() => cn('relative', this.classInput()));
}
