import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScxSidebarProvider,
  ScxSidebar,
  ScxSidebarTrigger,
  ScxSidebarHeader,
  ScxSidebarContent,
  ScxSidebarFooter,
  ScxSidebarMenu,
  ScxSidebarMenuItem,
  ScxSidebarMenuButton,
  ScxSidebarMenuSub,
  ScxSidebarMenuSubItem,
  ScxSidebarMenuSubButton,
  ScxSidebarInset,
  ScxSidebarGroup,
  ScxSidebarGroupLabel,
  ScxSidebarGroupContent,
  ScxSidebarGroupAction,
  ScxSidebarRail,
  ScxSidebarSeparator,
  ScxSidebarInput,
  ScxSidebarMenuAction,
  ScxSidebarMenuBadge,
  ScxSidebarMenuSkeleton,
} from '@semantic-components/ui';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [
    ScxSidebarProvider,
    ScxSidebar,
    ScxSidebarTrigger,
    ScxSidebarHeader,
    ScxSidebarContent,
    ScxSidebarFooter,
    ScxSidebarMenu,
    ScxSidebarMenuItem,
    ScxSidebarMenuButton,
    ScxSidebarMenuSub,
    ScxSidebarMenuSubItem,
    ScxSidebarMenuSubButton,
    ScxSidebarInset,
    ScxSidebarGroup,
    ScxSidebarGroupLabel,
    ScxSidebarGroupContent,
    ScxSidebarGroupAction,
    ScxSidebarRail,
    ScxSidebarSeparator,
    ScxSidebarInput,
    ScxSidebarMenuAction,
    ScxSidebarMenuBadge,
    ScxSidebarMenuSkeleton,
    RouterLink,
    RouterLinkActive,
  ],
  template: `
    <div scx-sidebar-provider class="min-h-screen">
      <div scx-sidebar side="left" variant="sidebar" collapsible="icon">
        <div scx-sidebar-header>
          <div class="flex items-center gap-2 px-2 py-1">
            <div
              class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"
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
              >
                <path
                  d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m-9-9 6-6m-6 6 6 6m-6-6h14"
                />
              </svg>
            </div>
            <div class="grid flex-1 text-left text-sm leading-tight">
              <span class="truncate font-semibold">Acme Inc</span>
              <span class="truncate text-xs text-sidebar-foreground/70">
                Enterprise
              </span>
            </div>
          </div>
          <input scx-sidebar-input type="search" placeholder="Search..." />
        </div>

        <div scx-sidebar-content>
          <div scx-sidebar-group>
            <div scx-sidebar-group-label>Platform</div>
            <div scx-sidebar-group-content>
              <ul scx-sidebar-menu>
                <li scx-sidebar-menu-item>
                  <a
                    scx-sidebar-menu-button
                    routerLink="/dashboard"
                    routerLinkActive
                    #dashboardRla="routerLinkActive"
                    [isActive]="dashboardRla.isActive"
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
                    >
                      <rect width="7" height="9" x="3" y="3" rx="1" />
                      <rect width="7" height="5" x="14" y="3" rx="1" />
                      <rect width="7" height="9" x="14" y="12" rx="1" />
                      <rect width="7" height="5" x="3" y="16" rx="1" />
                    </svg>
                    <span>Dashboard</span>
                  </a>
                </li>
                <li scx-sidebar-menu-item>
                  <a
                    scx-sidebar-menu-button
                    routerLink="/users"
                    routerLinkActive
                    #usersRla="routerLinkActive"
                    [isActive]="usersRla.isActive"
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
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    <span>Users</span>
                  </a>
                  <div scx-sidebar-menu-badge>12</div>
                </li>
                <li scx-sidebar-menu-item>
                  <a
                    scx-sidebar-menu-button
                    routerLink="/settings"
                    routerLinkActive
                    #settingsRla="routerLinkActive"
                    [isActive]="settingsRla.isActive"
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
                    >
                      <path
                        d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
                      />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    <span>Settings</span>
                  </a>
                  <button scx-sidebar-menu-action [showOnHover]="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="12" cy="5" r="1" />
                      <circle cx="12" cy="19" r="1" />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div scx-sidebar-separator class="h-px"></div>

          <div scx-sidebar-group>
            <div scx-sidebar-group-label>Projects</div>
            <button scx-sidebar-group-action>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </button>
            <div scx-sidebar-group-content>
              <ul scx-sidebar-menu>
                <li scx-sidebar-menu-item>
                  <a scx-sidebar-menu-button>
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
                      <path
                        d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                      />
                      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                    </svg>
                    <span>Design Engineering</span>
                  </a>
                  <ul scx-sidebar-menu-sub>
                    <li scx-sidebar-menu-sub-item>
                      <a
                        scx-sidebar-menu-sub-button
                        routerLink="/projects/overview"
                        routerLinkActive
                        #overviewRla="routerLinkActive"
                        [isActive]="overviewRla.isActive"
                      >
                        <span>Overview</span>
                      </a>
                    </li>
                    <li scx-sidebar-menu-sub-item>
                      <a
                        scx-sidebar-menu-sub-button
                        routerLink="/projects/components"
                        routerLinkActive
                        #componentsRla="routerLinkActive"
                        [isActive]="componentsRla.isActive"
                      >
                        <span>Components</span>
                      </a>
                    </li>
                    <li scx-sidebar-menu-sub-item>
                      <a
                        scx-sidebar-menu-sub-button
                        routerLink="/projects/templates"
                        routerLinkActive
                        #templatesRla="routerLinkActive"
                        [isActive]="templatesRla.isActive"
                      >
                        <span>Templates</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li scx-sidebar-menu-item>
                  <a
                    scx-sidebar-menu-button
                    routerLink="/projects/sales"
                    routerLinkActive
                    #salesRla="routerLinkActive"
                    [isActive]="salesRla.isActive"
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
                    >
                      <path
                        d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                      />
                      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                    </svg>
                    <span>Sales & Marketing</span>
                  </a>
                </li>
                <li scx-sidebar-menu-item>
                  <a
                    scx-sidebar-menu-button
                    routerLink="/projects/travel"
                    routerLinkActive
                    #travelRla="routerLinkActive"
                    [isActive]="travelRla.isActive"
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
                    >
                      <path
                        d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                      />
                      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                    </svg>
                    <span>Travel</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div scx-sidebar-separator class="h-px"></div>

          <div scx-sidebar-group>
            <div scx-sidebar-group-label>Loading Example</div>
            <div scx-sidebar-group-content>
              <ul scx-sidebar-menu>
                <li scx-sidebar-menu-item>
                  <div scx-sidebar-menu-skeleton [showIcon]="true"></div>
                </li>
                <li scx-sidebar-menu-item>
                  <div scx-sidebar-menu-skeleton [showIcon]="true"></div>
                </li>
                <li scx-sidebar-menu-item>
                  <div scx-sidebar-menu-skeleton></div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div scx-sidebar-footer>
          <div class="flex items-center gap-2 px-2 py-1">
            <div
              class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-accent text-sidebar-accent-foreground"
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
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div class="grid flex-1 text-left text-sm leading-tight">
              <span class="truncate font-semibold">John Doe</span>
              <span class="truncate text-xs text-sidebar-foreground/70">
                john example.com
              </span>
            </div>
          </div>
        </div>

        <button scx-sidebar-rail></button>
      </div>

      <main scx-sidebar-inset>
        <header class="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <button
            scx-sidebar-trigger
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9"
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
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M9 3v18" />
            </svg>
            <span class="sr-only">Toggle Sidebar</span>
          </button>
          <div class="flex-1">
            <h1 class="text-lg font-semibold">Dashboard</h1>
          </div>
        </header>

        <div class="flex flex-1 flex-col gap-4 p-4">
          <div class="grid auto-rows-min gap-4 md:grid-cols-3">
            <div
              class="aspect-video rounded-xl bg-muted/50 flex items-center justify-center"
            >
              <p class="text-muted-foreground">Chart 1</p>
            </div>
            <div
              class="aspect-video rounded-xl bg-muted/50 flex items-center justify-center"
            >
              <p class="text-muted-foreground">Chart 2</p>
            </div>
            <div
              class="aspect-video rounded-xl bg-muted/50 flex items-center justify-center"
            >
              <p class="text-muted-foreground">Chart 3</p>
            </div>
          </div>
          <div
            class="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min p-8"
          >
            <div class="space-y-4">
              <h2 class="text-2xl font-bold">Welcome to the Sidebar Demo</h2>
              <p class="text-muted-foreground">
                This is a comprehensive sidebar component built with Angular. It
                features:
              </p>
              <ul class="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Collapsible sidebar with icon-only mode</li>
                <li>Keyboard shortcut (Cmd/Ctrl + B) to toggle</li>
                <li>Mobile-responsive with sheet drawer</li>
                <li>State persistence via cookies</li>
                <li>Multiple variants (sidebar, floating, inset)</li>
                <li>Nested menu items with submenus</li>
                <li>Group sections with labels</li>
              </ul>
              <div class="rounded-lg border p-4 bg-card">
                <h3 class="font-semibold mb-2">Try these features:</h3>
                <ol class="list-decimal list-inside space-y-1 text-sm">
                  <li>
                    Press Cmd+B (Mac) or Ctrl+B (Windows) to toggle the sidebar
                  </li>
                  <li>
                    Click the rail on the right edge of the sidebar to toggle
                  </li>
                  <li>
                    Resize your browser to see mobile mode with sheet drawer
                  </li>
                  <li>Refresh the page - your sidebar state is preserved!</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboardPage {}
