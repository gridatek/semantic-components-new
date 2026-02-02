import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { SimpleTreeDemo } from './simple-tree-demo';

@Component({
  selector: 'app-simple-tree-demo-container',
  imports: [DemoContainer, SimpleTreeDemo],
  template: `
    <app-demo-container
      title="Simple"
      demoUrl="/demos/tree-view/simple-tree-demo"
      [code]="code"
    >
      <app-simple-tree-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleTreeDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScTree,
  ScTreeItem,
  ScTreeItemTrigger,
  ScTreeItemContent,
} from '@semantic-components/ui';

@Component({
  selector: 'app-simple-tree-demo',
  imports: [ScTree, ScTreeItem, ScTreeItemTrigger, ScTreeItemContent],
  template: \`
    <div class="max-w-sm rounded-lg border p-4">
      <div sc-tree>
        <div sc-tree-item [hasChildren]="true" [expanded]="true">
          <div sc-tree-item-trigger>Fruits</div>
          <div sc-tree-item-content>
            <div sc-tree-item>
              <div sc-tree-item-trigger>Apple</div>
            </div>
            <div sc-tree-item>
              <div sc-tree-item-trigger>Banana</div>
            </div>
            <div sc-tree-item>
              <div sc-tree-item-trigger>Orange</div>
            </div>
          </div>
        </div>
        <div sc-tree-item [hasChildren]="true">
          <div sc-tree-item-trigger>Vegetables</div>
          <div sc-tree-item-content>
            <div sc-tree-item>
              <div sc-tree-item-trigger>Carrot</div>
            </div>
            <div sc-tree-item>
              <div sc-tree-item-trigger>Broccoli</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleTreeDemo {}`;
}
