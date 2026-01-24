import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScCodeEditor } from '@semantic-components/ui';

@Component({
  selector: 'app-minimal-code-editor-demo',
  imports: [ScCodeEditor],
  template: `
    <sc-code-editor
      [(value)]="minimalCode"
      [language]="'javascript'"
      [showHeader]="false"
      [showFooter]="false"
      [maxHeight]="'150px'"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinimalCodeEditorDemo {
  minimalCode = `const hello = "world";
console.log(hello);`;
}
