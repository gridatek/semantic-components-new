import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScDataTableDemo } from './data-table-demo';

@Component({
  selector: 'app-data-table-demo-container',
  imports: [DemoContainer, ScDataTableDemo],
  template: `
    <app-demo-container title="DataTable" [code]="code">
      <app-sc-data-table-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DataTableDemoContainer {
  readonly code = '';
}
