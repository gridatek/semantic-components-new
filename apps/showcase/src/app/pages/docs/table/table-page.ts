import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScTable,
  ScTableBody,
  ScTableCaption,
  ScTableCell,
  ScTableFooter,
  ScTableHead,
  ScTableHeader,
  ScTableRow,
} from '@semantic-components/ui';

@Component({
  selector: 'app-table-page',
  imports: [
    ScTable,
    ScTableBody,
    ScTableCaption,
    ScTableCell,
    ScTableFooter,
    ScTableHead,
    ScTableHeader,
    ScTableRow,
  ],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Table</h1>
        <p class="text-muted-foreground">A responsive table component.</p>
      </div>

      <div class="space-y-4">
        <div>
          <div class="space-y-8">
            <!-- Basic Table -->
            <div class="space-y-4">
              <h3 class="text-sm font-medium">Basic Table</h3>
              <table sc-table>
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
                  <tr sc-table-row>
                    <td sc-table-cell class="font-medium">INV003</td>
                    <td sc-table-cell>Unpaid</td>
                    <td sc-table-cell>Bank Transfer</td>
                    <td sc-table-cell class="text-right">$350.00</td>
                  </tr>
                  <tr sc-table-row>
                    <td sc-table-cell class="font-medium">INV004</td>
                    <td sc-table-cell>Paid</td>
                    <td sc-table-cell>Credit Card</td>
                    <td sc-table-cell class="text-right">$450.00</td>
                  </tr>
                  <tr sc-table-row>
                    <td sc-table-cell class="font-medium">INV005</td>
                    <td sc-table-cell>Paid</td>
                    <td sc-table-cell>PayPal</td>
                    <td sc-table-cell class="text-right">$550.00</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Table with Caption -->
            <div class="space-y-4">
              <h3 class="text-sm font-medium">With Caption</h3>
              <table sc-table>
                <caption sc-table-caption>
                  A list of your recent invoices.
                </caption>
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
              </table>
            </div>

            <!-- Table with Footer -->
            <div class="space-y-4">
              <h3 class="text-sm font-medium">With Footer</h3>
              <table sc-table>
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
                  <tr sc-table-row>
                    <td sc-table-cell class="font-medium">INV003</td>
                    <td sc-table-cell>Paid</td>
                    <td sc-table-cell>Bank Transfer</td>
                    <td sc-table-cell class="text-right">$350.00</td>
                  </tr>
                </tbody>
                <tfoot sc-table-footer>
                  <tr sc-table-row>
                    <td sc-table-cell colspan="3">Total</td>
                    <td sc-table-cell class="text-right">$750.00</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <!-- Users Table -->
            <div class="space-y-4">
              <h3 class="text-sm font-medium">Users Table</h3>
              <div class="rounded-md border">
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
                        <div class="text-sm text-muted-foreground">
                          Engineer
                        </div>
                      </td>
                      <td sc-table-cell>john&#64;example.com</td>
                      <td sc-table-cell>
                        <span
                          class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                        >
                          Admin
                        </span>
                      </td>
                      <td sc-table-cell class="text-right">
                        <button
                          class="text-sm text-muted-foreground hover:text-foreground"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                    <tr sc-table-row>
                      <td sc-table-cell>
                        <div class="font-medium">Jane Smith</div>
                        <div class="text-sm text-muted-foreground">
                          Designer
                        </div>
                      </td>
                      <td sc-table-cell>jane&#64;example.com</td>
                      <td sc-table-cell>
                        <span
                          class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                        >
                          Member
                        </span>
                      </td>
                      <td sc-table-cell class="text-right">
                        <button
                          class="text-sm text-muted-foreground hover:text-foreground"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                    <tr sc-table-row>
                      <td sc-table-cell>
                        <div class="font-medium">Bob Johnson</div>
                        <div class="text-sm text-muted-foreground">Manager</div>
                      </td>
                      <td sc-table-cell>bob&#64;example.com</td>
                      <td sc-table-cell>
                        <span
                          class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                        >
                          Owner
                        </span>
                      </td>
                      <td sc-table-cell class="text-right">
                        <button
                          class="text-sm text-muted-foreground hover:text-foreground"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TablePage {}
