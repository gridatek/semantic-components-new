import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { IconCollapsibleSidebarDemo } from './icon-collapsible-sidebar-demo';

@Component({
  selector: 'app-icon-collapsible-sidebar-demo-container',
  imports: [DemoContainer, IconCollapsibleSidebarDemo],
  template: `
    <app-demo-container title="Icon Collapsible" [code]="code">
      <app-icon-collapsible-sidebar-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCollapsibleSidebarDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
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
  template: \`
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
                      <!-- Icon SVG here -->
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
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCollapsibleSidebarDemo {
  readonly mainNav = [
    { title: 'Home', icon: 'home', isActive: true },
    { title: 'Inbox', icon: 'inbox', isActive: false },
    { title: 'Search', icon: 'search', isActive: false },
    { title: 'Settings', icon: 'settings', isActive: false },
  ];
}`;
}
