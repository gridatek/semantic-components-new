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
  selector: 'button[sc-navbar-mobile-trigger]',
  template: `
    @if (navbar.mobileMenuOpen()) {
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    } @else {
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    }
    <span class="sr-only">
      {{ navbar.mobileMenuOpen() ? 'Close menu' : 'Open menu' }}
    </span>
  `,
  host: {
    'data-slot': 'navbar-mobile-trigger',
    type: 'button',
    '[class]': 'class()',
    '[attr.aria-expanded]': 'navbar.mobileMenuOpen()',
    '[attr.aria-controls]': '"navbar-mobile-menu"',
    '(click)': 'toggleMenu()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScNavbarMobileTrigger {
  readonly navbar = inject(ScNavbar);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'inline-flex items-center justify-center',
      'md:hidden',
      'size-10 rounded-md',
      'text-foreground',
      'hover:bg-accent hover:text-accent-foreground',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      this.classInput(),
    ),
  );

  toggleMenu(): void {
    this.navbar.mobileMenuOpen.update((open) => !open);
  }
}
