import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScCodeEditor, ScCodeEditorContent } from '@semantic-components/ui';

@Component({
  selector: 'app-minimal-code-editor-demo',
  imports: [ScCodeEditor, ScCodeEditorContent],
  template: `
    <div sc-code-editor>
      <div
        sc-code-editor-content
        [(value)]="minimalCode"
        language="javascript"
        maxHeight="150px"
      ></div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinimalCodeEditorDemo {
  minimalCode = `const hello = "world";
console.log(hello);`;
}
