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
export class ScPaginationDemoContainer {
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
  selector: 'app-sc-pagination-demo',
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
    <div class="space-y-8">
      <!-- Basic Pagination -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Basic Pagination</h3>
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
      </div>

      <!-- With Ellipsis -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">With Ellipsis</h3>
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
      </div>

      <!-- Many Pages -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Many Pages</h3>
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
      </div>

      <!-- With Buttons -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">With Buttons (No Links)</h3>
        <nav sc-pagination>
          <ul sc-pagination-content>
            <li sc-pagination-item>
              <button sc-pagination-previous></button>
            </li>
            <li sc-pagination-item>
              <button sc-pagination-link>1</button>
            </li>
            <li sc-pagination-item>
              <button sc-pagination-link [isActive]="true">2</button>
            </li>
            <li sc-pagination-item>
              <button sc-pagination-link>3</button>
            </li>
            <li sc-pagination-item>
              <button sc-pagination-next></button>
            </li>
          </ul>
        </nav>
      </div>

      <!-- First Page -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">First Page (Previous Disabled)</h3>
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
      </div>

      <!-- Last Page -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Last Page (Next Disabled)</h3>
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
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPaginationDemo {}`;
}
