import { Directive, inject } from '@angular/core';
import { ScDrawer } from './sc-drawer';

@Directive({
  selector: 'button[sc-drawer-close]',
  host: {
    'data-slot': 'drawer-close',
    '(click)': 'close()',
  },
})
export class ScDrawerClose {
  private readonly drawer = inject(ScDrawer);

  protected close(): void {
    this.drawer.open.set(false);
  }
}
