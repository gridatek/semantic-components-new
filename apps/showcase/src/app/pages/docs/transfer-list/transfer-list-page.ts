import { ChangeDetectionStrategy, Component } from '@angular/core';
import TransferListDemoContainer from './demos/transfer-list-demo-container';

@Component({
  selector: 'app-transfer-list-page',
  imports: [TransferListDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">TransferList</h1>
        <p class="text-muted-foreground">A transfer list component.</p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-transfer-list-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TransferListPage {}
