import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicRichTextEditorDemoContainer } from './demos/basic-rich-text-editor-demo-container';
import { PrefilledRichTextEditorDemoContainer } from './demos/prefilled-rich-text-editor-demo-container';
import { MinimalToolbarRichTextEditorDemoContainer } from './demos/minimal-toolbar-rich-text-editor-demo-container';
import { NoCountRichTextEditorDemoContainer } from './demos/no-count-rich-text-editor-demo-container';
import { ReadonlyRichTextEditorDemoContainer } from './demos/readonly-rich-text-editor-demo-container';
import { CustomHeightRichTextEditorDemoContainer } from './demos/custom-height-rich-text-editor-demo-container';
import { FullFeaturedRichTextEditorDemoContainer } from './demos/full-featured-rich-text-editor-demo-container';

@Component({
  selector: 'app-rich-text-editor-page',
  imports: [
    BasicRichTextEditorDemoContainer,
    PrefilledRichTextEditorDemoContainer,
    MinimalToolbarRichTextEditorDemoContainer,
    NoCountRichTextEditorDemoContainer,
    ReadonlyRichTextEditorDemoContainer,
    CustomHeightRichTextEditorDemoContainer,
    FullFeaturedRichTextEditorDemoContainer,
  ],
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
        <app-basic-rich-text-editor-demo-container />
        <app-prefilled-rich-text-editor-demo-container />
        <app-minimal-toolbar-rich-text-editor-demo-container />
        <app-no-count-rich-text-editor-demo-container />
        <app-readonly-rich-text-editor-demo-container />
        <app-custom-height-rich-text-editor-demo-container />
        <app-full-featured-rich-text-editor-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RichTextEditorPage {}
