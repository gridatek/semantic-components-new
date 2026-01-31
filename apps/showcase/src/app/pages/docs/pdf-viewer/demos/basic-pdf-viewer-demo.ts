import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScPdfViewer } from '@semantic-components/ui';

@Component({
  selector: 'app-basic-pdf-viewer-demo',
  imports: [ScPdfViewer],
  template: `
    <div class="h-[600px]">
      <sc-pdf-viewer
        src="https://www.w3.org/WAI/WCAG21/Techniques/pdf/img/table-word.pdf"
        title="Sample PDF"
        class="h-full"
      />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicPdfViewerDemo {}
