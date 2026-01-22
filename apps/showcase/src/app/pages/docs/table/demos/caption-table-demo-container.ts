import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { CaptionTableDemo } from './caption-table-demo';

@Component({
  selector: 'app-caption-table-demo-container',
  imports: [DemoContainer, CaptionTableDemo],
  template: `
    <app-demo-container title="With Caption" [code]="code">
      <app-caption-table-demo />
    </app-demo-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CaptionTableDemoContainer {
  readonly code = `<table sc-table>
  <caption sc-table-caption>A list of your recent invoices.</caption>
  <thead sc-table-header>
    <tr sc-table-row>
      <th sc-table-head class="w-[100px]">Invoice</th>
      <th sc-table-head>Status</th>
      <th sc-table-head>Method</th>
      <th sc-table-head class="text-right">Amount</th>
    </tr>
  </thead>
  <tbody sc-table-body>
    <tr sc-table-row>
      <td sc-table-cell class="font-medium">INV001</td>
      <td sc-table-cell>Paid</td>
      <td sc-table-cell>Credit Card</td>
      <td sc-table-cell class="text-right">$250.00</td>
    </tr>
  </tbody>
</table>`;
}
