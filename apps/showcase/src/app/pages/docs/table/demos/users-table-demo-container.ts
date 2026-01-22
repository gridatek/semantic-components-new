import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { UsersTableDemo } from './users-table-demo';

@Component({
  selector: 'app-users-table-demo-container',
  imports: [DemoContainer, UsersTableDemo],
  template: `
    <app-demo-container title="Users Table" [code]="code" language="typescript">
      <app-users-table-demo />
    </app-demo-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UsersTableDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScTable,
  ScTableBody,
  ScTableCell,
  ScTableHead,
  ScTableHeader,
  ScTableRow,
} from '@semantic-components/ui';

@Component({
  selector: 'app-users-table-demo',
  imports: [
    ScTable,
    ScTableBody,
    ScTableCell,
    ScTableHead,
    ScTableHeader,
    ScTableRow,
  ],
  template: \`
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
              <div class="text-sm text-muted-foreground">Engineer</div>
            </td>
            <td sc-table-cell>john@example.com</td>
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
              <div class="text-sm text-muted-foreground">Designer</div>
            </td>
            <td sc-table-cell>jane@example.com</td>
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
            <td sc-table-cell>bob@example.com</td>
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
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersTableDemo {}`;
}
