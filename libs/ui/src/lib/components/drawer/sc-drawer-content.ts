import { computed, Directive, inject, input } from '@angular/core';
import { cn } from '../../utils';
import { DrawerDirection, ScDrawer } from './sc-drawer';

const directionBaseClasses: Record<DrawerDirection, string> = {
  top: 'inset-x-0 top-0 border-b rounded-b-[10px]',
  right: 'inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
  bottom: 'inset-x-0 bottom-0 border-t rounded-t-[10px]',
  left: 'inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
};

const directionOpenClasses: Record<DrawerDirection, string> = {
  top: 'translate-y-0',
  right: 'translate-x-0',
  bottom: 'translate-y-0',
  left: 'translate-x-0',
};

const directionClosedClasses: Record<DrawerDirection, string> = {
  top: '-translate-y-full',
  right: 'translate-x-full',
  bottom: 'translate-y-full',
  left: '-translate-x-full',
};

@Directive({
  selector: 'div[sc-drawer-content]',
  host: {
    'data-slot': 'drawer-content',
    role: 'dialog',
    'aria-modal': 'true',
    '[attr.data-state]': 'drawer.open() ? "open" : "closed"',
    '[class]': 'class()',
  },
})
export class ScDrawerContent {
  readonly drawer = inject(ScDrawer);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => {
    const direction = this.drawer.direction();
    const isOpen = this.drawer.open();

    return cn(
      'fixed z-50 flex flex-col bg-background',
      directionBaseClasses[direction],
      isOpen
        ? `${directionOpenClasses[direction]} transition-transform duration-300 ease-out`
        : `${directionClosedClasses[direction]} transition-transform duration-300 ease-in`,
      this.classInput(),
    );
  });
}
