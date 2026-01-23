import {
  ChangeDetectionStrategy,
  Component,
  computed,
  Directive,
  inject,
  InjectionToken,
  input,
  model,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';

// Token for tree item context
export const SC_TREE_ITEM = new InjectionToken<ScTreeItem>('SC_TREE_ITEM');

@Directive({
  selector: 'div[sc-tree]',
  host: {
    'data-slot': 'tree',
    role: 'tree',
    '[class]': 'class()',
  },
})
export class ScTree {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('flex flex-col gap-1', this.classInput()),
  );
}

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

@Directive({
  selector: '[sc-tree-item-icon]',
  host: {
    'data-slot': 'tree-item-icon',
    '[class]': 'class()',
  },
})
export class ScTreeItemIcon {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('size-4 shrink-0', this.classInput()),
  );
}
