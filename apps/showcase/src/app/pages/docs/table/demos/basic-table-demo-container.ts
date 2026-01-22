import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { BasicTableDemo } from './basic-table-demo';

@Component({
  selector: 'app-basic-table-demo-container',
  imports: [DemoContainer, BasicTableDemo],
  template: `
    <app-demo-container title="Basic Table" [code]="code">
      <app-basic-table-demo />
    </app-demo-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicTableDemoContainer {
  readonly code = `<table sc-table>
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
    <tr sc-table-row>
      <td sc-table-cell class="font-medium">INV002</td>
      <td sc-table-cell>Pending</td>
      <td sc-table-cell>PayPal</td>
      <td sc-table-cell class="text-right">$150.00</td>
    </tr>
  </tbody>
</table>`;
}
