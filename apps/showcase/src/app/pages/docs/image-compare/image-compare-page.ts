import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScImageCompareDemoContainer } from './demos/image-compare-demo-container';

@Component({
  selector: 'app-image-compare-page',
  imports: [ScImageCompareDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">ImageCompare</h1>
        <p class="text-muted-foreground">
          Before/after image comparison slider with keyboard support.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-image-compare-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ImageComparePage {}
