import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { FirstPagePaginationDemo } from './first-page-pagination-demo';

@Component({
  selector: 'app-first-page-pagination-demo-container',
  imports: [DemoContainer, FirstPagePaginationDemo],
  template: `
    <app-demo-container title="First Page" [code]="code">
      <app-first-page-pagination-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstPagePaginationDemoContainer {
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
  selector: 'app-first-page-pagination-demo',
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
          <button
            sc-pagination-previous
            class="pointer-events-none opacity-50"
          ></button>
        </li>
        <li sc-pagination-item>
          <a sc-pagination-link href="#" [isActive]="true">1</a>
        </li>
        <li sc-pagination-item>
          <a sc-pagination-link href="#">2</a>
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
export class FirstPagePaginationDemo {}`;
}
