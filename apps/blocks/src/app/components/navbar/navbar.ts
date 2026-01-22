import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  ScNavbar,
  ScNavbarBrand,
  ScNavbarContent,
  ScNavbarActions,
  ScNavbarLink,
  ScNavbarMobileTrigger,
  ScNavbarMobileContent,
  ScNavbarMobileLink,
  ScNavbarMobileOverlay,
  ScButton,
} from '@semantic-components/ui';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive,
    ScNavbar,
    ScNavbarBrand,
    ScNavbarContent,
    ScNavbarActions,
    ScNavbarLink,
    ScNavbarMobileTrigger,
    ScNavbarMobileContent,
    ScNavbarMobileLink,
    ScNavbarMobileOverlay,
    ScButton,
  ],
  template: `
    <nav
      sc-navbar
      class="sticky top-0 z-50"
      [(mobileMenuOpen)]="mobileMenuOpen"
    >
      <!-- Brand -->
      <a sc-navbar-brand routerLink="/">
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
          <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
        <span>Acme Inc</span>
      </a>

      <!-- Desktop Navigation -->
      <div sc-navbar-content>
        <a
          sc-navbar-link
          routerLink="/"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: true }"
          #homeRla="routerLinkActive"
          [active]="homeRla.isActive"
        >
          Home
        </a>
        <a sc-navbar-link href="#" [active]="false">Products</a>
        <a sc-navbar-link href="#" [active]="false">Solutions</a>
        <a sc-navbar-link href="#" [active]="false">Pricing</a>
        <a sc-navbar-link href="#" [active]="false">About</a>
      </div>

      <!-- Actions -->
      <div sc-navbar-actions>
        <button sc-navbar-mobile-trigger></button>
        <button sc-button variant="ghost" class="hidden md:inline-flex">
          Sign In
        </button>
        <button sc-button class="hidden md:inline-flex">Get Started</button>
      </div>

      <!-- Mobile Overlay -->
      <div sc-navbar-mobile-overlay></div>

      <!-- Mobile Menu -->
      <div sc-navbar-mobile-content>
        <a
          sc-navbar-mobile-link
          routerLink="/"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: true }"
          #mobileHomeRla="routerLinkActive"
          [active]="mobileHomeRla.isActive"
        >
          Home
        </a>
        <a sc-navbar-mobile-link href="#" [active]="false">Products</a>
        <a sc-navbar-mobile-link href="#" [active]="false">Solutions</a>
        <a sc-navbar-mobile-link href="#" [active]="false">Pricing</a>
        <a sc-navbar-mobile-link href="#" [active]="false">About</a>
        <hr class="my-2 border-border" />
        <a sc-navbar-mobile-link href="#">Sign In</a>
        <button sc-button class="w-full mt-2">Get Started</button>
      </div>
    </nav>
  `,
  host: {
    'data-slot': 'navbar',
    class: 'block',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  readonly mobileMenuOpen = model(false);
}
