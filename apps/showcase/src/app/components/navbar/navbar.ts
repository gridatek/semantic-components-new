import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
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
import { HeroSection } from '../hero-section/hero-section';
import { FeatureGrid } from '../feature-grid/feature-grid';
import { Footer } from '../footer/footer';

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
    HeroSection,
    FeatureGrid,
    Footer,
  ],
  template: `
    <div class="min-h-screen flex flex-col">
      <!-- Navbar -->
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
          <span>Acme Inc</span>
        </a>

        <!-- Desktop Navigation -->
        <div sc-navbar-content>
          <a
            sc-navbar-link
            routerLink="/navbar"
            routerLinkActive="active"
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
            routerLink="/navbar"
            routerLinkActive="active"
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

      <!-- Page Content -->
      <main class="flex-1">
        <app-hero-section />

        <app-feature-grid />

        <!-- CTA Section -->
        <section class="py-16 px-4 md:px-6 lg:px-8 bg-muted/30">
          <div class="max-w-4xl mx-auto text-center space-y-6">
            <h2 class="text-2xl md:text-3xl font-bold">
              Ready to get started?
            </h2>
            <p class="text-muted-foreground">
              Join thousands of developers building with our component library.
            </p>
            <button sc-button size="lg">Start Building Today</button>
          </div>
        </section>
      </main>

      <app-footer />
    </div>
  `,
  host: {
    class: 'block',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Navbar {
  readonly mobileMenuOpen = signal(false);
}
