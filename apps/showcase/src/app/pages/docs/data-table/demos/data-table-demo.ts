import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import {
  ColumnDef,
  ScDataTable,
  ScDataTableBody,
  ScDataTableCell,
  ScDataTableColumnToggle,
  ScDataTableFilter,
  ScDataTableHead,
  ScDataTableHeader,
  ScDataTablePagination,
  ScDataTableRow,
} from '@semantic-components/ui';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  createdAt: Date;
}

const SAMPLE_DATA: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    status: 'active',
    createdAt: new Date('2024-01-15'),
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'Editor',
    status: 'active',
    createdAt: new Date('2024-02-20'),
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob@example.com',
    role: 'Viewer',
    status: 'inactive',
    createdAt: new Date('2024-01-10'),
  },
  {
    id: 4,
    name: 'Alice Brown',
    email: 'alice@example.com',
    role: 'Editor',
    status: 'pending',
    createdAt: new Date('2024-03-05'),
  },
  {
    id: 5,
    name: 'Charlie Wilson',
    email: 'charlie@example.com',
    role: 'Admin',
    status: 'active',
    createdAt: new Date('2024-02-28'),
  },
  {
    id: 6,
    name: 'Diana Miller',
    email: 'diana@example.com',
    role: 'Viewer',
    status: 'active',
    createdAt: new Date('2024-01-22'),
  },
  {
    id: 7,
    name: 'Edward Davis',
    email: 'edward@example.com',
    role: 'Editor',
    status: 'inactive',
    createdAt: new Date('2024-03-12'),
  },
  {
    id: 8,
    name: 'Fiona Garcia',
    email: 'fiona@example.com',
    role: 'Viewer',
    status: 'pending',
    createdAt: new Date('2024-02-14'),
  },
  {
    id: 9,
    name: 'George Martinez',
    email: 'george@example.com',
    role: 'Admin',
    status: 'active',
    createdAt: new Date('2024-01-30'),
  },
  {
    id: 10,
    name: 'Hannah Lee',
    email: 'hannah@example.com',
    role: 'Editor',
    status: 'active',
    createdAt: new Date('2024-03-01'),
  },
  {
    id: 11,
    name: 'Ivan Taylor',
    email: 'ivan@example.com',
    role: 'Viewer',
    status: 'inactive',
    createdAt: new Date('2024-02-08'),
  },
  {
    id: 12,
    name: 'Julia Anderson',
    email: 'julia@example.com',
    role: 'Editor',
    status: 'active',
    createdAt: new Date('2024-03-18'),
  },
];

@Component({
  selector: 'app-sc-data-table-demo',
  imports: [
    ScDataTable,
    ScDataTableHeader,
    ScDataTableBody,
    ScDataTableRow,
    ScDataTableHead,
    ScDataTableCell,
    ScDataTableFilter,
    ScDataTableColumnToggle,
    ScDataTablePagination,
  ],
  template: `
    <div class="space-y-8">
      <!-- Full Featured Example -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Full Featured Data Table</h3>
        <div sc-data-table [data]="data" [columns]="columns">
          <!-- Toolbar -->
          <div class="flex items-center justify-between py-4">
            <input
              sc-data-table-filter
              placeholder="Search all columns..."
              class="max-w-sm"
            />
            <div sc-data-table-column-toggle></div>
          </div>

          <!-- Table -->
          <div class="rounded-md border">
            <table class="w-full caption-bottom text-sm">
              <thead sc-data-table-header>
                <tr>
                  <th sc-data-table-head class="w-[50px]">
                    <input
                      type="checkbox"
                      class="size-4 rounded border-primary"
                      [checked]="isAllSelected()"
                      [indeterminate]="isSomeSelected()"
                      (change)="toggleAllSelection()"
                    />
                  </th>
                  <th sc-data-table-head columnId="name" [sortable]="true">
                    Name
                  </th>
                  <th sc-data-table-head columnId="email" [sortable]="true">
                    Email
                  </th>
                  <th sc-data-table-head columnId="role" [sortable]="true">
                    Role
                  </th>
                  <th sc-data-table-head columnId="status" [sortable]="true">
                    Status
                  </th>
                  <th sc-data-table-head columnId="createdAt" [sortable]="true">
                    Created
                  </th>
                  <th sc-data-table-head class="w-[80px]">Actions</th>
                </tr>
              </thead>
              <tbody sc-data-table-body>
                @for (row of paginatedData(); track row.id; let i = $index) {
                  <tr
                    sc-data-table-row
                    [selected]="rowSelection().has(getRowIndex(row))"
                  >
                    <td sc-data-table-cell>
                      <input
                        type="checkbox"
                        class="size-4 rounded border-primary"
                        [checked]="rowSelection().has(getRowIndex(row))"
                        (change)="toggleRowSelection(getRowIndex(row))"
                      />
                    </td>
                    <td sc-data-table-cell class="font-medium">
                      {{ row.name }}
                    </td>
                    <td sc-data-table-cell>{{ row.email }}</td>
                    <td sc-data-table-cell>
                      <span
                        class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset"
                        [class]="getRoleBadgeClass(row.role)"
                      >
                        {{ row.role }}
                      </span>
                    </td>
                    <td sc-data-table-cell>
                      <span
                        class="inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium"
                        [class]="getStatusBadgeClass(row.status)"
                      >
                        <span
                          class="size-1.5 rounded-full"
                          [class]="getStatusDotClass(row.status)"
                        ></span>
                        {{ row.status }}
                      </span>
                    </td>
                    <td sc-data-table-cell>{{ formatDate(row.createdAt) }}</td>
                    <td sc-data-table-cell>
                      <button
                        type="button"
                        class="inline-flex size-8 items-center justify-center rounded-md hover:bg-muted"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          class="size-4"
                        >
                          <circle cx="12" cy="12" r="1" />
                          <circle cx="19" cy="12" r="1" />
                          <circle cx="5" cy="12" r="1" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                } @empty {
                  <tr>
                    <td
                      colspan="7"
                      class="h-24 text-center text-muted-foreground"
                    >
                      No results found.
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>

          <!-- Pagination -->
          <div
            sc-data-table-pagination
            [(pageSize)]="pageSize"
            [(currentPage)]="currentPage"
          ></div>
        </div>
      </div>

      <!-- Simple Table -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Simple Table (No Selection)</h3>
        <div sc-data-table [data]="simpleData" [columns]="simpleColumns">
          <div class="rounded-md border">
            <table class="w-full caption-bottom text-sm">
              <thead sc-data-table-header>
                <tr>
                  <th sc-data-table-head columnId="name" [sortable]="true">
                    Name
                  </th>
                  <th sc-data-table-head columnId="email" [sortable]="true">
                    Email
                  </th>
                  <th sc-data-table-head columnId="role" [sortable]="true">
                    Role
                  </th>
                </tr>
              </thead>
              <tbody sc-data-table-body>
                @for (row of simpleData.slice(0, 5); track row.id) {
                  <tr sc-data-table-row>
                    <td sc-data-table-cell class="font-medium">
                      {{ row.name }}
                    </td>
                    <td sc-data-table-cell>{{ row.email }}</td>
                    <td sc-data-table-cell>{{ row.role }}</td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Filtering Only -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">With Filter Only</h3>
        <div
          #filterTable="scDataTable"
          sc-data-table
          [data]="data"
          [columns]="columns"
        >
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
                @for (
                  row of filterTable.filteredData().slice(0, 5);
                  track row.id
                ) {
                  <tr sc-data-table-row>
                    <td sc-data-table-cell class="font-medium">
                      {{ row.name }}
                    </td>
                    <td sc-data-table-cell>{{ row.email }}</td>
                    <td sc-data-table-cell>{{ row.role }}</td>
                    <td sc-data-table-cell>{{ row.status }}</td>
                  </tr>
                } @empty {
                  <tr>
                    <td
                      colspan="4"
                      class="h-24 text-center text-muted-foreground"
                    >
                      No results found.
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScDataTableDemo {
  readonly data = SAMPLE_DATA;
  readonly simpleData = SAMPLE_DATA;

  readonly columns: ColumnDef<User>[] = [
    { id: 'name', header: 'Name', accessorKey: 'name', enableSorting: true },
    { id: 'email', header: 'Email', accessorKey: 'email', enableSorting: true },
    { id: 'role', header: 'Role', accessorKey: 'role', enableSorting: true },
    {
      id: 'status',
      header: 'Status',
      accessorKey: 'status',
      enableSorting: true,
    },
    {
      id: 'createdAt',
      header: 'Created',
      accessorKey: 'createdAt',
      enableSorting: true,
    },
  ];

  readonly simpleColumns: ColumnDef<User>[] = [
    { id: 'name', header: 'Name', accessorKey: 'name', enableSorting: true },
    { id: 'email', header: 'Email', accessorKey: 'email', enableSorting: true },
    { id: 'role', header: 'Role', accessorKey: 'role', enableSorting: true },
  ];

  readonly rowSelection = signal<Set<number>>(new Set());
  readonly pageSize = signal(5);
  readonly currentPage = signal(1);

  readonly paginatedData = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize();
    const end = start + this.pageSize();
    return this.data.slice(start, end);
  });

  getRowIndex(row: User): number {
    return this.data.findIndex((r) => r.id === row.id);
  }

  isAllSelected(): boolean {
    return (
      this.data.length > 0 && this.rowSelection().size === this.data.length
    );
  }

  isSomeSelected(): boolean {
    const size = this.rowSelection().size;
    return size > 0 && size < this.data.length;
  }

  toggleAllSelection(): void {
    if (this.isAllSelected()) {
      this.rowSelection.set(new Set());
    } else {
      this.rowSelection.set(new Set(this.data.map((_, i) => i)));
    }
  }

  toggleRowSelection(index: number): void {
    const selection = new Set(this.rowSelection());
    if (selection.has(index)) {
      selection.delete(index);
    } else {
      selection.add(index);
    }
    this.rowSelection.set(selection);
  }

  getRoleBadgeClass(role: string): string {
    switch (role) {
      case 'Admin':
        return 'bg-purple-50 text-purple-700 ring-purple-700/10 dark:bg-purple-400/10 dark:text-purple-400 dark:ring-purple-400/20';
      case 'Editor':
        return 'bg-blue-50 text-blue-700 ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/20';
      default:
        return 'bg-gray-50 text-gray-600 ring-gray-500/10 dark:bg-gray-400/10 dark:text-gray-400 dark:ring-gray-400/20';
    }
  }

  getStatusBadgeClass(status: string): string {
    switch (status) {
      case 'active':
        return 'bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400';
      case 'inactive':
        return 'bg-gray-100 text-gray-700 dark:bg-gray-500/10 dark:text-gray-400';
      case 'pending':
        return 'bg-yellow-50 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  }

  getStatusDotClass(status: string): string {
    switch (status) {
      case 'active':
        return 'bg-green-500';
      case 'inactive':
        return 'bg-gray-400';
      case 'pending':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-400';
    }
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }
}
