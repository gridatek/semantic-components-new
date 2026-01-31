import {
  Component,
  ChangeDetectionStrategy,
  computed,
  input,
  inject,
} from '@angular/core';
import { cn } from '../../utils';
import { SC_EDITOR } from './editor';

@Component({
  selector: 'div[sc-editor-count]',
  template: `
    <span>{{ wordCount() }} words</span>
    <span>{{ charCount() }} characters</span>
  `,
  host: {
    'data-slot': 'editor-count',
    '[class]': 'class()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScEditorCount {
  readonly editor = inject(SC_EDITOR);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('flex items-center justify-end gap-4', this.classInput()),
  );

  protected readonly charCount = computed(() => {
    const text = this.getPlainText();
    return text.length;
  });

  protected readonly wordCount = computed(() => {
    const text = this.getPlainText().trim();
    if (!text) return 0;
    return text.split(/\s+/).filter(Boolean).length;
  });

  private getPlainText(): string {
    const editorInstance = this.editor.editorInstance();
    if (editorInstance) {
      return editorInstance.getText();
    }
    return this.editor.contentElement()?.textContent || '';
  }
}
