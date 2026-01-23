import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScLabelDemoContainer } from './demos/label-demo-container';

@Component({
  selector: 'app-label-page',
  imports: [ScLabelDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Label</h1>
        <p class="text-muted-foreground">
          Renders an accessible label associated with controls.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-label-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LabelPage {}
