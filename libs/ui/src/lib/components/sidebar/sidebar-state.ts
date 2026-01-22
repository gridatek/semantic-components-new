import { Injectable, signal } from '@angular/core';

@Injectable()
export class ScSidebarState {
  readonly open = signal(true);
  readonly openMobile = signal(false);

  toggle(): void {
    this.open.update((v) => !v);
  }

  toggleMobile(): void {
    this.openMobile.update((v) => !v);
  }

  setOpen(value: boolean): void {
    this.open.set(value);
  }

  setOpenMobile(value: boolean): void {
    this.openMobile.set(value);
  }
}
