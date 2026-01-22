import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../components/demo-container/demo-container';
import { BasicTableDemo } from './demos/basic-table-demo';
import { CaptionTableDemo } from './demos/caption-table-demo';
import { FooterTableDemo } from './demos/footer-table-demo';
import { UsersTableDemo } from './demos/users-table-demo';

@Component({
  selector: 'app-table-page',
  imports: [
    DemoContainer,
    BasicTableDemo,
    CaptionTableDemo,
    FooterTableDemo,
    UsersTableDemo,
  ],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Table</h1>
        <p class="text-muted-foreground">A responsive table component.</p>
      </div>

      <div class="space-y-8">
        <app-demo-container title="Basic Table" [code]="basicTableCode">
          <app-basic-table-demo />
        </app-demo-container>

        <app-demo-container title="With Caption" [code]="captionTableCode">
          <app-caption-table-demo />
        </app-demo-container>

        <app-demo-container title="With Footer" [code]="footerTableCode">
          <app-footer-table-demo />
        </app-demo-container>

        <app-demo-container title="Users Table" [code]="usersTableCode">
          <app-users-table-demo />
        </app-demo-container>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TablePage {
  readonly basicTableCode = `<table sc-table>
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

  readonly captionTableCode = `<table sc-table>
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

  readonly footerTableCode = `<table sc-table>
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
  <tfoot sc-table-footer>
    <tr sc-table-row>
      <td sc-table-cell colspan="3">Total</td>
      <td sc-table-cell class="text-right">$250.00</td>
    </tr>
  </tfoot>
</table>`;

  readonly usersTableCode = `<div class="rounded-md border">
  <table sc-table>
    <thead sc-table-header>
      <tr sc-table-row>
        <th sc-table-head>Name</th>
        <th sc-table-head>Email</th>
        <th sc-table-head>Role</th>
        <th sc-table-head class="text-right">Actions</th>
      </tr>
    </thead>
    <tbody sc-table-body>
      <tr sc-table-row>
        <td sc-table-cell>
          <div class="font-medium">John Doe</div>
          <div class="text-sm text-muted-foreground">Engineer</div>
        </td>
        <td sc-table-cell>john@example.com</td>
        <td sc-table-cell>
          <span class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
            Admin
          </span>
        </td>
        <td sc-table-cell class="text-right">
          <button class="text-sm text-muted-foreground hover:text-foreground">
            Edit
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>`;
}
