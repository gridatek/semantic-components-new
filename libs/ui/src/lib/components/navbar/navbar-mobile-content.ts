import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';
import { ScNavbar } from './navbar';

@Component({
  selector: 'div[sc-navbar-mobile-content]',
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'navbar-mobile-content',
    id: 'navbar-mobile-menu',
    role: 'navigation',
    '[attr.aria-label]': '"Mobile navigation"',
    '[class]': 'class()',
    '[attr.inert]': '!navbar.mobileMenuOpen() || null',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScNavbarMobileContent {
  readonly navbar = inject(ScNavbar);
  private readonly elementRef = inject(ElementRef<HTMLElement>);

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => {
    const isOpen = this.navbar.mobileMenuOpen();

    return cn(
      'md:hidden',
      'fixed inset-x-0 top-[calc(var(--navbar-height,57px))] bottom-0',
      'z-50',
      'flex flex-col gap-2 p-4',
      'bg-background border-t border-border',
      'transition-all duration-300 ease-in-out',
      isOpen
        ? 'opacity-100 translate-y-0 pointer-events-auto'
        : 'opacity-0 -translate-y-2 pointer-events-none',
      this.classInput(),
    );
  });
}
