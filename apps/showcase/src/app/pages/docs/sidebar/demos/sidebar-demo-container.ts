import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScSidebarDemo } from './sidebar-demo';

@Component({
  selector: 'app-sidebar-demo-container',
  imports: [DemoContainer, ScSidebarDemo],
  template: `
    <app-demo-container title="Sidebar" [code]="code">
      <app-sc-sidebar-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSidebarDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScSidebarProvider,
  ScSidebar,
  ScSidebarHeader,
  ScSidebarContent,
  ScSidebarFooter,
  ScSidebarGroup,
  ScSidebarGroupLabel,
  ScSidebarMenu,
  ScSidebarMenuItem,
  ScSidebarMenuButton,
  ScSidebarTrigger,
  ScSidebarInset,
  ScSidebarSeparator,
} from '@semantic-components/ui';

@Component({
  selector: 'app-sc-sidebar-demo',
  imports: [
    ScSidebarProvider,
    ScSidebar,
    ScSidebarHeader,
    ScSidebarContent,
    ScSidebarFooter,
    ScSidebarGroup,
    ScSidebarGroupLabel,
    ScSidebarMenu,
    ScSidebarMenuItem,
    ScSidebarMenuButton,
    ScSidebarTrigger,
    ScSidebarInset,
    ScSidebarSeparator,
  ],
  template: \`
    <div class="space-y-8">
      <!-- Default Sidebar -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Default Sidebar</h3>
        <div class="h-[500px] rounded-lg border overflow-hidden">
          <div sc-sidebar-provider>
            <aside sc-sidebar>
              <div sc-sidebar-header>
                <div class="flex items-center gap-2 px-2">
                  <div class="size-8 rounded-lg bg-primary"></div>
                  <div class="flex flex-col">
                    <span class="text-sm font-semibold">Acme Inc</span>
                    <span class="text-xs text-muted-foreground">
                      Enterprise
                    </span>
                  </div>
                </div>
              </div>
              <div sc-sidebar-content>
                <div sc-sidebar-group>
                  <div sc-sidebar-group-label>Platform</div>
                  <ul sc-sidebar-menu>
                    @for (item of mainNav; track item.title) {
                      <li sc-sidebar-menu-item>
                        <button
                          sc-sidebar-menu-button
                          [isActive]="item.isActive"
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
                            @switch (item.icon) {
                              @case ('home') {
                                <path
                                  d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                                />
                                <polyline points="9 22 9 12 15 12 15 22" />
                              }
                              @case ('inbox') {
                                <polyline
                                  points="22 12 16 12 14 15 10 15 8 12 2 12"
                                />
                                <path
                                  d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
                                />
                              }
                              @case ('search') {
                                <circle cx="11" cy="11" r="8" />
                                <path d="m21 21-4.3-4.3" />
                              }
                              @case ('settings') {
                                <path
                                  d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
                                />
                                <circle cx="12" cy="12" r="3" />
                              }
                            }
                          </svg>
                          <span>{{ item.title }}</span>
                        </button>
                      </li>
                    }
                  </ul>
                </div>
                <div sc-sidebar-separator></div>
                <div sc-sidebar-group>
                  <div sc-sidebar-group-label>Projects</div>
                  <ul sc-sidebar-menu>
                    @for (project of projects; track project.name) {
                      <li sc-sidebar-menu-item>
                        <button sc-sidebar-menu-button>
                          <span
                            class="flex size-4 items-center justify-center rounded text-xs"
                            [style.background-color]="project.color"
                          >
                            {{ project.name.charAt(0) }}
                          </span>
                          <span>{{ project.name }}</span>
                        </button>
                      </li>
                    }
                  </ul>
                </div>
              </div>
              <div sc-sidebar-footer>
                <ul sc-sidebar-menu>
                  <li sc-sidebar-menu-item>
                    <button sc-sidebar-menu-button>
                      <div class="size-6 rounded-full bg-muted"></div>
                      <span>John Doe</span>
                    </button>
                  </li>
                </ul>
              </div>
            </aside>
            <div sc-sidebar-inset>
              <header class="flex h-14 items-center gap-4 border-b px-4">
                <button sc-sidebar-trigger></button>
                <h1 class="text-lg font-semibold">Dashboard</h1>
              </header>
              <main class="flex-1 p-4">
                <div
                  class="rounded-lg border border-dashed p-8 text-center text-muted-foreground"
                >
                  Main content area
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>

      <!-- Icon Collapsible -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Icon Collapsible</h3>
        <p class="text-xs text-muted-foreground">
          When collapsed, only icons are visible
        </p>
        <div class="h-[400px] rounded-lg border overflow-hidden">
          <div sc-sidebar-provider>
            <aside sc-sidebar collapsible="icon">
              <div sc-sidebar-header>
                <div class="flex items-center gap-2 px-2">
                  <div class="size-8 rounded-lg bg-primary flex-shrink-0"></div>
                  <span class="text-sm font-semibold truncate">Acme</span>
                </div>
              </div>
              <div sc-sidebar-content>
                <div sc-sidebar-group>
                  <ul sc-sidebar-menu>
                    @for (item of mainNav.slice(0, 4); track item.title) {
                      <li sc-sidebar-menu-item>
                        <button
                          sc-sidebar-menu-button
                          [isActive]="item.isActive"
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
                            @switch (item.icon) {
                              @case ('home') {
                                <path
                                  d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                                />
                                <polyline points="9 22 9 12 15 12 15 22" />
                              }
                              @case ('inbox') {
                                <polyline
                                  points="22 12 16 12 14 15 10 15 8 12 2 12"
                                />
                                <path
                                  d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
                                />
                              }
                              @case ('search') {
                                <circle cx="11" cy="11" r="8" />
                                <path d="m21 21-4.3-4.3" />
                              }
                              @case ('settings') {
                                <path
                                  d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
                                />
                                <circle cx="12" cy="12" r="3" />
                              }
                            }
                          </svg>
                          <span>{{ item.title }}</span>
                        </button>
                      </li>
                    }
                  </ul>
                </div>
              </div>
            </aside>
            <div sc-sidebar-inset>
              <header class="flex h-14 items-center gap-4 border-b px-4">
                <button sc-sidebar-trigger></button>
                <span class="text-sm">Toggle to collapse to icons</span>
              </header>
              <main class="flex-1 p-4">
                <div
                  class="rounded-lg border border-dashed p-8 text-center text-muted-foreground"
                >
                  Content
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSidebarDemo {
  readonly mainNav = [
    { title: 'Home', icon: 'home', isActive: true },
    { title: 'Inbox', icon: 'inbox', isActive: false },
    { title: 'Search', icon: 'search', isActive: false },
    { title: 'Settings', icon: 'settings', isActive: false },
  ];

  readonly projects = [
    { name: 'Design System', color: '#ef4444' },
    { name: 'Marketing', color: '#f97316' },
    { name: 'Development', color: '#22c55e' },
  ];
}`;
}
