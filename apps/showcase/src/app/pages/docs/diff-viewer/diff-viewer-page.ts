import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicDiffViewerDemoContainer } from './demos/basic-diff-viewer-demo-container';
import { UnifiedDiffViewerDemoContainer } from './demos/unified-diff-viewer-demo-container';
import { JsonDiffViewerDemoContainer } from './demos/json-diff-viewer-demo-container';
import { MinimalDiffViewerDemoContainer } from './demos/minimal-diff-viewer-demo-container';
import { WhitespaceDiffViewerDemoContainer } from './demos/whitespace-diff-viewer-demo-container';
import { LargeDiffViewerDemoContainer } from './demos/large-diff-viewer-demo-container';
import { IdenticalDiffViewerDemoContainer } from './demos/identical-diff-viewer-demo-container';

@Component({
  selector: 'app-diff-viewer-page',
  imports: [
    BasicDiffViewerDemoContainer,
    UnifiedDiffViewerDemoContainer,
    JsonDiffViewerDemoContainer,
    MinimalDiffViewerDemoContainer,
    WhitespaceDiffViewerDemoContainer,
    LargeDiffViewerDemoContainer,
    IdenticalDiffViewerDemoContainer,
  ],
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
        <app-basic-diff-viewer-demo-container />
        <app-unified-diff-viewer-demo-container />
        <app-json-diff-viewer-demo-container />
        <app-minimal-diff-viewer-demo-container />
        <app-whitespace-diff-viewer-demo-container />
        <app-large-diff-viewer-demo-container />
        <app-identical-diff-viewer-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DiffViewerPage {}
