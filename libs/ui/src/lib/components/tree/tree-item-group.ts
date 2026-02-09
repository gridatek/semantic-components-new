import { NgTemplateOutlet } from '@angular/common';
import { TreeItemGroup } from '@angular/aria/tree';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  inject,
  input,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';
import { SC_TREE_ITEM } from './tree-item';

@Component({
  selector: 'ul[sc-tree-item-group]',
  imports: [TreeItemGroup, NgTemplateOutlet],
  template: `
    <ng-template ngTreeItemGroup [ownedBy]="item.treeItem">
      <ng-template [ngTemplateOutlet]="contentTpl()" />
    </ng-template>
  `,
  host: {
    'data-slot': 'tree-item-group',
    role: 'group',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTreeItemGroup {
  readonly contentTpl = contentChild.required(TemplateRef);
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
