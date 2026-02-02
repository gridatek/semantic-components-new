import { ChangeDetectionStrategy, Component } from '@angular/core';
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
  template: `
    <div class="max-w-sm rounded-lg border p-4">
      <ul sc-tree #tree="scTree">
        <li
          sc-tree-item
          [parent]="tree.tree"
          value="getting-started"
          [expanded]="true"
        >
          <button sc-tree-item-trigger>
            <svg sc-tree-item-trigger-icon si-chevron-right-icon />
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
          </button>
          <ul sc-tree-item-group>
            <li sc-tree-item [parent]="tree.tree" value="introduction">
              <button sc-tree-item-trigger>
                <svg sc-tree-item-trigger-icon si-chevron-right-icon />
                <span>Introduction</span>
              </button>
            </li>
            <li sc-tree-item [parent]="tree.tree" value="installation">
              <button sc-tree-item-trigger>
                <svg sc-tree-item-trigger-icon si-chevron-right-icon />
                <span>Installation</span>
              </button>
            </li>
            <li sc-tree-item [parent]="tree.tree" value="configuration">
              <button sc-tree-item-trigger>
                <svg sc-tree-item-trigger-icon si-chevron-right-icon />
                <span>Configuration</span>
              </button>
            </li>
          </ul>
        </li>
        <li sc-tree-item [parent]="tree.tree" value="components">
          <button sc-tree-item-trigger>
            <svg sc-tree-item-trigger-icon si-chevron-right-icon />
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
          </button>
          <ul sc-tree-item-group>
            <li sc-tree-item [parent]="tree.tree" value="button">
              <button sc-tree-item-trigger>
                <svg sc-tree-item-trigger-icon si-chevron-right-icon />
                <span>Button</span>
              </button>
            </li>
            <li sc-tree-item [parent]="tree.tree" value="input">
              <button sc-tree-item-trigger>
                <svg sc-tree-item-trigger-icon si-chevron-right-icon />
                <span>Input</span>
              </button>
            </li>
            <li sc-tree-item [parent]="tree.tree" value="select">
              <button sc-tree-item-trigger>
                <svg sc-tree-item-trigger-icon si-chevron-right-icon />
                <span>Select</span>
              </button>
            </li>
          </ul>
        </li>
        <li sc-tree-item [parent]="tree.tree" value="api-reference">
          <button sc-tree-item-trigger>
            <svg sc-tree-item-trigger-icon si-chevron-right-icon />
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
          </button>
          <ul sc-tree-item-group>
            <li sc-tree-item [parent]="tree.tree" value="overview">
              <button sc-tree-item-trigger>
                <svg sc-tree-item-trigger-icon si-chevron-right-icon />
                <span>Overview</span>
              </button>
            </li>
            <li sc-tree-item [parent]="tree.tree" value="hooks">
              <button sc-tree-item-trigger>
                <svg sc-tree-item-trigger-icon si-chevron-right-icon />
                <span>Hooks</span>
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationTreeDemo {}
