import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScTree,
  ScTreeItem,
  ScTreeItemTrigger,
  ScTreeItemGroup,
} from '@semantic-components/ui';

@Component({
  selector: 'app-simple-tree-demo',
  imports: [ScTree, ScTreeItem, ScTreeItemTrigger, ScTreeItemGroup],
  template: `
    <div class="max-w-sm rounded-lg border p-4">
      <ul sc-tree #tree="scTree">
        <li sc-tree-item [parent]="tree.tree" value="fruits" [expanded]="true">
          <button sc-tree-item-trigger>Fruits</button>
          <ul sc-tree-item-group>
            <li sc-tree-item [parent]="tree.tree" value="apple">
              <button sc-tree-item-trigger>Apple</button>
            </li>
            <li sc-tree-item [parent]="tree.tree" value="banana">
              <button sc-tree-item-trigger>Banana</button>
            </li>
            <li sc-tree-item [parent]="tree.tree" value="orange">
              <button sc-tree-item-trigger>Orange</button>
            </li>
          </ul>
        </li>
        <li sc-tree-item [parent]="tree.tree" value="vegetables">
          <button sc-tree-item-trigger>Vegetables</button>
          <ul sc-tree-item-group>
            <li sc-tree-item [parent]="tree.tree" value="carrot">
              <button sc-tree-item-trigger>Carrot</button>
            </li>
            <li sc-tree-item [parent]="tree.tree" value="broccoli">
              <button sc-tree-item-trigger>Broccoli</button>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleTreeDemo {}
