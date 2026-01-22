import {
  ChangeDetectionStrategy,
  Component,
  computed,
  Directive,
  ElementRef,
  inject,
  InjectionToken,
  input,
  model,
  output,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';

export interface SortableEvent<T> {
  item: T;
  previousIndex: number;
  currentIndex: number;
}

// Token for sortable list context
export const SC_SORTABLE_LIST = new InjectionToken<ScSortableList<unknown>>(
  'SC_SORTABLE_LIST',
);

// Token for sortable item context
export const SC_SORTABLE_ITEM = new InjectionToken<ScSortableItem<unknown>>(
  'SC_SORTABLE_ITEM',
);

// ============================================================================
// SortableList
// ============================================================================
@Directive({
  selector: '[sc-sortable-list]',
  exportAs: 'scSortableList',
  providers: [{ provide: SC_SORTABLE_LIST, useExisting: ScSortableList }],
  host: {
    'data-slot': 'sortable-list',
    '[class]': 'class()',
    '[attr.data-orientation]': 'orientation()',
    '[attr.data-disabled]': 'disabled() || null',
    '[attr.data-dragging]': 'isDragging() || null',
  },
})
export class ScSortableList<T> {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly items = model<T[]>([]);
  readonly orientation = input<'vertical' | 'horizontal'>('vertical');
  readonly disabled = input<boolean>(false);
  readonly handleOnly = input<boolean>(false);

  readonly sortChange = output<SortableEvent<T>>();
  readonly sortStart = output<{ item: T; index: number }>();
  readonly sortEnd = output<SortableEvent<T>>();

  readonly isDragging = signal(false);
  readonly draggedIndex = signal<number | null>(null);
  readonly dragOverIndex = signal<number | null>(null);

  protected readonly class = computed(() =>
    cn(
      'relative',
      this.orientation() === 'vertical' && 'flex flex-col',
      this.orientation() === 'horizontal' && 'flex flex-row',
      this.classInput(),
    ),
  );

  private registeredItems: { index: number; element: HTMLElement }[] = [];

  registerItem(index: number, element: HTMLElement): void {
    this.registeredItems.push({ index, element });
  }

  unregisterItem(index: number): void {
    this.registeredItems = this.registeredItems.filter(
      (item) => item.index !== index,
    );
  }

  startDrag(index: number): void {
    if (this.disabled()) return;
    this.isDragging.set(true);
    this.draggedIndex.set(index);
    this.sortStart.emit({ item: this.items()[index], index });
  }

  endDrag(): void {
    const draggedIdx = this.draggedIndex();
    const overIdx = this.dragOverIndex();

    if (draggedIdx !== null && overIdx !== null && draggedIdx !== overIdx) {
      this.moveItem(draggedIdx, overIdx);
    }

    this.isDragging.set(false);
    this.draggedIndex.set(null);
    this.dragOverIndex.set(null);
  }

  setDragOver(index: number | null): void {
    if (this.isDragging()) {
      this.dragOverIndex.set(index);
    }
  }

  moveItem(fromIndex: number, toIndex: number): void {
    if (this.disabled()) return;

    const items = [...this.items()];
    const [removed] = items.splice(fromIndex, 1);
    items.splice(toIndex, 0, removed);

    this.items.set(items);

    const event: SortableEvent<T> = {
      item: removed,
      previousIndex: fromIndex,
      currentIndex: toIndex,
    };

    this.sortChange.emit(event);
    this.sortEnd.emit(event);
  }

  moveUp(index: number): void {
    if (index > 0) {
      this.moveItem(index, index - 1);
    }
  }

  moveDown(index: number): void {
    if (index < this.items().length - 1) {
      this.moveItem(index, index + 1);
    }
  }
}

// ============================================================================
// SortableItem
// ============================================================================
@Component({
  selector: '[sc-sortable-item]',
  template: `
    <ng-content />
  `,
  providers: [{ provide: SC_SORTABLE_ITEM, useExisting: ScSortableItem }],
  host: {
    'data-slot': 'sortable-item',
    '[class]': 'class()',
    '[attr.draggable]': 'canDrag()',
    '[attr.data-dragging]': 'isBeingDragged() || null',
    '[attr.data-drag-over]': 'isDragOver() || null',
    '[attr.tabindex]': 'list.disabled() ? -1 : 0',
    '(dragstart)': 'onDragStart($event)',
    '(dragend)': 'onDragEnd($event)',
    '(dragover)': 'onDragOver($event)',
    '(dragenter)': 'onDragEnter($event)',
    '(dragleave)': 'onDragLeave($event)',
    '(drop)': 'onDrop($event)',
    '(keydown)': 'onKeydown($event)',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSortableItem<T> {
  readonly list = inject<ScSortableList<T>>(SC_SORTABLE_LIST);
  private readonly elementRef = inject(ElementRef<HTMLElement>);

  readonly classInput = input<string>('', { alias: 'class' });
  readonly index = input.required<number>();
  readonly item = input.required<T>();

  protected readonly class = computed(() =>
    cn(
      'relative select-none',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md',
      'data-[dragging]:opacity-50 data-[dragging]:z-50',
      'data-[drag-over]:ring-2 data-[drag-over]:ring-primary',
      'transition-[box-shadow,opacity]',
      this.classInput(),
    ),
  );

  protected readonly canDrag = computed(() => {
    if (this.list.disabled()) return false;
    return !this.list.handleOnly();
  });

  protected readonly isBeingDragged = computed(
    () => this.list.draggedIndex() === this.index(),
  );

  protected readonly isDragOver = computed(() => {
    const dragOverIdx = this.list.dragOverIndex();
    const draggedIdx = this.list.draggedIndex();
    return dragOverIdx === this.index() && draggedIdx !== this.index();
  });

  // Allow handle to trigger drag
  startDragFromHandle(): void {
    this.list.startDrag(this.index());
  }

  onDragStart(event: DragEvent): void {
    if (this.list.handleOnly()) {
      // If handleOnly, prevent default drag unless triggered from handle
      event.preventDefault();
      return;
    }
    this.list.startDrag(this.index());
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('text/plain', String(this.index()));
    }
  }

  onDragEnd(event: DragEvent): void {
    event.preventDefault();
    this.list.endDrag();
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = 'move';
    }
  }

  onDragEnter(event: DragEvent): void {
    event.preventDefault();
    this.list.setDragOver(this.index());
  }

  onDragLeave(event: DragEvent): void {
    // Only clear if leaving to outside
    const rect = this.elementRef.nativeElement.getBoundingClientRect();
    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    ) {
      // Check if related target is not a child
      const related = event.relatedTarget as HTMLElement;
      if (!this.elementRef.nativeElement.contains(related)) {
        this.list.setDragOver(null);
      }
    }
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.list.endDrag();
  }

  onKeydown(event: KeyboardEvent): void {
    if (this.list.disabled()) return;

    const isVertical = this.list.orientation() === 'vertical';

    if (
      (isVertical && event.key === 'ArrowUp') ||
      (!isVertical && event.key === 'ArrowLeft')
    ) {
      event.preventDefault();
      this.list.moveUp(this.index());
      this.focusSelf();
    } else if (
      (isVertical && event.key === 'ArrowDown') ||
      (!isVertical && event.key === 'ArrowRight')
    ) {
      event.preventDefault();
      this.list.moveDown(this.index());
      this.focusSelf();
    }
  }

  private focusSelf(): void {
    // Re-focus after move (item might have moved in DOM)
    requestAnimationFrame(() => {
      this.elementRef.nativeElement.focus();
    });
  }
}

// ============================================================================
// SortableHandle
// ============================================================================
@Component({
  selector: '[sc-sortable-handle]',
  template: `
    <ng-content>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        class="size-4"
      >
        <circle cx="9" cy="5" r="1" />
        <circle cx="9" cy="12" r="1" />
        <circle cx="9" cy="19" r="1" />
        <circle cx="15" cy="5" r="1" />
        <circle cx="15" cy="12" r="1" />
        <circle cx="15" cy="19" r="1" />
      </svg>
    </ng-content>
  `,
  host: {
    'data-slot': 'sortable-handle',
    '[class]': 'class()',
    draggable: 'true',
    '[attr.aria-label]': '"Drag to reorder"',
    '(dragstart)': 'onDragStart($event)',
    '(mousedown)': 'onMouseDown()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSortableHandle {
  private readonly item = inject<ScSortableItem<unknown>>(SC_SORTABLE_ITEM);
  private readonly list = inject<ScSortableList<unknown>>(SC_SORTABLE_LIST);

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'cursor-grab active:cursor-grabbing',
      'text-muted-foreground hover:text-foreground',
      'touch-none',
      this.classInput(),
    ),
  );

  onDragStart(event: DragEvent): void {
    event.stopPropagation();
    this.list.startDrag(this.item.index());
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('text/plain', String(this.item.index()));
    }
  }

  onMouseDown(): void {
    // Prepare for potential drag
  }
}

// ============================================================================
// SortableOverlay (visual indicator during drag)
// ============================================================================
@Component({
  selector: '[sc-sortable-overlay]',
  template: `
    @if (list.isDragging()) {
      <div
        class="fixed inset-0 z-40 cursor-grabbing"
        (dragover)="onDragOver($event)"
      ></div>
    }
  `,
  host: {
    'data-slot': 'sortable-overlay',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSortableOverlay {
  readonly list = inject<ScSortableList<unknown>>(SC_SORTABLE_LIST);

  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }
}
