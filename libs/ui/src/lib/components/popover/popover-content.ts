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
import { ScPopover, PopoverSide, PopoverAlign } from './popover';

const positionMap: Record<
  PopoverSide,
  Record<PopoverAlign, ConnectedPosition>
> = {
  top: {
    start: {
      originX: 'start',
      originY: 'top',
      overlayX: 'start',
      overlayY: 'bottom',
      offsetY: -4,
    },
    center: {
      originX: 'center',
      originY: 'top',
      overlayX: 'center',
      overlayY: 'bottom',
      offsetY: -4,
    },
    end: {
      originX: 'end',
      originY: 'top',
      overlayX: 'end',
      overlayY: 'bottom',
      offsetY: -4,
    },
  },
  bottom: {
    start: {
      originX: 'start',
      originY: 'bottom',
      overlayX: 'start',
      overlayY: 'top',
      offsetY: 4,
    },
    center: {
      originX: 'center',
      originY: 'bottom',
      overlayX: 'center',
      overlayY: 'top',
      offsetY: 4,
    },
    end: {
      originX: 'end',
      originY: 'bottom',
      overlayX: 'end',
      overlayY: 'top',
      offsetY: 4,
    },
  },
  left: {
    start: {
      originX: 'start',
      originY: 'top',
      overlayX: 'end',
      overlayY: 'top',
      offsetX: -4,
    },
    center: {
      originX: 'start',
      originY: 'center',
      overlayX: 'end',
      overlayY: 'center',
      offsetX: -4,
    },
    end: {
      originX: 'start',
      originY: 'bottom',
      overlayX: 'end',
      overlayY: 'bottom',
      offsetX: -4,
    },
  },
  right: {
    start: {
      originX: 'end',
      originY: 'top',
      overlayX: 'start',
      overlayY: 'top',
      offsetX: 4,
    },
    center: {
      originX: 'end',
      originY: 'center',
      overlayX: 'start',
      overlayY: 'center',
      offsetX: 4,
    },
    end: {
      originX: 'end',
      originY: 'bottom',
      overlayX: 'start',
      overlayY: 'bottom',
      offsetX: 4,
    },
  },
};

@Component({
  selector: 'div[sc-popover-content]',
  imports: [OverlayModule],
  template: `
    @if (origin(); as origin) {
      <ng-template
        [cdkConnectedOverlayOpen]="popover.open()"
        [cdkConnectedOverlay]="{ origin, usePopover: 'inline' }"
        [cdkConnectedOverlayPositions]="[position()]"
        (overlayOutsideClick)="closePopover($event)"
        (overlayKeydown)="onKeydown($event)"
      >
        <div [class]="contentClass()" role="dialog" tabindex="-1">
          <ng-content />
        </div>
      </ng-template>
    }
  `,
  host: {
    'data-slot': 'popover-content',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPopoverContent {
  readonly popover = inject(ScPopover);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly origin = computed(() => this.popover.origin());

  protected readonly position = computed(() => {
    const side = this.popover.side();
    const align = this.popover.align();
    return positionMap[side][align];
  });

  protected readonly class = computed(() => cn('', this.classInput()));

  protected readonly contentClass = computed(() =>
    cn(
      'bg-popover text-popover-foreground z-50 w-72 rounded-md border p-4 shadow-md outline-none',
      this.popover.open()
        ? 'opacity-100 scale-100 transition-[opacity,transform] duration-150 ease-out'
        : 'opacity-0 scale-95 transition-[opacity,transform] duration-150 ease-in',
    ),
  );

  closePopover(event: MouseEvent): void {
    // Only close if clicking outside
    this.popover.open.set(false);
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.popover.open.set(false);
    }
  }
}
