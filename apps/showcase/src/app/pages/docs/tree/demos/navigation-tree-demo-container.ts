import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { NavigationTreeDemo } from './navigation-tree-demo';

@Component({
  selector: 'app-navigation-tree-demo-container',
  imports: [DemoContainer, NavigationTreeDemo],
  template: `
    <app-demo-container
      title="Navigation"
      demoUrl="/demos/tree/navigation-tree-demo"
      [code]="code"
    >
      <app-navigation-tree-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationTreeDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScTree,
  ScTreeItem,
  ScTreeItemTrigger,
  ScTreeItemTriggerIcon,
  ScTreeItemGroup,
  ScTreeItemIcon,
} from '@semantic-components/ui';
import { SiChevronRightIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-navigation-tree-demo',
  imports: [
    ScTree,
    ScTreeItem,
    ScTreeItemTrigger,
    ScTreeItemTriggerIcon,
    ScTreeItemGroup,
    ScTreeItemIcon,
    SiChevronRightIcon,
  ],
  template: \`
    <div class="max-w-sm rounded-lg border p-4">
      <div sc-tree>
        <div sc-tree-item [hasChildren]="true" [expanded]="true">
          <div sc-tree-item-trigger>
            <svg
              sc-tree-item-icon
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span>Getting Started</span>
          </div>
          <div sc-tree-item-group>
            <div sc-tree-item>
              <div sc-tree-item-trigger>Introduction</div>
            </div>
            <div sc-tree-item>
              <div sc-tree-item-trigger>Installation</div>
            </div>
            <div sc-tree-item>
              <div sc-tree-item-trigger>Configuration</div>
            </div>
          </div>
        </div>
        <div sc-tree-item [hasChildren]="true">
          <div sc-tree-item-trigger>
            <svg
              sc-tree-item-icon
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
              />
            </svg>
            <span>Components</span>
          </div>
          <div sc-tree-item-group>
            <div sc-tree-item>
              <div sc-tree-item-trigger>Button</div>
            </div>
            <div sc-tree-item>
              <div sc-tree-item-trigger>Input</div>
            </div>
            <div sc-tree-item>
              <div sc-tree-item-trigger>Select</div>
            </div>
          </div>
        </div>
        <div sc-tree-item [hasChildren]="true">
          <div sc-tree-item-trigger>
            <svg
              sc-tree-item-icon
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="3" />
              <path
                d="M12 1v6m0 6v6m11-7h-6m-6 0H1m15.5-6.5-4.24 4.24m-6.52 6.52L1.5 19.5m17-1-4.24-4.24m-6.52-6.52L1.5 3.5"
              />
            </svg>
            <span>API Reference</span>
          </div>
          <div sc-tree-item-group>
            <div sc-tree-item>
              <div sc-tree-item-trigger>Overview</div>
            </div>
            <div sc-tree-item>
              <div sc-tree-item-trigger>Hooks</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationTreeDemo {}`;
}
