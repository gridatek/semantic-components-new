import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScDrawer,
  ScDrawerClose,
  ScDrawerContent,
  ScDrawerDescription,
  ScDrawerFooter,
  ScDrawerHandle,
  ScDrawerHeader,
  ScDrawerPortal,
  ScDrawerTitle,
  ScDrawerTrigger,
} from '@semantic-components/ui';

@Component({
  selector: 'app-drawer-demo',
  imports: [
    ScDrawer,
    ScDrawerClose,
    ScDrawerContent,
    ScDrawerDescription,
    ScDrawerFooter,
    ScDrawerHandle,
    ScDrawerHeader,
    ScDrawerPortal,
    ScDrawerTitle,
    ScDrawerTrigger,
  ],
  template: `
    <div class="flex flex-wrap gap-4">
      <!-- Bottom Drawer (default) -->
      <div sc-drawer>
        <button
          sc-drawer-trigger
          class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Open Bottom Drawer
        </button>
        <div sc-drawer-portal>
          <div sc-drawer-content>
            <div sc-drawer-handle></div>
            <div sc-drawer-header>
              <h2 sc-drawer-title>Edit Profile</h2>
              <p sc-drawer-description>
                Make changes to your profile here. Click save when you're done.
              </p>
            </div>
            <div class="p-4 pb-0">
              <div class="flex items-center justify-center space-x-2">
                <button
                  class="inline-flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-full border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"
                  aria-label="Decrease"
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
                    class="size-4"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                  </svg>
                </button>
                <div class="flex-1 text-center">
                  <div class="text-7xl font-bold tracking-tighter">320</div>
                  <div class="text-muted-foreground text-[0.70rem] uppercase">
                    Calories/day
                  </div>
                </div>
                <button
                  class="inline-flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-full border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"
                  aria-label="Increase"
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
                    class="size-4"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                </button>
              </div>
            </div>
            <div sc-drawer-footer>
              <button
                sc-drawer-close
                class="inline-flex h-9 w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-xs transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Submit
              </button>
              <button
                sc-drawer-close
                class="inline-flex h-9 w-full cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Top Drawer -->
      <div sc-drawer direction="top">
        <button
          sc-drawer-trigger
          class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Open Top Drawer
        </button>
        <div sc-drawer-portal>
          <div sc-drawer-content>
            <div sc-drawer-header>
              <h2 sc-drawer-title>Notifications</h2>
              <p sc-drawer-description>You have 3 unread notifications.</p>
            </div>
            <div class="p-4">
              <div class="space-y-4">
                <div class="flex items-start gap-4 rounded-md border p-4">
                  <div class="flex-1">
                    <p class="text-sm font-medium">
                      Your call has been confirmed.
                    </p>
                    <p class="text-sm text-muted-foreground">5 min ago</p>
                  </div>
                </div>
                <div class="flex items-start gap-4 rounded-md border p-4">
                  <div class="flex-1">
                    <p class="text-sm font-medium">You have a new message!</p>
                    <p class="text-sm text-muted-foreground">1 hour ago</p>
                  </div>
                </div>
              </div>
            </div>
            <div sc-drawer-footer>
              <button
                sc-drawer-close
                class="inline-flex h-9 w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-xs transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Mark all as read
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Left Drawer -->
      <div sc-drawer direction="left">
        <button
          sc-drawer-trigger
          class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Open Left Drawer
        </button>
        <div sc-drawer-portal>
          <div sc-drawer-content>
            <div sc-drawer-header>
              <h2 sc-drawer-title>Navigation</h2>
              <p sc-drawer-description>Browse through different sections.</p>
            </div>
            <nav class="flex flex-col gap-2 p-4">
              <a
                href="#"
                class="rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
              >
                Home
              </a>
              <a
                href="#"
                class="rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
              >
                Products
              </a>
              <a
                href="#"
                class="rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
              >
                About
              </a>
              <a
                href="#"
                class="rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>

      <!-- Right Drawer -->
      <div sc-drawer direction="right">
        <button
          sc-drawer-trigger
          class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Open Right Drawer
        </button>
        <div sc-drawer-portal>
          <div sc-drawer-content>
            <button
              sc-drawer-close
              class="absolute right-4 top-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <svg
                class="size-4"
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
              <span class="sr-only">Close</span>
            </button>
            <div sc-drawer-header>
              <h2 sc-drawer-title>Settings</h2>
              <p sc-drawer-description>Configure your preferences.</p>
            </div>
            <div class="space-y-4 p-4">
              <div class="flex items-center justify-between">
                <label for="dark-mode" class="text-sm font-medium">
                  Dark Mode
                </label>
                <input id="dark-mode" type="checkbox" class="size-4" />
              </div>
              <div class="flex items-center justify-between">
                <label for="notifications" class="text-sm font-medium">
                  Notifications
                </label>
                <input
                  id="notifications"
                  type="checkbox"
                  class="size-4"
                  checked
                />
              </div>
              <div class="flex items-center justify-between">
                <label for="compact" class="text-sm font-medium">
                  Compact Mode
                </label>
                <input id="compact" type="checkbox" class="size-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScDrawerDemo {}
