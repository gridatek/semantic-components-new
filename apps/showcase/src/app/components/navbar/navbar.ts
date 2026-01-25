import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  ScButton,
  ScNavbar,
  ScNavbarActions,
  ScNavbarBrand,
  ScNavbarContent,
  ScNavbarLink,
  ScNavbarMobilePortal,
  ScNavbarMobileLink,
  ScNavbarMobileTrigger,
  ScThemeToggle,
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
    ScNavbarMobilePortal,
    ScNavbarMobileLink,
    ScNavbarMobileTrigger,
    ScButton,
    ScThemeToggle,
  ],
  template: `
    <nav
      sc-navbar
      class="sticky top-0 z-50"
      [(mobileMenuOpen)]="mobileMenuOpen"
    >
      <!-- Brand -->
      <a sc-navbar-brand href="#">
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

        <span>Semantic Components</span>
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
        <a
          sc-navbar-link
          routerLink="/docs/components"
          routerLinkActive="active"
          #componentsRla="routerLinkActive"
          [active]="componentsRla.isActive"
        >
          Components
        </a>
      </div>

      <!-- Actions -->
      <div sc-navbar-actions>
        <button sc-theme-toggle></button>
        <button sc-navbar-mobile-trigger></button>
        <button sc-button class="hidden md:inline-flex">Get Started</button>
      </div>

      <!-- Mobile Menu -->
      <div sc-navbar-mobile-portal>
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
        <a
          sc-navbar-mobile-link
          routerLink="/docs/components"
          routerLinkActive="active"
          #mobileComponentsRla="routerLinkActive"
          [active]="mobileComponentsRla.isActive"
        >
          Components
        </a>
        <hr class="my-2 border-border" />
        <button sc-button class="w-full mt-2">Get Started</button>
      </div>
    </nav>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Navbar {
  readonly mobileMenuOpen = model(false);
}
