import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActionsEmptyStateDemoContainer } from './demos/actions-empty-state-demo-container';
import { BasicEmptyStateDemoContainer } from './demos/basic-empty-state-demo-container';
import { SizesEmptyStateDemoContainer } from './demos/sizes-empty-state-demo-container';
import { UsecasesEmptyStateDemoContainer } from './demos/usecases-empty-state-demo-container';

@Component({
  selector: 'app-empty-state-page',
  imports: [
    BasicEmptyStateDemoContainer,
    ActionsEmptyStateDemoContainer,
    SizesEmptyStateDemoContainer,
    UsecasesEmptyStateDemoContainer,
  ],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">EmptyState</h1>
        <p class="text-muted-foreground">A empty state component.</p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-basic-empty-state-demo-container />
        <app-actions-empty-state-demo-container />
        <app-sizes-empty-state-demo-container />
        <app-usecases-empty-state-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class EmptyStatePage {}
