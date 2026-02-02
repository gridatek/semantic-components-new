import { computed, Directive, inject, input } from '@angular/core';
import { cn } from '../../utils';
import { SC_TREE_ITEM } from './tree-item';

@Directive({
  selector: 'div[sc-tree-item-content]',
  host: {
    'data-slot': 'tree-item-content',
    role: 'group',
    '[class]': 'class()',
    '[hidden]': '!item.expanded()',
  },
})
export class ScTreeItemContent {
  readonly item = inject(SC_TREE_ITEM);

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'flex flex-col gap-1 overflow-hidden',
      'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
      this.classInput(),
    ),
  );
}
