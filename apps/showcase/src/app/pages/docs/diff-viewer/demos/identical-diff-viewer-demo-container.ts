import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { IdenticalDiffViewerDemo } from './identical-diff-viewer-demo';

@Component({
  selector: 'app-identical-diff-viewer-demo-container',
  imports: [DemoContainer, IdenticalDiffViewerDemo],
  template: `
    <app-demo-container
      title="Identical Files"
      demoUrl="/demos/diff-viewer/identical-diff-viewer-demo"
      [code]="code"
    >
      <app-identical-diff-viewer-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IdenticalDiffViewerDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScDiffViewer } from '@semantic-components/ui';

@Component({
  selector: 'app-identical-diff-viewer-demo',
  imports: [ScDiffViewer],
  template: \`
    <sc-diff-viewer
      [oldText]="'const x = 1;\\nconst y = 2;'"
      [newText]="'const x = 1;\\nconst y = 2;'"
      [oldTitle]="'file.ts'"
      [newTitle]="'file.ts'"
    />
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IdenticalDiffViewerDemo {}`;
}
