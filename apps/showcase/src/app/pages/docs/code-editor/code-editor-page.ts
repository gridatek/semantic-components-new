import { ChangeDetectionStrategy, Component } from '@angular/core';
import CodeEditorDemoContainer from './demos/code-editor-demo-container';

@Component({
  selector: 'app-code-editor-page',
  imports: [CodeEditorDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">CodeEditor</h1>
        <p class="text-muted-foreground">
          Syntax-highlighted code editor with line numbers, auto-indent, and
          multiple language support.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-code-editor-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CodeEditorPage {}
