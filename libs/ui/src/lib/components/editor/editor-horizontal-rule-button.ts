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
  selector: 'button[sc-editor-horizontal-rule]',
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'editor-horizontal-rule',
    type: 'button',
    '[class]': 'class()',
    '[disabled]': 'editor.disabled()',
    '[attr.title]': '"Horizontal line"',
    '(click)': 'onClick()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScEditorHorizontalRuleButton {
  readonly editor = inject(SC_EDITOR);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('p-1.5 rounded hover:bg-accent disabled:opacity-50', this.classInput()),
  );

  onClick(): void {
    this.editor.execCommand('insertHorizontalRule');
  }
}
