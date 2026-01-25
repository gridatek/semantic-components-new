import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScDiffViewer } from '@semantic-components/ui';

@Component({
  selector: 'app-identical-diff-viewer-demo',
  imports: [ScDiffViewer],
  template: `
    <sc-diff-viewer
      [oldText]="'const x = 1;
const y = 2;'"
      [newText]="'const x = 1;
const y = 2;'"
      [oldTitle]="'file.ts'"
      [newTitle]="'file.ts'"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IdenticalDiffViewerDemo {}
