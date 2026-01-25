import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { BasicPaginationDemo } from './basic-pagination-demo';

@Component({
  selector: 'app-basic-pagination-demo-container',
  imports: [DemoContainer, BasicPaginationDemo],
  template: `
    <app-demo-container title="Basic" [code]="code">
      <app-basic-pagination-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicPaginationDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScPagination,
  ScPaginationContent,
  ScPaginationItem,
  ScPaginationLink,
  ScPaginationNext,
  ScPaginationPrevious,
} from '@semantic-components/ui';

@Component({
  selector: 'app-basic-pagination-demo',
  imports: [
    ScPagination,
    ScPaginationContent,
    ScPaginationItem,
    ScPaginationLink,
    ScPaginationNext,
    ScPaginationPrevious,
  ],
  template: \`
    <nav sc-pagination>
      <ul sc-pagination-content>
        <li sc-pagination-item>
          <a sc-pagination-previous href="#"></a>
        </li>
        <li sc-pagination-item>
          <a sc-pagination-link href="#">1</a>
        </li>
        <li sc-pagination-item>
          <a sc-pagination-link href="#" [isActive]="true">2</a>
        </li>
        <li sc-pagination-item>
          <a sc-pagination-link href="#">3</a>
        </li>
        <li sc-pagination-item>
          <a sc-pagination-next href="#"></a>
        </li>
      </ul>
    </nav>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicPaginationDemo {}`;
}
