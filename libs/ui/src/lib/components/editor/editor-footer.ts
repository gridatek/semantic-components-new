import {
  Component,
  ChangeDetectionStrategy,
  computed,
  input,
} from '@angular/core';
import { cn } from '../../utils';

@Component({
  selector: 'div[sc-editor-footer]',
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'editor-footer',
    '[class]': 'class()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScEditorFooter {
  readonly classInput = input<string>('', { alias: 'class' });
  protected readonly class = computed(() =>
    cn(
      'px-3 py-1.5 border-t text-xs text-muted-foreground bg-muted/30',
      this.classInput(),
    ),
  );
}
