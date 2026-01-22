import { computed, Directive, inject, input } from '@angular/core';
import { cn } from '../../utils';
import { ScDrawer } from './sc-drawer';

@Directive({
  selector: 'button[sc-drawer-trigger]',
  host: {
    'data-slot': 'drawer-trigger',
    '[class]': 'class()',
    '[attr.aria-expanded]': 'drawer.open()',
    '(click)': 'openDrawer()',
  },
})
export class ScDrawerTrigger {
  readonly drawer = inject(ScDrawer);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('', this.classInput()));

  openDrawer(): void {
    this.drawer.open.set(true);
  }
}
