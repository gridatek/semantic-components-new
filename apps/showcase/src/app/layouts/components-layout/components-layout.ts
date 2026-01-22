import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  inject,
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
import { filter } from 'rxjs';
import { Toc } from '../../components/toc/toc';
import { TocService } from '../../components/toc/toc.service';

@Component({
  selector: 'app-components-layout',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, Toc],
  template: `
    <div class="flex min-h-screen">
      <!-- Left Sidebar -->
      <aside
        class="hidden md:block w-64 border-r bg-background p-6 overflow-y-auto shrink-0"
      >
        <nav class="space-y-1">
          <h4 class="font-semibold mb-4">Components</h4>

          @for (item of components; track item.path) {
            <a
              [routerLink]="'/docs/components/' + item.path"
              routerLinkActive="bg-accent text-accent-foreground"
              class="block rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              {{ item.name }}
            </a>
          }
        </nav>
      </aside>

      <!-- Main Content -->
      <main #contentArea class="flex-1 overflow-auto p-6">
        <div class="max-w-4xl">
          <router-outlet />
        </div>
      </main>

      <!-- TOC (Right Sidebar) -->
      <aside class="hidden xl:block w-56 border-l p-6 shrink-0 overflow-y-auto">
        <div class="sticky top-6">
          <app-toc
            [items]="tocService.items()"
            [activeId]="tocService.activeId()"
          />
        </div>
      </aside>
    </div>
  `,
  host: {
    'data-slot': 'components-layout',
    class: 'block',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentsLayout implements AfterViewInit {
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  protected readonly tocService = inject(TocService);

  private readonly contentArea =
    viewChild.required<ElementRef<HTMLElement>>('contentArea');

  readonly components = [
    { name: 'Accordion', path: 'accordion' },
    { name: 'Alert', path: 'alert' },
    { name: 'Alert Dialog', path: 'alert-dialog' },
    { name: 'Avatar', path: 'avatar' },
    { name: 'Badge', path: 'badge' },
    { name: 'Breadcrumb', path: 'breadcrumb' },
    { name: 'Button', path: 'button' },
    { name: 'Calendar', path: 'calendar' },
    { name: 'Card', path: 'card' },
    { name: 'Checkbox', path: 'checkbox' },
    { name: 'Collapsible', path: 'collapsible' },
    { name: 'Combobox', path: 'combobox' },
    { name: 'Command', path: 'command' },
    { name: 'Context Menu', path: 'context-menu' },
    { name: 'Date Picker', path: 'date-picker' },
    { name: 'Dialog', path: 'dialog' },
    { name: 'Drawer', path: 'drawer' },
    { name: 'Dropdown Menu', path: 'dropdown-menu' },
    { name: 'Form', path: 'form' },
    { name: 'Hover Card', path: 'hover-card' },
    { name: 'Input', path: 'input' },
    { name: 'Label', path: 'label' },
    { name: 'Menu', path: 'menu' },
    { name: 'Navigation Menu', path: 'navigation-menu' },
    { name: 'Popover', path: 'popover' },
    { name: 'Progress', path: 'progress' },
    { name: 'Radio Group', path: 'radio-group' },
    { name: 'Scroll Area', path: 'scroll-area' },
    { name: 'Select', path: 'select' },
    { name: 'Separator', path: 'separator' },
    { name: 'Sheet', path: 'sheet' },
    { name: 'Sidebar', path: 'sidebar' },
    { name: 'Skeleton', path: 'skeleton' },
    { name: 'Slider', path: 'slider' },
    { name: 'Switch', path: 'switch' },
    { name: 'Table', path: 'table' },
    { name: 'Tabs', path: 'tabs' },
    { name: 'Textarea', path: 'textarea' },
    { name: 'Toast', path: 'toast' },
    { name: 'Toggle', path: 'toggle' },
    { name: 'Toggle Group', path: 'toggle-group' },
    { name: 'Tooltip', path: 'tooltip' },
  ];

  ngAfterViewInit(): void {
    this.extractTocHeadings();

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => {
        setTimeout(() => this.extractTocHeadings(), 100);
      });
  }

  private extractTocHeadings(): void {
    const container = this.contentArea().nativeElement;
    this.tocService.extractHeadings(container);
  }
}
