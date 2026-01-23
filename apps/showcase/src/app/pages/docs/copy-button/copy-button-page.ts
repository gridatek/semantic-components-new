import { ChangeDetectionStrategy, Component } from '@angular/core';
import CopyButtonDemoContainer from './demos/copy-button-demo-container';

@Component({
  selector: 'app-copy-button-page',
  imports: [CopyButtonDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">CopyButton</h1>
        <p class="text-muted-foreground">
          A button component that copies text to clipboard with visual feedback.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-copy-button-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CopyButtonPage {}
