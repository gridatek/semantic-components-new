import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { PdfViewerDemoComponent } from './pdf-viewer-demo';

@Component({
  selector: 'app-pdf-viewer-demo-container',
  imports: [DemoContainer, PdfViewerDemoComponent],
  template: `
    <app-demo-container title="Pdf" [code]="code">
      <app-pdf-viewer-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PdfViewerDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ScPdfViewer,
  type PdfLoadEvent,
  type PdfPageChangeEvent,
  type PdfZoomChangeEvent,
} from '@semantic-components/ui';

@Component({
  selector: 'app-pdf-viewer-demo',
  imports: [ScPdfViewer, FormsModule],
  template: \`
    <div class="space-y-8">
      <!-- URL Input -->
      <section>
        <h3 class="text-lg font-medium mb-4">PDF URL</h3>
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
        <p class="mt-2 text-sm text-muted-foreground">
          Enter a PDF URL or use one of the samples below
        </p>
        <div class="flex flex-wrap gap-2 mt-3">
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
      </section>

      <!-- Full Featured Demo -->
      <section>
        <h3 class="text-lg font-medium mb-4">PDF Viewer</h3>
        <div class="h-[600px]">
          <sc-pdf-viewer
            [src]="currentPdf()"
            [title]="'Sample PDF'"
            class="h-full"
            (loaded)="onLoaded($event)"
            (pageChange)="onPageChange($event)"
            (zoomChange)="onZoomChange($event)"
          />
        </div>
      </section>

      <!-- Minimal (No Toolbar) -->
      <section>
        <h3 class="text-lg font-medium mb-4">Minimal (No Toolbar)</h3>
        <div class="h-[400px]">
          <sc-pdf-viewer
            [src]="currentPdf()"
            [showToolbar]="false"
            class="h-full"
          />
        </div>
      </section>

      <!-- Custom Toolbar Config -->
      <section>
        <h3 class="text-lg font-medium mb-4">
          Custom Toolbar (Navigation Only)
        </h3>
        <div class="h-[400px]">
          <sc-pdf-viewer
            [src]="currentPdf()"
            [toolbarConfig]="{
              showNavigation: true,
              showPageInfo: true,
              showZoom: false,
              showRotate: false,
              showDownload: false,
              showPrint: false,
              showFullscreen: false,
            }"
            class="h-full"
          />
        </div>
      </section>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PdfViewerDemoComponent {
  pdfUrl = '';

  readonly currentPdf = signal(
    'https://www.w3.org/WAI/WCAG21/Techniques/pdf/img/table-word.pdf',
  );

  readonly samplePdfs = [
    {
      name: 'W3C Sample',
      url: 'https://www.w3.org/WAI/WCAG21/Techniques/pdf/img/table-word.pdf',
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

  onLoaded(event: PdfLoadEvent): void {
    console.log('PDF loaded:', event);
  }

  onPageChange(event: PdfPageChangeEvent): void {
    console.log('Page changed:', event);
  }

  onZoomChange(event: PdfZoomChangeEvent): void {
    console.log('Zoom changed:', event);
  }
}`;
}
