import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ColumnDef,
  ScDataTable,
  ScDataTableBody,
  ScDataTableCell,
  ScDataTableHead,
  ScDataTableHeader,
  ScDataTableRow,
} from '@semantic-components/ui';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const SAMPLE_DATA: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Viewer' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor' },
  { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'Admin' },
];

@Component({
  selector: 'app-simple-data-table-demo',
  imports: [
    ScDataTable,
    ScDataTableHeader,
    ScDataTableBody,
    ScDataTableRow,
    ScDataTableHead,
    ScDataTableCell,
  ],
  template: `
    <div sc-data-table [data]="data" [columns]="columns">
      <div class="rounded-md border">
        <table class="w-full caption-bottom text-sm">
          <thead sc-data-table-header>
            <tr>
              <th sc-data-table-head columnId="name" [sortable]="true">Name</th>
              <th sc-data-table-head columnId="email" [sortable]="true">Email</th>
              <th sc-data-table-head columnId="role" [sortable]="true">Role</th>
            </tr>
          </thead>
          <tbody sc-data-table-body>
            @for (row of data; track row.id) {
              <tr sc-data-table-row>
                <td sc-data-table-cell class="font-medium">{{ row.name }}</td>
                <td sc-data-table-cell>{{ row.email }}</td>
                <td sc-data-table-cell>{{ row.role }}</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleDataTableDemo {
  readonly data = SAMPLE_DATA;

  readonly columns: ColumnDef<User>[] = [
    { id: 'name', header: 'Name', accessorKey: 'name', enableSorting: true },
    { id: 'email', header: 'Email', accessorKey: 'email', enableSorting: true },
    { id: 'role', header: 'Role', accessorKey: 'role', enableSorting: true },
  ];
}
