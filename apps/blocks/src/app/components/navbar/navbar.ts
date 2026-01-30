import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  ScNavbar,
  ScNavbarProvider,
  ScNavbarBrand,
  ScNavbarContent,
  ScNavbarActions,
  ScNavbarLink,
  ScNavbarMobileTrigger,
  ScNavbarMobilePortal,
  ScNavbarMobileMenu,
  ScNavbarMobileLink,
  ScButton,
} from '@semantic-components/ui';
import { SiMenuIcon, SiXIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive,
    ScNavbar,
    ScNavbarProvider,
    ScNavbarBrand,
    ScNavbarContent,
    ScNavbarActions,
    ScNavbarLink,
    ScNavbarMobileTrigger,
    ScNavbarMobilePortal,
    ScNavbarMobileMenu,
    ScNavbarMobileLink,
    ScButton,
    SiMenuIcon,
    SiXIcon,
  ],
  template: `
    <div sc-navbar-provider>
      <nav sc-navbar class="sticky top-0 z-50">
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
          <button sc-navbar-mobile-trigger #trigger="scNavbarMobileTrigger">
            @if (trigger.isMobileMenuOpen()) {
              <svg si-x-icon></svg>
            } @else {
              <svg si-menu-icon></svg>
            }
            <span class="sr-only">
              {{ trigger.isMobileMenuOpen() ? 'Close menu' : 'Open menu' }}
            </span>
          </button>
          <button sc-button variant="ghost" class="hidden md:inline-flex">
            Sign In
          </button>
          <button sc-button class="hidden md:inline-flex">Get Started</button>
        </div>
      </nav>

      <!-- Mobile Menu -->
      <div sc-navbar-mobile-portal>
        <div sc-navbar-mobile-menu>
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
      </div>
    </div>
  `,
  host: {
    'data-slot': 'navbar',
    class: 'block',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {}
