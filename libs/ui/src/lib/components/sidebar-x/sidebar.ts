import { Component, computed, inject, input } from '@angular/core';
import { ScSheet } from '../sheet/sheet';
import { ScSheetContent } from '../sheet/sheet-content';
import { cn } from '../../utils';
import { ScxSidebarState } from './sidebar-state.service';

@Component({
  selector: 'div[scx-sidebar]',
  imports: [ScSheet, ScSheetContent],
  template: `
    @if (isMobile()) {
      <div
        sc-sheet
        [open]="state.openMobile()"
        (openChange)="state.setOpenMobile($event)"
      >
        <div
          sc-sheet-content
          [side]="side()"
          class="w-[--sidebar-width-mobile] p-0"
        >
          <div [class]="innerClass()">
            <ng-content />
          </div>
        </div>
      </div>
    } @else {
      <div
        class="group peer hidden md:block text-sidebar-foreground"
        [attr.data-state]="state.state()"
        [attr.data-collapsible]="
          state.state() === 'collapsed' ? collapsible() : ''
        "
      >
        <div [class]="gapClass()"></div>
        <div [class]="containerClass()">
          <div [class]="innerClass()">
            <ng-content />
          </div>
        </div>
      </div>
    }
  `,
  host: {
    'data-slot': 'sidebar',
    '[attr.data-state]': 'state.state()',
    '[attr.data-variant]': 'variant()',
    '[attr.data-side]': 'side()',
    '[attr.data-collapsible]': 'collapsible()',
  },
})
export class ScxSidebar {
  readonly state = inject(ScxSidebarState);

  readonly side = input<'left' | 'right'>('left');
  readonly variant = input<'sidebar' | 'floating' | 'inset'>('sidebar');
  readonly collapsible = input<'offcanvas' | 'icon' | 'none'>('offcanvas');

  protected readonly isMobile = computed(() => this.state.isMobile());

  protected readonly gapClass = computed(() => {
    const side = this.side();
    const variant = this.variant();

    return cn(
      'relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear',
      'group-data-[collapsible=offcanvas]:w-0',
      'group-data-[side=right]:rotate-180',
      variant === 'floating' || variant === 'inset'
        ? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]'
        : 'group-data-[collapsible=icon]:w-[--sidebar-width-icon]',
    );
  });

  protected readonly containerClass = computed(() => {
    const side = this.side();
    const variant = this.variant();

    return cn(
      'fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex',
      side === 'left'
        ? 'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]'
        : 'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]',
      variant === 'floating' || variant === 'inset'
        ? 'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]'
        : 'group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l',
      side === 'right' && 'group-data-[side=right]:rotate-180',
    );
  });

  protected readonly innerClass = computed(() => {
    const variant = this.variant();
    const side = this.side();

    return cn(
      'flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow',
      side === 'right' && 'group-data-[side=right]:rotate-180',
    );
  });
}
