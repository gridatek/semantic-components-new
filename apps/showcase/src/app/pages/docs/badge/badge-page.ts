import { ChangeDetectionStrategy, Component } from '@angular/core';
import { VariantsBadgeDemoContainer } from './demos/variants-badge-demo-container';
import { WithIconsBadgeDemoContainer } from './demos/with-icons-badge-demo-container';

@Component({
  selector: 'app-badge-page',
  imports: [VariantsBadgeDemoContainer, WithIconsBadgeDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Badge</h1>
        <p class="text-muted-foreground">
          Displays a badge or a component that looks like a badge.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-variants-badge-demo-container />
        <app-with-icons-badge-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BadgePage {}
