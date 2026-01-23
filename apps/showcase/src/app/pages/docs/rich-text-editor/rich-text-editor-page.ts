import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RichTextEditorDemoContainer } from './demos/rich-text-editor-demo-container';

@Component({
  selector: 'app-rich-text-editor-page',
  imports: [RichTextEditorDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">RichTextEditor</h1>
        <p class="text-muted-foreground">
          WYSIWYG editor with formatting toolbar, keyboard shortcuts, and HTML
          output.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-rich-text-editor-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RichTextEditorPage {}
