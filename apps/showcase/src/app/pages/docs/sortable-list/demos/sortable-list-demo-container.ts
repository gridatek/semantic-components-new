import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScSortableListDemo } from './sortable-list-demo';

@Component({
  selector: 'app-sortable-list-demo-container',
  imports: [DemoContainer, ScSortableListDemo],
  template: `
    <app-demo-container title="SortableList" [code]="code">
      <app-sc-sortable-list-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SortableListDemoContainer {
  readonly code = '';
}
