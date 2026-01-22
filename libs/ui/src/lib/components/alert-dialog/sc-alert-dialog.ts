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
  selector: 'div[sc-alert-dialog]',
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'alert-dialog',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAlertDialog {
  readonly classInput = input<string>('', { alias: 'class' });

  /** Whether the alert dialog is open */
  readonly open = model<boolean>(false);

  protected readonly class = computed(() => cn('relative', this.classInput()));
}
