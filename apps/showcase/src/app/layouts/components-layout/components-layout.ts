import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ScSidebarLayout } from '@semantic-components/ui';

@Component({
  selector: 'app-components-layout',
  imports: [ScSidebarLayout, RouterLink, RouterLinkActive],
  template: `
    <sc-sidebar-layout>
      <aside
        scSidebar
        class="hidden md:block w-64 border-r bg-background p-6 overflow-y-auto"
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
    </sc-sidebar-layout>
  `,
  host: {
    'data-slot': 'components-layout',
    class: 'block',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentsLayout {
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
}
