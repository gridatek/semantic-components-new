import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScTreeViewDemo } from './tree-view-demo';

@Component({
  selector: 'app-tree-view-demo-container',
  imports: [DemoContainer, ScTreeViewDemo],
  template: `
    <app-demo-container title="TreeView" [code]="code">
      <app-sc-tree-view-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TreeViewDemoContainer {
  readonly code = '';
}
