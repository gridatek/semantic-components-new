import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScSidebarProvider,
  ScSidebar,
  ScSidebarHeader,
  ScSidebarContent,
  ScSidebarGroup,
  ScSidebarMenu,
  ScSidebarMenuItem,
  ScSidebarMenuButton,
  ScSidebarTrigger,
  ScSidebarInset,
} from '@semantic-components/ui';

@Component({
  selector: 'app-icon-collapsible-sidebar-demo',
  imports: [
    ScSidebarProvider,
    ScSidebar,
    ScSidebarHeader,
    ScSidebarContent,
    ScSidebarGroup,
    ScSidebarMenu,
    ScSidebarMenuItem,
    ScSidebarMenuButton,
    ScSidebarTrigger,
    ScSidebarInset,
  ],
  template: `
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
                @for (item of mainNav; track item.title) {
                  <li sc-sidebar-menu-item>
                    <button sc-sidebar-menu-button [isActive]="item.isActive">
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
                            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                          }
                          @case ('inbox') {
                            <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                            <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                          }
                          @case ('search') {
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.3-4.3" />
                          }
                          @case ('settings') {
                            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
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
            <div class="rounded-lg border border-dashed p-8 text-center text-muted-foreground">
              Content
            </div>
          </main>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCollapsibleSidebarDemo {
  readonly mainNav = [
    { title: 'Home', icon: 'home', isActive: true },
    { title: 'Inbox', icon: 'inbox', isActive: false },
    { title: 'Search', icon: 'search', isActive: false },
    { title: 'Settings', icon: 'settings', isActive: false },
  ];
}
