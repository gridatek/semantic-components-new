import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScCodeViewer } from '@semantic-components/ui';
import BasicTableDemoContainer from './demos/basic-table-demo-container';
import CaptionTableDemoContainer from './demos/caption-table-demo-container';
import FooterTableDemoContainer from './demos/footer-table-demo-container';
import UsersTableDemoContainer from './demos/users-table-demo-container';

@Component({
  selector: 'app-table-page',
  imports: [
    ScCodeViewer,
    BasicTableDemoContainer,
    CaptionTableDemoContainer,
    FooterTableDemoContainer,
    UsersTableDemoContainer,
  ],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Table</h1>
        <p class="text-muted-foreground">A responsive table component.</p>
      </div>

      <section class="space-y-4">
        <h2 class="text-xl font-semibold tracking-tight">Usage</h2>
        <sc-code-viewer [code]="usageCode" language="angular-ts" />
      </section>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-basic-table-demo-container />
        <app-caption-table-demo-container />
        <app-footer-table-demo-container />
        <app-users-table-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TablePage {
  readonly usageCode = `import {
  ScTable,
  ScTableBody,
  ScTableCaption,
  ScTableCell,
  ScTableFooter,
  ScTableHeaderCell,
  ScTableHeader,
  ScTableRow,
} from '@semantic-components/ui';

@Component({
  imports: [
    ScTable,
    ScTableBody,
    ScTableCaption,
    ScTableCell,
    ScTableFooter,
    ScTableHeaderCell,
    ScTableHeader,
    ScTableRow,
  ],
  template: \`
    <table sc-table>
      <caption sc-table-caption>A list of your recent invoices.</caption>
      <thead sc-table-header>
        <tr sc-table-row>
          <th sc-table-head>Invoice</th>
          <th sc-table-head>Status</th>
          <th sc-table-head class="text-right">Amount</th>
        </tr>
      </thead>
      <tbody sc-table-body>
        <tr sc-table-row>
          <td sc-table-cell>INV001</td>
          <td sc-table-cell>Paid</td>
          <td sc-table-cell class="text-right">$250.00</td>
        </tr>
      </tbody>
      <tfoot sc-table-footer>
        <tr sc-table-row>
          <td sc-table-cell colspan="2">Total</td>
          <td sc-table-cell class="text-right">$250.00</td>
        </tr>
      </tfoot>
    </table>
  \`,
})
export class My {}`;
}
