import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';
import { ScNavbar } from './sc-navbar';

@Component({
  selector: 'div[sc-navbar-mobile-overlay]',
  template: ``,
  host: {
    'data-slot': 'navbar-mobile-overlay',
    '[class]': 'class()',
    '[attr.aria-hidden]': 'true',
    '(click)': 'closeMenu()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScNavbarMobileOverlay {
  readonly navbar = inject(ScNavbar);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => {
    const isOpen = this.navbar.mobileMenuOpen();

    return cn(
      'md:hidden',
      'fixed inset-0 z-40',
      'bg-background/80 backdrop-blur-sm',
      'transition-opacity duration-300',
      isOpen
        ? 'opacity-100 pointer-events-auto'
        : 'opacity-0 pointer-events-none',
      this.classInput(),
    );
  });

  closeMenu(): void {
    this.navbar.mobileMenuOpen.set(false);
  }
}
