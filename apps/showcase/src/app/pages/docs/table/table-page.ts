import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicTableDemo } from './demos/basic-table-demo';
import { CaptionTableDemo } from './demos/caption-table-demo';
import { FooterTableDemo } from './demos/footer-table-demo';
import { UsersTableDemo } from './demos/users-table-demo';

@Component({
  selector: 'app-table-page',
  imports: [BasicTableDemo, CaptionTableDemo, FooterTableDemo, UsersTableDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Table</h1>
        <p class="text-muted-foreground">A responsive table component.</p>
      </div>

      <div class="space-y-8">
        <!-- Basic Table -->
        <div class="space-y-4">
          <h3 class="text-sm font-medium">Basic Table</h3>
          <app-basic-table-demo />
        </div>

        <!-- Table with Caption -->
        <div class="space-y-4">
          <h3 class="text-sm font-medium">With Caption</h3>
          <app-caption-table-demo />
        </div>

        <!-- Table with Footer -->
        <div class="space-y-4">
          <h3 class="text-sm font-medium">With Footer</h3>
          <app-footer-table-demo />
        </div>

        <!-- Users Table -->
        <div class="space-y-4">
          <h3 class="text-sm font-medium">Users Table</h3>
          <app-users-table-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TablePage {}
