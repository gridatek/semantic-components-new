import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScPdfViewerRoot,
  ScPdfViewerContainer,
  ScPdfViewerContent,
  ScPdfViewerLoading,
  ScPdfViewerError,
  ScPdfViewerEmpty,
} from '@semantic-components/ui';

@Component({
  selector: 'app-minimal-pdf-viewer-demo',
  imports: [
    ScPdfViewerRoot,
    ScPdfViewerContainer,
    ScPdfViewerContent,
    ScPdfViewerLoading,
    ScPdfViewerError,
    ScPdfViewerEmpty,
  ],
  template: `
    <div class="h-[400px]">
      <div
        sc-pdf-viewer
        src="https://www.w3.org/WAI/WCAG21/Techniques/pdf/img/table-word.pdf"
      >
        <div sc-pdf-viewer-container class="h-full">
          <div sc-pdf-viewer-content>
            <div sc-pdf-viewer-loading></div>
            <div sc-pdf-viewer-error></div>
            <div sc-pdf-viewer-empty></div>
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinimalPdfViewerDemo {}
