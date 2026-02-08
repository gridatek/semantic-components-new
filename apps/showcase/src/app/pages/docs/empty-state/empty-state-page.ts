import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActionsEmptyStateDemoContainer } from './demos/actions-empty-state-demo-container';
import { BasicEmptyStateDemoContainer } from './demos/basic-empty-state-demo-container';
import { SizesEmptyStateDemoContainer } from './demos/sizes-empty-state-demo-container';
import { UsecasesEmptyStateDemoContainer } from './demos/usecases-empty-state-demo-container';
import { TocHeading } from '../../../components/toc/toc-heading';
import { ComponentStatusBadge } from '../../../components/component-status-badge/component-status-badge';
import { COMPONENTS } from '../../../data/components';

@Component({
  selector: 'app-empty-state-page',
  imports: [
    BasicEmptyStateDemoContainer,
    ActionsEmptyStateDemoContainer,
    SizesEmptyStateDemoContainer,
    UsecasesEmptyStateDemoContainer,
    TocHeading,
    ComponentStatusBadge,
  ],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">EmptyState</h1>
        <p class="text-muted-foreground">A empty state component.</p>
        <app-component-status-badge [status]="componentStatus" />
      </div>

      <section class="space-y-8">
        <h2 toc class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-basic-empty-state-demo-container />
        <app-actions-empty-state-demo-container />
        <app-sizes-empty-state-demo-container />
        <app-usecases-empty-state-demo-container />
      </section>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class EmptyStatePage {
  readonly componentStatus = COMPONENTS.find((c) => c.path === 'empty-state')!
    .status;
}
