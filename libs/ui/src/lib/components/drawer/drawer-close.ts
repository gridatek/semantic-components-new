import { Directive, inject } from '@angular/core';
import { ScDrawerProvider } from './drawer-provider';

@Directive({
  selector: 'button[sc-drawer-close]',
  host: {
    'data-slot': 'drawer-close',
    '(click)': 'close()',
  },
})
export class ScDrawerClose {
  private readonly drawer = inject(ScDrawerProvider);

  protected close(): void {
    this.drawer.open.set(false);
  }
}
