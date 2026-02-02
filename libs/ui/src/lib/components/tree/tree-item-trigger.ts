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
  selector: 'div[sc-tree-item-trigger]',
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
        [class.rotate-90]="item.expanded()"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    } @else {
      <span class="size-4 shrink-0"></span>
    }
    <ng-content />
  `,
  host: {
    'data-slot': 'tree-item-trigger',
    '[class]': 'class()',
    '[style.padding-left]': 'paddingLeft()',
    '(click)': 'onClick()',
    '(keydown)': 'onKeyDown($event)',
    tabindex: '0',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTreeItemTrigger {
  readonly item = inject(SC_TREE_ITEM);

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'flex items-center gap-2 rounded-md px-2 py-1.5 text-sm',
      'cursor-pointer select-none outline-none',
      'hover:bg-accent hover:text-accent-foreground',
      'focus-visible:bg-accent focus-visible:text-accent-foreground',
      'data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground',
      this.classInput(),
    ),
  );

  protected readonly paddingLeft = computed(() => {
    const level = this.item.level();
    return `${level * 12 + 8}px`;
  });

  protected onClick(): void {
    this.item.toggle();
  }

  protected onKeyDown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        this.item.toggle();
        break;
      case 'ArrowRight':
        event.preventDefault();
        if (this.item.hasChildren() && !this.item.expanded()) {
          this.item.expanded.set(true);
        }
        break;
      case 'ArrowLeft':
        event.preventDefault();
        if (this.item.hasChildren() && this.item.expanded()) {
          this.item.expanded.set(false);
        }
        break;
    }
  }
}
