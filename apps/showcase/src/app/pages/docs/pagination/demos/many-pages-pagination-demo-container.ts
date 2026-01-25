import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ManyPagesPaginationDemo } from './many-pages-pagination-demo';

@Component({
  selector: 'app-many-pages-pagination-demo-container',
  imports: [DemoContainer, ManyPagesPaginationDemo],
  template: `
    <app-demo-container title="Many Pages" [code]="code">
      <app-many-pages-pagination-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManyPagesPaginationDemoContainer {
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
  selector: 'app-many-pages-pagination-demo',
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
          <span sc-pagination-ellipsis></span>
        </li>
        <li sc-pagination-item>
          <a sc-pagination-link href="#">4</a>
        </li>
        <li sc-pagination-item>
          <a sc-pagination-link href="#" [isActive]="true">5</a>
        </li>
        <li sc-pagination-item>
          <a sc-pagination-link href="#">6</a>
        </li>
        <li sc-pagination-item>
          <span sc-pagination-ellipsis></span>
        </li>
        <li sc-pagination-item>
          <a sc-pagination-link href="#">20</a>
        </li>
        <li sc-pagination-item>
          <a sc-pagination-next href="#"></a>
        </li>
      </ul>
    </nav>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManyPagesPaginationDemo {}`;
}
