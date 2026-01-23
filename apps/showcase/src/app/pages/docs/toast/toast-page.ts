import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScToastDemoContainer } from './demos/toast-demo-container';

@Component({
  selector: 'app-toast-page',
  imports: [ScToastDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Toast</h1>
        <p class="text-muted-foreground">
          A succinct message that is displayed temporarily to provide feedback.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-toast-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ToastPage {}
