import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScPdfViewer } from '@semantic-components/ui';

@Component({
  selector: 'app-custom-toolbar-pdf-viewer-demo',
  imports: [ScPdfViewer],
  template: `
    <div class="h-[400px]">
      <sc-pdf-viewer
        src="https://www.w3.org/WAI/WCAG21/Techniques/pdf/img/table-word.pdf"
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
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomToolbarPdfViewerDemo {}
