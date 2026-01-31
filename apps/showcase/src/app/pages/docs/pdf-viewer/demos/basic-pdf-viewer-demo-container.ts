import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { BasicPdfViewerDemo } from './basic-pdf-viewer-demo';

@Component({
  selector: 'app-basic-pdf-viewer-demo-container',
  imports: [DemoContainer, BasicPdfViewerDemo],
  template: `
    <app-demo-container title="Basic PDF Viewer" [code]="code">
      <app-basic-pdf-viewer-demo />
    </app-demo-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicPdfViewerDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScPdfViewer } from '@semantic-components/ui';

@Component({
  selector: 'app-basic-pdf-viewer-demo',
  imports: [ScPdfViewer],
  template: \`
    <div class="h-[600px]">
      <sc-pdf-viewer
        src="https://www.w3.org/WAI/WCAG21/Techniques/pdf/img/table-word.pdf"
        title="Sample PDF"
        class="h-full"
      />
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicPdfViewerDemo {}`;
}
