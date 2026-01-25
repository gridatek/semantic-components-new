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
  selector: 'div[sc-navbar-provider]',
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'navbar-provider',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScNavbarProvider {
  readonly classInput = input<string>('', { alias: 'class' });

  /** Whether the mobile menu is open */
  readonly open = model<boolean>(false);

  protected readonly class = computed(() => cn('', this.classInput()));
}
