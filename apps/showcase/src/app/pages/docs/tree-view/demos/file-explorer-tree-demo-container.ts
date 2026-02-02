import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { FileExplorerTreeDemo } from './file-explorer-tree-demo';

@Component({
  selector: 'app-file-explorer-tree-demo-container',
  imports: [DemoContainer, FileExplorerTreeDemo],
  template: `
    <app-demo-container
      title="File Explorer"
      demoUrl="/demos/tree-view/file-explorer-tree-demo"
      [code]="code"
    >
      <app-file-explorer-tree-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileExplorerTreeDemoContainer {
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
  selector: 'app-file-explorer-tree-demo',
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
            <svg sc-tree-item-icon class="text-blue-500">
              <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
            </svg>
            <span>src</span>
          </div>
          <div sc-tree-item-group>
            <!-- Nested folders and files... -->
          </div>
        </div>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileExplorerTreeDemo {}`;
}
