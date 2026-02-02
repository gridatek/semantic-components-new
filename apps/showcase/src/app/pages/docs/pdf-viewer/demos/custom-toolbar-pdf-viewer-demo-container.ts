import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { CustomToolbarPdfViewerDemo } from './custom-toolbar-pdf-viewer-demo';

@Component({
  selector: 'app-custom-toolbar-pdf-viewer-demo-container',
  imports: [DemoContainer, CustomToolbarPdfViewerDemo],
  template: `
    <app-demo-container title="Custom Toolbar (Navigation Only)" [code]="code">
      <app-custom-toolbar-pdf-viewer-demo />
    </app-demo-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomToolbarPdfViewerDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScPdfViewer } from '@semantic-components/ui';

@Component({
  selector: 'app-custom-toolbar-pdf-viewer-demo',
  imports: [ScPdfViewer],
  template: \`
    <div class="h-[400px]">
      <sc-pdf-viewer
        src="https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf"
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
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomToolbarPdfViewerDemo {}`;
}
