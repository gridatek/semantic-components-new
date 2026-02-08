import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  ViewEncapsulation,
  viewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import {
  ScSidebar,
  ScSidebarContent,
  ScSidebarFooter,
  ScSidebarGroup,
  ScSidebarGroupContent,
  ScSidebarGroupLabel,
  ScSidebarHeader,
  ScSidebarInset,
  ScSidebarMenu,
  ScSidebarMenuButton,
  ScSidebarMenuItem,
  ScSidebarProvider,
  ScSidebarRail,
  ScSidebarTrigger,
  ScSeparator,
  ScThemeToggle,
} from '@semantic-components/ui';
import { SiMoonIcon, SiSunIcon } from '@semantic-icons/lucide-icons';
import { filter } from 'rxjs';

import { Toc } from '../../components/toc/toc';
import { TocService } from '../../components/toc/toc.service';
import { COMPONENTS } from '../../data/components';

@Component({
  selector: 'app-docs-layout',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ScSidebarProvider,
    ScSidebar,
    ScSidebarHeader,
    ScSidebarContent,
    ScSidebarFooter,
    ScSidebarGroup,
    ScSidebarGroupLabel,
    ScSidebarGroupContent,
    ScSidebarMenu,
    ScSidebarMenuItem,
    ScSidebarMenuButton,
    ScSidebarInset,
    ScSidebarTrigger,
    ScSidebarRail,
    ScSeparator,
    ScThemeToggle,
    SiSunIcon,
    SiMoonIcon,
    Toc,
  ],
  template: `
    <div sc-sidebar-provider class="min-h-svh">
      <div sc-sidebar side="left" variant="sidebar" collapsible="icon">
        <div sc-sidebar-header>
          <ul sc-sidebar-menu>
            <li sc-sidebar-menu-item>
              <a sc-sidebar-menu-button size="lg" routerLink="/">
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
                    <path d="m7 11 2-2-2-2" />
                    <path d="M11 13h4" />
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                  </svg>
                </div>
                <div class="grid flex-1 text-left text-sm leading-tight">
                  <span class="truncate font-semibold">
                    Semantic Components
                  </span>
                  <span class="truncate text-xs text-sidebar-foreground/70">
                    UI lib for Angular
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div sc-sidebar-content>
          <div sc-sidebar-group>
            <div sc-sidebar-group-label>Components</div>
            <div sc-sidebar-group-content>
              <ul sc-sidebar-menu>
                @for (item of components; track item.path) {
                  <li sc-sidebar-menu-item>
                    <a
                      sc-sidebar-menu-button
                      [routerLink]="'/docs/components/' + item.path"
                      routerLinkActive
                      #rla="routerLinkActive"
                      [isActive]="rla.isActive"
                    >
                      <span>{{ item.name }}</span>
                    </a>
                  </li>
                }
              </ul>
            </div>
          </div>
        </div>

        <div sc-sidebar-footer>
          <ul sc-sidebar-menu>
            <li sc-sidebar-menu-item>
              <button
                sc-theme-toggle
                #themeToggle="scThemeToggle"
                class="w-full"
              >
                @if (themeToggle.isDark()) {
                  <svg si-sun-icon></svg>
                } @else {
                  <svg si-moon-icon></svg>
                }
              </button>
            </li>
          </ul>
        </div>

        <button sc-sidebar-rail></button>
      </div>

      <main sc-sidebar-inset>
        <header
          class="sticky top-0 z-10 flex h-14 shrink-0 items-center gap-2 border-b bg-background px-4"
        >
          <button sc-sidebar-trigger>
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
          <div sc-separator orientation="vertical" class="h-4"></div>
          <span class="text-sm font-medium text-muted-foreground">
            Documentation
          </span>
        </header>

        <div class="flex flex-1">
          <div #contentArea class="flex-1 overflow-auto p-6">
            <div class="max-w-4xl">
              <router-outlet />
            </div>
          </div>

          <aside
            class="hidden xl:block w-56 border-l p-6 shrink-0 overflow-y-auto"
          >
            <div class="sticky top-6">
              <app-toc
                [items]="tocService.items()"
                [activeId]="tocService.activeId()"
              />
            </div>
          </aside>
        </div>
      </main>
    </div>
  `,
  host: {
    class: 'block',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocsLayout {
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  protected readonly tocService = inject(TocService);

  private readonly contentArea =
    viewChild.required<ElementRef<HTMLElement>>('contentArea');

  readonly components = COMPONENTS;

  constructor() {
    afterNextRender(() => {
      this.extractTocHeadings();

      this.router.events
        .pipe(
          filter((event) => event instanceof NavigationEnd),
          takeUntilDestroyed(this.destroyRef),
        )
        .subscribe(() => {
          setTimeout(() => this.extractTocHeadings(), 100);
        });
    });
  }

  private extractTocHeadings(): void {
    const container = this.contentArea().nativeElement;
    this.tocService.extractHeadings(container);
  }
}
