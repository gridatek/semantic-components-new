import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScPagination,
  ScPaginationContent,
  ScPaginationItem,
  ScPaginationLink,
  ScPaginationNext,
  ScPaginationPrevious,
} from '@semantic-components/ui';

@Component({
  selector: 'app-buttons-pagination-demo',
  imports: [
    ScPagination,
    ScPaginationContent,
    ScPaginationItem,
    ScPaginationLink,
    ScPaginationNext,
    ScPaginationPrevious,
  ],
  template: `
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
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonsPaginationDemo {}
