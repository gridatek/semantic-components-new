import { ChangeDetectionStrategy, Component } from '@angular/core';
import SeparatorDemoContainer from './demos/separator-demo-container';

@Component({
  selector: 'app-separator-page',
  imports: [SeparatorDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Separator</h1>
        <p class="text-muted-foreground">
          Visually or semantically separates content.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-separator-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SeparatorPage {}
