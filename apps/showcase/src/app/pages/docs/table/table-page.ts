import { ChangeDetectionStrategy, Component } from '@angular/core';
import BasicTableDemoContainer from './demos/basic-table-demo-container';
import CaptionTableDemoContainer from './demos/caption-table-demo-container';
import FooterTableDemoContainer from './demos/footer-table-demo-container';
import UsersTableDemoContainer from './demos/users-table-demo-container';

@Component({
  selector: 'app-table-page',
  imports: [
    BasicTableDemoContainer,
    CaptionTableDemoContainer,
    FooterTableDemoContainer,
    UsersTableDemoContainer,
  ],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Table</h1>
        <p class="text-muted-foreground">A responsive table component.</p>
      </div>

      <div class="space-y-8">
        <app-basic-table-demo-container />
        <app-caption-table-demo-container />
        <app-footer-table-demo-container />
        <app-users-table-demo-container />
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TablePage {}
