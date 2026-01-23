import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScSheetProvider,
  ScSheetClose,
  ScSheet,
  ScSheetDescription,
  ScSheetFooter,
  ScSheetHeader,
  ScSheetPortal,
  ScSheetTitle,
  ScSheetTrigger,
} from '@semantic-components/ui';

@Component({
  selector: 'app-sc-sheet-demo',
  imports: [
    ScSheetProvider,
    ScSheetClose,
    ScSheet,
    ScSheetDescription,
    ScSheetFooter,
    ScSheetHeader,
    ScSheetPortal,
    ScSheetTitle,
    ScSheetTrigger,
  ],
  template: `
    <div class="flex gap-4">
      <!-- Right Sheet (default) -->
      <div sc-sheet-provider>
        <button
          sc-sheet-trigger
          class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Open Right Sheet
        </button>
        <div sc-sheet-portal>
          <div sc-sheet>
            <button sc-sheet-close>
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
            <div sc-sheet-header>
              <h2 sc-sheet-title>Edit profile</h2>
              <p sc-sheet-description>
                Make changes to your profile here. Click save when you're done.
              </p>
            </div>
            <div class="grid gap-4 py-4">
              <div class="grid grid-cols-4 items-center gap-4">
                <label for="name" class="text-right text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  value="Pedro Duarte"
                  class="col-span-3 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
              <div class="grid grid-cols-4 items-center gap-4">
                <label for="username" class="text-right text-sm font-medium">
                  Username
                </label>
                <input
                  id="username"
                  value="@peduarte"
                  class="col-span-3 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
            </div>
            <div sc-sheet-footer>
              <button
                type="submit"
                class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-xs transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Left Sheet -->
      <div sc-sheet-provider side="left">
        <button
          sc-sheet-trigger
          class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Open Left Sheet
        </button>
        <div sc-sheet-portal>
          <div sc-sheet>
            <button sc-sheet-close>
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
            <div sc-sheet-header>
              <h2 sc-sheet-title>Navigation</h2>
              <p sc-sheet-description>Browse through different sections.</p>
            </div>
            <nav class="flex flex-col gap-2 py-4">
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

      <!-- Top Sheet -->
      <div sc-sheet-provider side="top">
        <button
          sc-sheet-trigger
          class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Open Top Sheet
        </button>
        <div sc-sheet-portal>
          <div sc-sheet>
            <button sc-sheet-close>
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
            <div sc-sheet-header>
              <h2 sc-sheet-title>Notifications</h2>
              <p sc-sheet-description>You have 3 unread messages.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Sheet -->
      <div sc-sheet-provider side="bottom">
        <button
          sc-sheet-trigger
          class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Open Bottom Sheet
        </button>
        <div sc-sheet-portal>
          <div sc-sheet>
            <button sc-sheet-close>
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
            <div sc-sheet-header>
              <h2 sc-sheet-title>Cookie Settings</h2>
              <p sc-sheet-description>Manage your cookie preferences.</p>
            </div>
            <div sc-sheet-footer>
              <button
                class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Decline
              </button>
              <button
                class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-xs transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSheetDemo {}
