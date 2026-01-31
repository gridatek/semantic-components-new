import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { MinimalPdfViewerDemo } from './minimal-pdf-viewer-demo';

@Component({
  selector: 'app-minimal-pdf-viewer-demo-container',
  imports: [DemoContainer, MinimalPdfViewerDemo],
  template: `
    <app-demo-container title="Minimal (No Toolbar)" [code]="code">
      <app-minimal-pdf-viewer-demo />
    </app-demo-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinimalPdfViewerDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScPdfViewer } from '@semantic-components/ui';

@Component({
  selector: 'app-minimal-pdf-viewer-demo',
  imports: [ScPdfViewer],
  template: \`
    <div class="h-[400px]">
      <sc-pdf-viewer
        src="https://www.w3.org/WAI/WCAG21/Techniques/pdf/img/table-word.pdf"
        [showToolbar]="false"
        class="h-full"
      />
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinimalPdfViewerDemo {}`;
}
