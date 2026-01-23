import { ChangeDetectionStrategy, Component } from '@angular/core';
import DiffViewerDemoContainer from './demos/diff-viewer-demo-container';

@Component({
  selector: 'app-diff-viewer-page',
  imports: [DiffViewerDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">DiffViewer</h1>
        <p class="text-muted-foreground">
          Side-by-side or unified view for comparing text and code changes.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-diff-viewer-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DiffViewerPage {}
