import {
  Component,
  ChangeDetectionStrategy,
  computed,
  input,
} from '@angular/core';
import { cn } from '../../utils';

@Component({
  selector: 'div[sc-editor-toolbar-group]',
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'editor-toolbar-group',
    '[class]': 'class()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScEditorToolbarGroup {
  readonly classInput = input<string>('', { alias: 'class' });
  protected readonly class = computed(() =>
    cn('flex items-center gap-1', this.classInput()),
  );
}
