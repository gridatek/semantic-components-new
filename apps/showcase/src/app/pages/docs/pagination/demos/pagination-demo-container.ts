import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScPaginationDemo } from './pagination-demo';

@Component({
  selector: 'app-pagination-demo-container',
  imports: [DemoContainer, ScPaginationDemo],
  template: `
    <app-demo-container title="Pagination" [code]="code">
      <app-sc-pagination-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PaginationDemoContainer {
  readonly code = '';
}
