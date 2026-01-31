import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScPdfViewer } from '@semantic-components/ui';

@Component({
  selector: 'app-minimal-pdf-viewer-demo',
  imports: [ScPdfViewer],
  template: `
    <div class="h-[400px]">
      <sc-pdf-viewer
        src="https://www.w3.org/WAI/WCAG21/Techniques/pdf/img/table-word.pdf"
        [showToolbar]="false"
        class="h-full"
      />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinimalPdfViewerDemo {}
