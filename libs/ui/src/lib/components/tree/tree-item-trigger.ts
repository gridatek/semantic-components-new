import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';
import { SC_TREE_ITEM } from './tree-item';

@Component({
  selector: 'button[sc-tree-item-trigger]',
  template: `
    @if (item.hasChildren()) {
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="size-4 shrink-0 transition-transform duration-200"
        [class.rotate-90]="item.treeItem.expanded()"
        aria-hidden="true"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    } @else {
      <span class="size-4 shrink-0" aria-hidden="true"></span>
    }
    <ng-content />
  `,
  host: {
    'data-slot': 'tree-item-trigger',
    type: 'button',
    '[class]': 'class()',
    '[style.padding-left]': 'paddingLeft()',
    '(click)': 'onClick()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTreeItemTrigger {
  readonly item = inject(SC_TREE_ITEM);

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'flex items-center gap-2 rounded-md px-2 py-1.5 text-sm w-full',
      'cursor-pointer select-none outline-none',
      'hover:bg-accent hover:text-accent-foreground',
      'focus-visible:bg-accent focus-visible:text-accent-foreground',
      'aria-[selected=true]:bg-accent aria-[selected=true]:text-accent-foreground',
      this.classInput(),
    ),
  );

  protected readonly paddingLeft = computed(() => {
    const level = this.item.level();
    return `${level * 12 + 8}px`;
  });

  protected onClick(): void {
    if (this.item.hasChildren()) {
      this.item.treeItem.expanded.update((v) => !v);
    }
  }
}
