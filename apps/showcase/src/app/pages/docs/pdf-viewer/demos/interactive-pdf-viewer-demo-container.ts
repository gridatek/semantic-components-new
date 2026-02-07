import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { InteractivePdfViewerDemo } from './interactive-pdf-viewer-demo';

@Component({
  selector: 'app-interactive-pdf-viewer-demo-container',
  imports: [DemoContainer, InteractivePdfViewerDemo],
  template: `
    <app-demo-container title="Interactive PDF Viewer" [code]="code">
      <app-interactive-pdf-viewer-demo />
    </app-demo-container>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InteractivePdfViewerDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScPdfViewer } from '@semantic-components/ui';

@Component({
  selector: 'app-interactive-pdf-viewer-demo',
  imports: [ScPdfViewer, FormsModule],
  template: \`
    <div class="space-y-4">
      <div class="flex gap-2">
        <input
          type="url"
          [(ngModel)]="pdfUrl"
          placeholder="Enter PDF URL..."
          class="flex-1 px-3 py-2 text-sm border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
        />
        <button
          type="button"
          class="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          (click)="loadPdf()"
        >
          Load PDF
        </button>
      </div>

      <p class="text-sm text-muted-foreground">
        Enter a PDF URL or use one of the samples below
      </p>

      <div class="flex flex-wrap gap-2">
        @for (sample of samplePdfs; track sample.url) {
          <button
            type="button"
            class="px-3 py-1.5 text-xs font-medium border rounded-lg hover:bg-muted transition-colors"
            (click)="pdfUrl = sample.url; loadPdf()"
          >
            {{ sample.name }}
          </button>
        }
      </div>

      <div class="h-[600px]">
        <sc-pdf-viewer [src]="currentPdf()" title="Sample PDF" class="h-full" />
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InteractivePdfViewerDemo {
  pdfUrl = '';

  readonly currentPdf = signal(
    'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf',
  );

  readonly samplePdfs = [
    {
      name: 'W3C Sample',
      url: 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf',
    },
    {
      name: 'PDF.js Sample',
      url: 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf',
    },
  ];

  loadPdf(): void {
    if (this.pdfUrl) {
      this.currentPdf.set(this.pdfUrl);
    }
  }
}`;
}
