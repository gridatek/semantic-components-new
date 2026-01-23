import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { PdfViewerDemoComponent } from './pdf-viewer-demo';

@Component({
  selector: 'app-pdf-viewer-demo-container',
  imports: [DemoContainer, PdfViewerDemoComponent],
  template: `
    <app-demo-container title="PdfViewer" [code]="code">
      <app-pdf-viewer-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PdfViewerDemoContainer {
  readonly code = '';
}
