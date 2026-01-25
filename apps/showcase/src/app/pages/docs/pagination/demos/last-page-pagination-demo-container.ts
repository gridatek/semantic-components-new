import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { LastPagePaginationDemo } from './last-page-pagination-demo';

@Component({
  selector: 'app-last-page-pagination-demo-container',
  imports: [DemoContainer, LastPagePaginationDemo],
  template: `
    <app-demo-container title="Last Page" [code]="code">
      <app-last-page-pagination-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LastPagePaginationDemoContainer {
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
  selector: 'app-last-page-pagination-demo',
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
          <a sc-pagination-link href="#">8</a>
        </li>
        <li sc-pagination-item>
          <a sc-pagination-link href="#">9</a>
        </li>
        <li sc-pagination-item>
          <a sc-pagination-link href="#" [isActive]="true">10</a>
        </li>
        <li sc-pagination-item>
          <button
            sc-pagination-next
            class="pointer-events-none opacity-50"
          ></button>
        </li>
      </ul>
    </nav>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LastPagePaginationDemo {}`;
}
