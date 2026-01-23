import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PdfViewerDemoComponent } from './demos/pdf-viewer-demo-container';

@Component({
  selector: 'app-pdf-viewer-page',
  imports: [PdfViewerDemoComponent],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">PdfViewer</h1>
        <p class="text-muted-foreground">
          A document viewer component for displaying PDF files with navigation,
          zoom, and toolbar controls.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-pdf-viewer-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PdfViewerPage {}
