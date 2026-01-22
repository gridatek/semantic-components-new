import { ConnectedPosition, OverlayModule } from '@angular/cdk/overlay';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';
import { HoverCardAlign, HoverCardSide, ScHoverCard } from './sc-hover-card';

type PositionKey = `${HoverCardSide}-${HoverCardAlign}`;

const positionMap: Record<PositionKey, ConnectedPosition> = {
  'top-start': {
    originX: 'start',
    originY: 'top',
    overlayX: 'start',
    overlayY: 'bottom',
    offsetY: -4,
  },
  'top-center': {
    originX: 'center',
    originY: 'top',
    overlayX: 'center',
    overlayY: 'bottom',
    offsetY: -4,
  },
  'top-end': {
    originX: 'end',
    originY: 'top',
    overlayX: 'end',
    overlayY: 'bottom',
    offsetY: -4,
  },
  'bottom-start': {
    originX: 'start',
    originY: 'bottom',
    overlayX: 'start',
    overlayY: 'top',
    offsetY: 4,
  },
  'bottom-center': {
    originX: 'center',
    originY: 'bottom',
    overlayX: 'center',
    overlayY: 'top',
    offsetY: 4,
  },
  'bottom-end': {
    originX: 'end',
    originY: 'bottom',
    overlayX: 'end',
    overlayY: 'top',
    offsetY: 4,
  },
  'left-start': {
    originX: 'start',
    originY: 'top',
    overlayX: 'end',
    overlayY: 'top',
    offsetX: -4,
  },
  'left-center': {
    originX: 'start',
    originY: 'center',
    overlayX: 'end',
    overlayY: 'center',
    offsetX: -4,
  },
  'left-end': {
    originX: 'start',
    originY: 'bottom',
    overlayX: 'end',
    overlayY: 'bottom',
    offsetX: -4,
  },
  'right-start': {
    originX: 'end',
    originY: 'top',
    overlayX: 'start',
    overlayY: 'top',
    offsetX: 4,
  },
  'right-center': {
    originX: 'end',
    originY: 'center',
    overlayX: 'start',
    overlayY: 'center',
    offsetX: 4,
  },
  'right-end': {
    originX: 'end',
    originY: 'bottom',
    overlayX: 'start',
    overlayY: 'bottom',
    offsetX: 4,
  },
};

@Component({
  selector: 'div[sc-hover-card-content]',
  imports: [OverlayModule],
  template: `
    @if (origin(); as origin) {
      <ng-template
        cdkConnectedOverlay
        [cdkConnectedOverlayOrigin]="origin"
        [cdkConnectedOverlayOpen]="hoverCard.open()"
        [cdkConnectedOverlayPositions]="[position()]"
      >
        <div
          [class]="contentClass()"
          (mouseenter)="onMouseEnter()"
          (mouseleave)="onMouseLeave()"
        >
          <ng-content />
        </div>
      </ng-template>
    }
  `,
  host: {
    'data-slot': 'hover-card-content',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScHoverCardContent {
  readonly hoverCard = inject(ScHoverCard);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly origin = computed(() => this.hoverCard.origin());

  protected readonly position = computed(() => {
    const side = this.hoverCard.side();
    const align = this.hoverCard.align();
    const key: PositionKey = `${side}-${align}`;
    return positionMap[key];
  });

  protected readonly class = computed(() => cn('', this.classInput()));

  protected readonly contentClass = computed(() =>
    cn(
      'z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none',
      this.hoverCard.open()
        ? 'opacity-100 scale-100 transition-[opacity,transform] duration-150 ease-out'
        : 'opacity-0 scale-95 transition-[opacity,transform] duration-150 ease-in',
    ),
  );

  private hideTimeout: ReturnType<typeof setTimeout> | null = null;

  onMouseEnter(): void {
    this.hoverCard.cancelTriggerHide();
    this.cancelHide();
    this.hoverCard.show();
  }

  onMouseLeave(): void {
    this.scheduleHide();
  }

  private scheduleHide(): void {
    this.cancelHide();
    this.hideTimeout = setTimeout(() => {
      this.hoverCard.hide();
    }, this.hoverCard.closeDelay());
  }

  private cancelHide(): void {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
  }
}
