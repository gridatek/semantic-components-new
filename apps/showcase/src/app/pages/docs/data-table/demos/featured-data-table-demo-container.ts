import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { FeaturedDataTableDemo } from './featured-data-table-demo';

@Component({
  selector: 'app-featured-data-table-demo-container',
  imports: [DemoContainer, FeaturedDataTableDemo],
  template: `
    <app-demo-container title="Full Featured" [code]="code">
      <app-featured-data-table-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedDataTableDemoContainer {
  readonly code = `// Full featured data table with selection, sorting, filtering, pagination, and column toggle
// See the source code for the complete implementation`;
}
