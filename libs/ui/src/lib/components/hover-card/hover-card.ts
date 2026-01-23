import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';
import { ScHoverCardProvider } from './hover-card-provider';

@Component({
  selector: 'div[sc-hover-card]',
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'hover-card',
    '[class]': 'class()',
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScHoverCard {
  readonly hoverCardProvider = inject(ScHoverCardProvider);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none',
      this.hoverCardProvider.open()
        ? 'opacity-100 scale-100 transition-[opacity,transform] duration-150 ease-out'
        : 'opacity-0 scale-95 transition-[opacity,transform] duration-150 ease-in',
      this.classInput(),
    ),
  );

  private hideTimeout: ReturnType<typeof setTimeout> | null = null;

  onMouseEnter(): void {
    this.hoverCardProvider.cancelTriggerHide();
    this.cancelHide();
    this.hoverCardProvider.show();
  }

  onMouseLeave(): void {
    this.scheduleHide();
  }

  private scheduleHide(): void {
    this.cancelHide();
    this.hideTimeout = setTimeout(() => {
      this.hoverCardProvider.hide();
    }, this.hoverCardProvider.closeDelay());
  }

  private cancelHide(): void {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
  }
}
