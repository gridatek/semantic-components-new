import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import {
  computed,
  contentChild,
  Directive,
  inject,
  input,
  signal,
} from '@angular/core';
import { cn } from '../../utils';
import { ScNavigationMenu } from './sc-navigation-menu';
import { ScNavigationMenuTrigger } from './sc-navigation-menu-trigger';

let itemIdCounter = 0;

@Directive({
  selector: 'li[sc-navigation-menu-item]',
  host: {
    'data-slot': 'navigation-menu-item',
    '[class]': 'class()',
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
  },
})
export class ScNavigationMenuItem {
  readonly navigationMenu = inject(ScNavigationMenu);
  readonly classInput = input<string>('', { alias: 'class' });

  readonly itemId = `nav-item-${++itemIdCounter}`;

  /** Whether this item's content is open */
  readonly open = signal<boolean>(false);

  private readonly triggerChild = contentChild(ScNavigationMenuTrigger);

  readonly origin = computed(() => this.triggerChild()?.overlayOrigin);

  protected readonly class = computed(() => cn('relative', this.classInput()));

  private hideTimeout: ReturnType<typeof setTimeout> | null = null;

  onMouseEnter(): void {
    this.cancelHide();
    this.open.set(true);
    this.navigationMenu.setActiveItem(this.itemId);
  }

  onMouseLeave(): void {
    this.scheduleHide();
  }

  private scheduleHide(): void {
    this.cancelHide();
    this.hideTimeout = setTimeout(() => {
      this.open.set(false);
      if (this.navigationMenu.activeItem() === this.itemId) {
        this.navigationMenu.setActiveItem(null);
      }
    }, 100);
  }

  cancelHide(): void {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
  }
}
