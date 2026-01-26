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
  ScPaginationList,
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
    ScPaginationList,
    ScPaginationEllipsis,
    ScPaginationItem,
    ScPaginationLink,
    ScPaginationNext,
    ScPaginationPrevious,
  ],
  template: \`
    <nav sc-pagination>
      <ul sc-pagination-list>
        <li sc-pagination-item>
          <button sc-pagination-previous disabled>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-4"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            <span>Previous</span>
          </button>
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
          <span sc-pagination-ellipsis>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-4"
            >
              <circle cx="12" cy="12" r="1" />
              <circle cx="19" cy="12" r="1" />
              <circle cx="5" cy="12" r="1" />
            </svg>
            <span class="sr-only">More pages</span>
          </span>
        </li>
        <li sc-pagination-item>
          <a sc-pagination-link href="#">10</a>
        </li>
        <li sc-pagination-item>
          <a sc-pagination-next href="#">
            <span>Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-4"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstPagePaginationDemo {}`;
}
