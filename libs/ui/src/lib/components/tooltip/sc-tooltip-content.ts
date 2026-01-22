import { OverlayModule, ConnectedPosition } from '@angular/cdk/overlay';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';
import { ScTooltip, TooltipSide } from './sc-tooltip';

const positionMap: Record<TooltipSide, ConnectedPosition> = {
  top: {
    originX: 'center',
    originY: 'top',
    overlayX: 'center',
    overlayY: 'bottom',
    offsetY: -4,
  },
  bottom: {
    originX: 'center',
    originY: 'bottom',
    overlayX: 'center',
    overlayY: 'top',
    offsetY: 4,
  },
  left: {
    originX: 'start',
    originY: 'center',
    overlayX: 'end',
    overlayY: 'center',
    offsetX: -4,
  },
  right: {
    originX: 'end',
    originY: 'center',
    overlayX: 'start',
    overlayY: 'center',
    offsetX: 4,
  },
};

@Component({
  selector: 'div[sc-tooltip-content]',
  imports: [OverlayModule],
  template: `
    @if (origin(); as origin) {
      <ng-template
        [cdkConnectedOverlayOpen]="tooltip.open()"
        [cdkConnectedOverlay]="{ origin, usePopover: 'inline' }"
        [cdkConnectedOverlayPositions]="[position()]"
      >
        <div
          [class]="contentClass()"
          role="tooltip"
          (mouseenter)="onMouseEnter()"
          (mouseleave)="onMouseLeave()"
        >
          <ng-content />
        </div>
      </ng-template>
    }
  `,
  host: {
    'data-slot': 'tooltip-content',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTooltipContent {
  readonly tooltip = inject(ScTooltip);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly origin = computed(() => this.tooltip.origin());

  protected readonly position = computed(() => {
    const side = this.tooltip.side();
    return positionMap[side];
  });

  protected readonly class = computed(() => cn('', this.classInput()));

  protected readonly contentClass = computed(() =>
    cn(
      'bg-primary text-primary-foreground z-50 rounded-md px-3 py-1.5 text-xs',
      this.tooltip.open()
        ? 'opacity-100 scale-100 transition-[opacity,transform] duration-150 ease-out'
        : 'opacity-0 scale-95 transition-[opacity,transform] duration-150 ease-in',
    ),
  );

  onMouseEnter(): void {
    this.tooltip.show();
  }

  onMouseLeave(): void {
    this.tooltip.hide();
  }
}
