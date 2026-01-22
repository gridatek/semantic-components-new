import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  model,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';

@Component({
  selector: 'div[sc-collapsible]',
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'collapsible',
    '[attr.data-state]': 'open() ? "open" : "closed"',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCollapsible {
  readonly classInput = input<string>('', { alias: 'class' });

  /** Whether the collapsible is open */
  readonly open = model<boolean>(false);

  /** Whether the collapsible is disabled */
  readonly disabled = input<boolean>(false);

  protected readonly class = computed(() => cn('', this.classInput()));

  toggle(): void {
    if (!this.disabled()) {
      this.open.update((v) => !v);
    }
  }
}
