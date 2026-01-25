import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { EllipsisPaginationDemo } from './ellipsis-pagination-demo';

@Component({
  selector: 'app-ellipsis-pagination-demo-container',
  imports: [DemoContainer, EllipsisPaginationDemo],
  template: `
    <app-demo-container title="With Ellipsis" [code]="code">
      <app-ellipsis-pagination-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EllipsisPaginationDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScPagination,
  ScPaginationContent,
  ScPaginationEllipsis,
  ScPaginationItem,
  ScPaginationLink,
  ScPaginationNext,
  ScPaginationPrevious,
} from '@semantic-components/ui';

@Component({
  selector: 'app-ellipsis-pagination-demo',
  imports: [
    ScPagination,
    ScPaginationContent,
    ScPaginationEllipsis,
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
          <span sc-pagination-ellipsis></span>
        </li>
        <li sc-pagination-item>
          <a sc-pagination-link href="#">10</a>
        </li>
        <li sc-pagination-item>
          <a sc-pagination-next href="#"></a>
        </li>
      </ul>
    </nav>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EllipsisPaginationDemo {}`;
}
