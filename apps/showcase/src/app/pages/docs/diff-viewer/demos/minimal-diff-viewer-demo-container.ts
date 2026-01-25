import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { MinimalDiffViewerDemo } from './minimal-diff-viewer-demo';

@Component({
  selector: 'app-minimal-diff-viewer-demo-container',
  imports: [DemoContainer, MinimalDiffViewerDemo],
  template: `
    <app-demo-container title="Minimal View" [code]="code">
      <app-minimal-diff-viewer-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinimalDiffViewerDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScDiffViewer } from '@semantic-components/ui';

@Component({
  selector: 'app-minimal-diff-viewer-demo',
  imports: [ScDiffViewer],
  template: \`
    <sc-diff-viewer
      [oldText]="oldText"
      [newText]="newText"
      [showHeader]="false"
      [showFooter]="false"
      [showSideHeaders]="false"
      [maxHeight]="'200px'"
    />
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinimalDiffViewerDemo {
  oldText = \\\`Line 1
Line 2
Line 3\\\`;

  newText = \\\`Line 1
Modified Line 2
Line 3
New Line 4\\\`;
}`;
}
