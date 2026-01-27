import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { DefaultSidebarDemo } from './default-sidebar-demo';

@Component({
  selector: 'app-default-sidebar-demo-container',
  imports: [DemoContainer, DefaultSidebarDemo],
  template: `
    <app-demo-container title="Default" [code]="code">
      <app-default-sidebar-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultSidebarDemoContainer {
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
  selector: 'app-default-sidebar-demo',
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
    <div class="h-[500px] rounded-lg border overflow-hidden">
      <div sc-sidebar-provider>
        <aside sc-sidebar>
          <div sc-sidebar-header>
            <div class="flex items-center gap-2 px-2">
              <div class="size-8 rounded-lg bg-primary"></div>
              <div class="flex flex-col">
                <span class="text-sm font-semibold">Acme Inc</span>
                <span class="text-xs text-muted-foreground">Enterprise</span>
              </div>
            </div>
          </div>
          <div sc-sidebar-content>
            <div sc-sidebar-group>
              <div sc-sidebar-group-label>Platform</div>
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
            <div class="rounded-lg border border-dashed p-8 text-center text-muted-foreground">
              Main content area
            </div>
          </main>
        </div>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultSidebarDemo {
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
