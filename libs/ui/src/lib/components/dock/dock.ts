import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
  signal,
} from '@angular/core';
import { cn } from '../../utils';
import type { DockItem, DockPosition, DockSize } from './dock-types';
import { DEFAULT_DOCK_OPTIONS } from './dock-types';

@Component({
  selector: 'sc-dock',
  template: `
    <nav
      [class]="containerClass()"
      role="navigation"
      [attr.aria-label]="ariaLabel()"
      (mouseleave)="onMouseLeave()"
    >
      <div [class]="dockClass()">
        @for (item of items(); track item.id; let i = $index) {
          <button
            type="button"
            [class]="itemClass(i)"
            [style.transform]="getItemTransform(i)"
            [disabled]="item.disabled"
            [attr.aria-label]="item.label"
            [title]="item.label"
            (click)="onItemClick(item)"
            (mouseenter)="onMouseEnter(i)"
          >
            <span
              class="inline-flex items-center justify-center [&>svg]:w-full [&>svg]:h-full"
              [innerHTML]="item.icon"
            ></span>
            @if (item.badge !== undefined) {
              <span [class]="badgeClass()">
                {{ item.badge }}
              </span>
            }
          </button>
        }
      </div>
    </nav>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScDock {
  readonly items = input<DockItem[]>([]);
  readonly position = input<DockPosition>(DEFAULT_DOCK_OPTIONS.position);
  readonly size = input<DockSize>(DEFAULT_DOCK_OPTIONS.size);
  readonly magnification = input(DEFAULT_DOCK_OPTIONS.magnification);
  readonly magnificationScale = input(DEFAULT_DOCK_OPTIONS.magnificationScale);
  readonly ariaLabel = input('Application dock');
  readonly class = input<string>('');

  readonly itemClick = output<DockItem>();

  protected readonly hoveredIndex = signal<number | null>(null);

  protected readonly containerClass = computed(() => {
    const pos = this.position();
    return cn(
      'flex items-center justify-center',
      pos === 'bottom' && 'w-full',
      pos === 'left' && 'h-full',
      pos === 'right' && 'h-full',
      this.class(),
    );
  });

  protected readonly dockClass = computed(() => {
    const pos = this.position();
    const size = this.size();

    return cn(
      'flex items-end gap-1 p-2',
      'bg-background/80 backdrop-blur-lg',
      'border rounded-2xl shadow-lg',
      pos === 'bottom' && 'flex-row',
      pos === 'left' && 'flex-col',
      pos === 'right' && 'flex-col',
      size === 'sm' && 'p-1.5 gap-0.5',
      size === 'lg' && 'p-3 gap-2',
    );
  });

  protected itemClass(index: number): string {
    const size = this.size();
    const baseSize = this.getBaseSize();

    return cn(
      'relative flex items-center justify-center',
      'rounded-xl transition-all duration-150 ease-out',
      'bg-muted/50 hover:bg-muted',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      size === 'sm' && 'w-10 h-10 p-2',
      size === 'md' && 'w-12 h-12 p-2.5',
      size === 'lg' && 'w-14 h-14 p-3',
    );
  }

  protected badgeClass(): string {
    return cn(
      'absolute -top-1 -right-1',
      'min-w-[18px] h-[18px] px-1',
      'flex items-center justify-center',
      'text-[10px] font-medium',
      'bg-destructive text-destructive-foreground',
      'rounded-full',
    );
  }

  protected getItemTransform(index: number): string {
    if (!this.magnification()) return '';

    const hovered = this.hoveredIndex();
    if (hovered === null) return 'scale(1)';

    const distance = Math.abs(index - hovered);
    const maxDistance = 2;

    if (distance > maxDistance) return 'scale(1)';

    const scale = this.magnificationScale();
    const factor = 1 + (scale - 1) * (1 - distance / (maxDistance + 1));

    return `scale(${factor})`;
  }

  private getBaseSize(): number {
    const size = this.size();
    switch (size) {
      case 'sm':
        return 40;
      case 'md':
        return 48;
      case 'lg':
        return 56;
    }
  }

  onMouseEnter(index: number): void {
    this.hoveredIndex.set(index);
  }

  onMouseLeave(): void {
    this.hoveredIndex.set(null);
  }

  onItemClick(item: DockItem): void {
    if (!item.disabled) {
      this.itemClick.emit(item);
    }
  }
}
