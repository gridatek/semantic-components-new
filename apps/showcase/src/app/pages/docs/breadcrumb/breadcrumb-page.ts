import { ChangeDetectionStrategy, Component } from '@angular/core';
import BreadcrumbDemoContainer from './demos/breadcrumb-demo-container';

@Component({
  selector: 'app-breadcrumb-page',
  imports: [BreadcrumbDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Breadcrumb</h1>
        <p class="text-muted-foreground">
          Displays the path to the current resource using a hierarchy of links.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-breadcrumb-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BreadcrumbPage {}
