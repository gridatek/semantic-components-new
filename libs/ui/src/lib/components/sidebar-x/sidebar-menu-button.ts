import { Directive, computed, input } from '@angular/core';
import { cn } from '../../utils';

const sizeStyles: Record<'default' | 'sm' | 'lg', string> = {
  default: 'h-8 text-sm',
  sm: 'h-7 text-xs',
  lg: 'h-12 text-sm group-data-[collapsible=icon]:!p-0',
};

@Directive({
  selector: 'button[scx-sidebar-menu-button], a[scx-sidebar-menu-button]',
  host: {
    'data-slot': 'sidebar-menu-button',
    '[class]': 'class()',
    '[attr.data-active]': 'isActive() || null',
    '[attr.data-size]': 'size()',
  },
})
export class ScxSidebarMenuButton {
  readonly classInput = input<string>('', { alias: 'class' });

  readonly size = input<'default' | 'sm' | 'lg'>('default');
  readonly isActive = input<boolean>(false);
  readonly tooltip = input<string>();

  protected readonly class = computed(() => {
    const size = this.size();
    return cn(
      'peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0',
      sizeStyles[size],
      this.classInput(),
    );
  });
}
