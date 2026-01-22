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
        <!-- Hero Section -->
        <section
          class="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30"
        >
          <div class="max-w-4xl mx-auto text-center space-y-6">
            <h1
              class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              Build Something Amazing
            </h1>
            <p
              class="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              A complete design system with responsive components built for
              modern web applications. Start building beautiful interfaces
              today.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button sc-button size="lg">Get Started Free</button>
              <button sc-button variant="outline" size="lg">
                View Documentation
              </button>
            </div>
          </div>
        </section>

        <!-- Features Section -->
        <section class="py-16 px-4 md:px-6 lg:px-8">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-2xl md:text-3xl font-bold text-center mb-12">
              Features
            </h2>
            <div class="grid md:grid-cols-3 gap-8">
              <div class="p-6 rounded-lg border bg-card">
                <div
                  class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
                >
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
                    class="text-primary"
                    aria-hidden="true"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M3 9h18" />
                    <path d="M9 21V9" />
                  </svg>
                </div>
                <h3 class="text-lg font-semibold mb-2">Responsive Design</h3>
                <p class="text-muted-foreground">
                  Automatically adapts between desktop and mobile layouts with
                  smooth transitions.
                </p>
              </div>
              <div class="p-6 rounded-lg border bg-card">
                <div
                  class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
                >
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
                    class="text-primary"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m16 10-4 4-4-4" />
                  </svg>
                </div>
                <h3 class="text-lg font-semibold mb-2">Accessible</h3>
                <p class="text-muted-foreground">
                  Built with ARIA attributes, keyboard navigation, and screen
                  reader support.
                </p>
              </div>
              <div class="p-6 rounded-lg border bg-card">
                <div
                  class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
                >
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
                    class="text-primary"
                    aria-hidden="true"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                  </svg>
                </div>
                <h3 class="text-lg font-semibold mb-2">Dark Mode Ready</h3>
                <p class="text-muted-foreground">
                  Seamlessly supports light and dark themes with CSS variables.
                </p>
              </div>
            </div>
          </div>
        </section>

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

      <!-- Footer -->
      <footer class="border-t py-8 px-4 md:px-6 lg:px-8">
        <div
          class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
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
            <span class="font-semibold">Acme Inc</span>
          </div>
          <p class="text-sm text-muted-foreground">
            Built with Angular ARIA and Tailwind CSS. Open source.
          </p>
        </div>
      </footer>
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
