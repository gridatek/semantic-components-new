import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { FilterDataTableDemo } from './filter-data-table-demo';

@Component({
  selector: 'app-filter-data-table-demo-container',
  imports: [DemoContainer, FilterDataTableDemo],
  template: `
    <app-demo-container title="With Filter" [code]="code">
      <app-filter-data-table-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterDataTableDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ColumnDef,
  ScDataTable,
  ScDataTableBody,
  ScDataTableCell,
  ScDataTableFilter,
  ScDataTableHead,
  ScDataTableHeader,
  ScDataTableRow,
} from '@semantic-components/ui';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
}

const SAMPLE_DATA: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'active' },
  // ... more data
];

@Component({
  selector: 'app-filter-data-table-demo',
  imports: [
    ScDataTable,
    ScDataTableHeader,
    ScDataTableBody,
    ScDataTableRow,
    ScDataTableHead,
    ScDataTableCell,
    ScDataTableFilter,
  ],
  template: \`
    <div #filterTable="scDataTable" sc-data-table [data]="data" [columns]="columns">
      <div class="py-4">
        <input
          sc-data-table-filter
          placeholder="Type to filter..."
          class="max-w-sm"
        />
      </div>
      <div class="rounded-md border">
        <table class="w-full caption-bottom text-sm">
          <thead sc-data-table-header>
            <tr>
              <th sc-data-table-head>Name</th>
              <th sc-data-table-head>Email</th>
              <th sc-data-table-head>Role</th>
              <th sc-data-table-head>Status</th>
            </tr>
          </thead>
          <tbody sc-data-table-body>
            @for (row of filterTable.filteredData().slice(0, 5); track row.id) {
              <tr sc-data-table-row>
                <td sc-data-table-cell class="font-medium">{{ row.name }}</td>
                <td sc-data-table-cell>{{ row.email }}</td>
                <td sc-data-table-cell>{{ row.role }}</td>
                <td sc-data-table-cell>{{ row.status }}</td>
              </tr>
            } @empty {
              <tr>
                <td colspan="4" class="h-24 text-center text-muted-foreground">
                  No results found.
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterDataTableDemo {
  readonly data = SAMPLE_DATA;

  readonly columns: ColumnDef<User>[] = [
    { id: 'name', header: 'Name', accessorKey: 'name' },
    { id: 'email', header: 'Email', accessorKey: 'email' },
    { id: 'role', header: 'Role', accessorKey: 'role' },
    { id: 'status', header: 'Status', accessorKey: 'status' },
  ];
}`;
}
