import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScRichTextEditor } from '@semantic-components/ui';

@Component({
  selector: 'app-full-featured-rich-text-editor-demo',
  imports: [ScRichTextEditor],
  template: `
    <p class="text-sm text-muted-foreground mb-4">
      Try all the formatting options: bold, italic, headings, lists, links,
      blockquotes, and more.
    </p>
    <sc-rich-text-editor
      [(value)]="content"
      [minHeight]="'250px'"
      (selectionChange)="onSelectionChange($event)"
    />
    <div class="mt-4 flex gap-4">
      <button
        type="button"
        (click)="clearContent()"
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
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FullFeaturedRichTextEditorDemo {
  content = '';

  onSelectionChange(selection: Selection | null): void {
    if (selection) {
      console.log('Selection changed:', selection.toString());
    }
  }

  clearContent(): void {
    this.content = '';
  }

  insertSampleContent(): void {
    this.content = `
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
    `;
  }
}
