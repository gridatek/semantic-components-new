import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';
import { ScSidebarState } from './sidebar-state';
import {
  SidebarCollapsible,
  SidebarSide,
  SidebarVariant,
} from './sidebar-types';

@Component({
  selector: 'aside[sc-sidebar]',
  template: `
    <div [class]="innerClass()">
      <ng-content />
    </div>
  `,
  host: {
    'data-slot': 'sidebar',
    '[class]': 'class()',
    '[attr.data-state]': 'state.open() ? "expanded" : "collapsed"',
    '[attr.data-collapsible]': 'collapsible()',
    '[attr.data-variant]': 'variant()',
    '[attr.data-side]': 'side()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSidebar {
  readonly state = inject(ScSidebarState);

  readonly classInput = input<string>('', { alias: 'class' });
  readonly side = input<SidebarSide>('left');
  readonly variant = input<SidebarVariant>('sidebar');
  readonly collapsible = input<SidebarCollapsible>('offcanvas');

  protected readonly class = computed(() => {
    const collapsible = this.collapsible();
    const side = this.side();
    const variant = this.variant();

    if (collapsible === 'none') {
      return cn(
        'flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground',
        this.classInput(),
      );
    }

    return cn(
      'group peer hidden md:block text-sidebar-foreground',
      'transition-[width] duration-200 ease-linear',
      'group-data-[state=collapsed]/sidebar-wrapper:w-[--sidebar-width-icon]',
      variant === 'floating' || variant === 'inset'
        ? 'w-[calc(var(--sidebar-width)+theme(spacing.4))]'
        : 'w-[--sidebar-width]',
      side === 'left'
        ? 'group-data-[collapsible=offcanvas]:left-0'
        : 'group-data-[collapsible=offcanvas]:right-0',
      this.classInput(),
    );
  });

  protected readonly innerClass = computed(() => {
    const variant = this.variant();

    return cn(
      'flex h-full w-full flex-col bg-sidebar',
      'group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow',
      variant === 'inset' && 'bg-transparent',
    );
  });
}
