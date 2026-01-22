import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav
      class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div class="w-full px-4 md:px-6 lg:px-8 flex h-14 items-center">
        <!-- Brand -->
        <a routerLink="/" class="mr-6 flex items-center space-x-2">
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
          <span class="font-bold">Acme Inc</span>
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex md:flex-1 md:items-center md:gap-6">
          <a
            routerLink="/"
            routerLinkActive="text-foreground"
            [routerLinkActiveOptions]="{ exact: true }"
            class="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </a>
          <a
            href="#"
            class="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Products
          </a>
          <a
            href="#"
            class="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Solutions
          </a>
          <a
            href="#"
            class="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Pricing
          </a>
        </div>

        <!-- Actions -->
        <div class="flex items-center gap-2">
          <button
            class="hidden md:inline-flex h-9 px-4 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground"
          >
            Sign In
          </button>
          <button
            class="hidden md:inline-flex h-9 px-4 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Get Started
          </button>

          <!-- Mobile Menu Button -->
          <button
            class="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md hover:bg-accent"
            (click)="mobileMenuOpen.set(!mobileMenuOpen())"
            [attr.aria-expanded]="mobileMenuOpen()"
            aria-label="Toggle menu"
          >
            @if (mobileMenuOpen()) {
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
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            }
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      @if (mobileMenuOpen()) {
        <div class="md:hidden border-t">
          <div class="w-full px-4 md:px-6 lg:px-8 py-4 space-y-3">
            <a
              routerLink="/"
              class="block text-sm font-medium text-foreground"
              (click)="mobileMenuOpen.set(false)"
            >
              Home
            </a>
            <a href="#" class="block text-sm font-medium text-muted-foreground">
              Products
            </a>
            <a href="#" class="block text-sm font-medium text-muted-foreground">
              Solutions
            </a>
            <a href="#" class="block text-sm font-medium text-muted-foreground">
              Pricing
            </a>
            <hr class="my-2 border-border" />
            <a href="#" class="block text-sm font-medium text-muted-foreground">
              Sign In
            </a>
            <button
              class="w-full h-9 px-4 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground"
            >
              Get Started
            </button>
          </div>
        </div>
      }
    </nav>
  `,
  host: {
    'data-slot': 'navbar',
    class: 'block',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  readonly mobileMenuOpen = signal(false);
}
