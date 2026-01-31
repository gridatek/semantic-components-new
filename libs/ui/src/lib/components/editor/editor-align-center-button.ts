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
  selector: 'button[sc-editor-align-center]',
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'editor-align-center',
    type: 'button',
    '[class]': 'class()',
    '[disabled]': 'editor.disabled()',
    '[attr.aria-pressed]': 'editor.alignment() === "center"',
    '[attr.title]': '"Align center"',
    '(click)': 'onClick()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScEditorAlignCenterButton {
  readonly editor = inject(SC_EDITOR);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'p-1.5 rounded hover:bg-accent disabled:opacity-50',
      this.editor.alignment() === 'center' &&
        'bg-accent text-accent-foreground',
      this.classInput(),
    ),
  );

  onClick(): void {
    this.editor.execCommand('justifyCenter');
  }
}
