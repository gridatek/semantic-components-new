import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  model,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';

export type DrawerDirection = 'top' | 'right' | 'bottom' | 'left';

@Component({
  selector: 'div[sc-drawer]',
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'drawer',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScDrawer {
  readonly classInput = input<string>('', { alias: 'class' });

  /** Direction the drawer slides from */
  readonly direction = input<DrawerDirection>('bottom');

  /** Whether the drawer is open */
  readonly open = model<boolean>(false);

  protected readonly class = computed(() => cn('relative', this.classInput()));
}
