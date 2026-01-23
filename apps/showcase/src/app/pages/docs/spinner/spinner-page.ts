import { ChangeDetectionStrategy, Component } from '@angular/core';
import SpinnerDemoContainer from './demos/spinner-demo-container';

@Component({
  selector: 'app-spinner-page',
  imports: [SpinnerDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Spinner</h1>
        <p class="text-muted-foreground">
          Loading indicators with multiple animation styles and sizes.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-spinner-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SpinnerPage {}
