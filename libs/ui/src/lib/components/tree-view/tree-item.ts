import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  InjectionToken,
  input,
  model,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';

// Token for tree item context
export const SC_TREE_ITEM = new InjectionToken<ScTreeItem>('SC_TREE_ITEM');

@Component({
  selector: 'div[sc-tree-item]',
  providers: [{ provide: SC_TREE_ITEM, useExisting: ScTreeItem }],
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'tree-item',
    role: 'treeitem',
    '[class]': 'class()',
    '[attr.aria-expanded]': 'hasChildren() ? expanded() : null',
    '[attr.aria-selected]': 'selected()',
    '[attr.data-state]': 'expanded() ? "open" : "closed"',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTreeItem {
  private readonly parentItem = inject(SC_TREE_ITEM, {
    optional: true,
    skipSelf: true,
  });

  readonly classInput = input<string>('', { alias: 'class' });
  readonly expanded = model<boolean>(false);
  readonly selected = model<boolean>(false);
  readonly hasChildren = input<boolean>(false);

  readonly level = computed(() => {
    let level = 0;
    let parent = this.parentItem;
    while (parent) {
      level++;
      parent = (parent as any).parentItem;
    }
    return level;
  });

  protected readonly class = computed(() =>
    cn('flex flex-col', this.classInput()),
  );

  toggle(): void {
    if (this.hasChildren()) {
      this.expanded.update((v) => !v);
    }
  }

  select(): void {
    this.selected.set(true);
  }
}
