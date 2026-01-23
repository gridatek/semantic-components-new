import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { RichTextEditorDemo } from './rich-text-editor-demo';

@Component({
  selector: 'app-rich-text-editor-demo-container',
  imports: [DemoContainer, RichTextEditorDemo],
  template: `
    <app-demo-container title="Rich" [code]="code">
      <app-rich-text-editor-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RichTextEditorDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScRichTextEditor, ToolbarConfig } from '@semantic-components/ui';

@Component({
  selector: 'app-rich-text-editor-demo',
  imports: [ScRichTextEditor],
  template: \`
    <div class="space-y-8">
      <!-- Basic Example -->
      <section>
        <h3 class="text-lg font-semibold mb-4">Basic Editor</h3>
        <sc-rich-text-editor
          [(value)]="basicContent"
          [placeholder]="'Start writing your content...'"
        />
        <div class="mt-4">
          <h4 class="text-sm font-medium mb-2">HTML Output:</h4>
          <pre
            class="p-3 bg-muted rounded-lg text-xs overflow-x-auto max-h-32"
            >{{ basicContent }}</pre
          >
        </div>
      </section>

      <!-- With Initial Content -->
      <section>
        <h3 class="text-lg font-semibold mb-4">With Initial Content</h3>
        <sc-rich-text-editor [(value)]="prefilledContent" />
      </section>

      <!-- Custom Toolbar -->
      <section>
        <h3 class="text-lg font-semibold mb-4">Minimal Toolbar</h3>
        <sc-rich-text-editor
          [(value)]="minimalContent"
          [toolbar]="minimalToolbar"
          [placeholder]="'Simple text formatting only...'"
        />
      </section>

      <!-- No Word Count -->
      <section>
        <h3 class="text-lg font-semibold mb-4">Without Word Count</h3>
        <sc-rich-text-editor
          [(value)]="noCountContent"
          [showCount]="false"
          [minHeight]="'100px'"
        />
      </section>

      <!-- Readonly Mode -->
      <section>
        <h3 class="text-lg font-semibold mb-4">Readonly Mode</h3>
        <sc-rich-text-editor
          [value]="readonlyContent"
          [readonly]="true"
          [showToolbar]="false"
        />
      </section>

      <!-- Custom Height -->
      <section>
        <h3 class="text-lg font-semibold mb-4">Custom Height</h3>
        <sc-rich-text-editor
          [(value)]="tallContent"
          [minHeight]="'300px'"
          [maxHeight]="'500px'"
          [placeholder]="'This editor has a taller minimum height...'"
        />
      </section>

      <!-- Full Featured -->
      <section>
        <h3 class="text-lg font-semibold mb-4">Full Featured Editor</h3>
        <p class="text-sm text-muted-foreground mb-4">
          Try all the formatting options: bold, italic, headings, lists, links,
          blockquotes, and more.
        </p>
        <sc-rich-text-editor
          [(value)]="fullContent"
          [minHeight]="'250px'"
          (selectionChange)="onSelectionChange($event)"
        />
        <div class="mt-4 flex gap-4">
          <button
            type="button"
            (click)="clearFullContent()"
            class="px-3 py-1.5 text-sm border rounded-md hover:bg-accent"
          >
            Clear Content
          </button>
          <button
            type="button"
            (click)="insertSampleContent()"
            class="px-3 py-1.5 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
          >
            Insert Sample Content
          </button>
        </div>
      </section>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RichTextEditorDemo {
  basicContent = '';

  prefilledContent = \`
    <h2>Welcome to the Rich Text Editor</h2>
    <p>This is a <strong>full-featured</strong> WYSIWYG editor with support for:</p>
    <ul>
      <li><strong>Bold</strong>, <em>italic</em>, and <u>underline</u> text</li>
      <li>Multiple heading levels</li>
      <li>Ordered and unordered lists</li>
      <li><a href="https://example.com">Hyperlinks</a></li>
      <li>And much more!</li>
    </ul>
    <blockquote>
      This is a blockquote for highlighting important information.
    </blockquote>
    <p>You can also add <code>inline code</code> snippets.</p>
  \`;

  minimalToolbar: ToolbarConfig = {
    bold: true,
    italic: true,
    underline: true,
    link: true,
    undo: true,
    redo: true,
  };

  minimalContent = '';
  noCountContent = '';

  readonlyContent = \`
    <h3>Readonly Content</h3>
    <p>This content cannot be edited. The editor is in readonly mode with the toolbar hidden.</p>
    <p>Useful for displaying formatted content that users should only read.</p>
  \`;

  tallContent = '';
  fullContent = '';

  onSelectionChange(selection: Selection | null): void {
    if (selection) {
      console.log('Selection changed:', selection.toString());
    }
  }

  clearFullContent(): void {
    this.fullContent = '';
  }

  insertSampleContent(): void {
    this.fullContent = \`
      <h1>Article Title</h1>
      <p>This is the introduction paragraph of the article. It provides an overview of what will be discussed.</p>

      <h2>First Section</h2>
      <p>Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

      <h3>Subsection</h3>
      <p>Here are some key points to consider:</p>
      <ul>
        <li>First important point</li>
        <li>Second important point</li>
        <li>Third important point</li>
      </ul>

      <h2>Second Section</h2>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>

      <blockquote>
        "The only way to do great work is to love what you do." - Steve Jobs
      </blockquote>

      <p>Here's a numbered list of steps:</p>
      <ol>
        <li>Begin with the basics</li>
        <li>Build upon your foundation</li>
        <li>Practice regularly</li>
        <li>Review and improve</li>
      </ol>

      <hr>

      <h2>Conclusion</h2>
      <p>In conclusion, this rich text editor provides all the tools you need for creating well-formatted content.</p>
      <p>For more information, visit our <a href="https://example.com">documentation</a>.</p>
    \`;
  }
}`;
}
