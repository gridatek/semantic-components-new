import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';
import { ScNavbar } from './navbar';

@Component({
  selector: 'div[sc-navbar-mobile-menu]',
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'navbar-mobile-menu',
    id: 'navbar-mobile-menu',
    role: 'navigation',
    '[attr.aria-label]': '"Mobile navigation"',
    '[class]': 'class()',
    '[tabindex]': '-1',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScNavbarMobileMenu {
  private readonly navbar = inject(ScNavbar);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => {
    const isOpen = this.navbar.mobileMenuOpen();

    return cn(
      'md:hidden',
      'fixed inset-x-0 top-[calc(var(--navbar-height,57px))] bottom-0',
      'z-50',
      'flex flex-col gap-2 p-6',
      'bg-background border-t border-border',
      'transition-all duration-300 ease-in-out',
      isOpen
        ? 'opacity-100 translate-y-0 pointer-events-auto'
        : 'opacity-0 -translate-y-full pointer-events-none',
      this.classInput(),
    );
  });
}
