import { ChangeDetectionStrategy, Component } from '@angular/core';
import DataTableDemoContainer from './demos/data-table-demo-container';

@Component({
  selector: 'app-data-table-page',
  imports: [DataTableDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">DataTable</h1>
        <p class="text-muted-foreground">
          Advanced table component with sorting, filtering, column visibility,
          row selection, and pagination.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-data-table-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DataTablePage {}
