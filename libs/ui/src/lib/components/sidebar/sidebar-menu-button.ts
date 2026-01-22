import { computed, Directive, input } from '@angular/core';
import { cn } from '../../utils';

@Directive({
  selector: 'button[sc-sidebar-menu-button], a[sc-sidebar-menu-button]',
  host: {
    'data-slot': 'sidebar-menu-button',
    '[class]': 'class()',
    '[attr.data-active]': 'isActive() || null',
  },
})
export class ScSidebarMenuButton {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly isActive = input<boolean>(false);
  readonly size = input<'default' | 'sm' | 'lg'>('default');

  protected readonly class = computed(() => {
    const size = this.size();

    return cn(
      'peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm',
      'outline-none ring-sidebar-ring transition-[width,height,padding]',
      'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
      'focus-visible:ring-2',
      'active:bg-sidebar-accent active:text-sidebar-accent-foreground',
      'disabled:pointer-events-none disabled:opacity-50',
      'group-has-[[data-slot=sidebar-menu-action]]/menu-item:pr-8',
      'data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground',
      'group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2',
      '[&>svg]:size-4 [&>svg]:shrink-0',
      size === 'sm' && 'text-xs',
      size === 'lg' && 'text-sm group-data-[collapsible=icon]:!p-0',
      this.classInput(),
    );
  });
}
