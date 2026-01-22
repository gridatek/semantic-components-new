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
import { ScNavigationMenuItem } from './sc-navigation-menu-item';

const position: ConnectedPosition = {
  originX: 'start',
  originY: 'bottom',
  overlayX: 'start',
  overlayY: 'top',
  offsetY: 4,
};

@Component({
  selector: 'div[sc-navigation-menu-content]',
  imports: [OverlayModule],
  template: `
    @if (origin(); as origin) {
      <ng-template
        cdkConnectedOverlay
        [cdkConnectedOverlayOrigin]="origin"
        [cdkConnectedOverlayOpen]="menuItem.open()"
        [cdkConnectedOverlayPositions]="[position]"
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
    'data-slot': 'navigation-menu-content',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScNavigationMenuContent {
  readonly menuItem = inject(ScNavigationMenuItem);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly position = position;

  protected readonly origin = computed(() => this.menuItem.origin());

  protected readonly class = computed(() => cn('', this.classInput()));

  protected readonly contentClass = computed(() =>
    cn(
      'left-0 top-0 w-full md:absolute md:w-auto',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
      this.menuItem.open()
        ? 'opacity-100 scale-100 transition-[opacity,transform] duration-150 ease-out'
        : 'opacity-0 scale-95 transition-[opacity,transform] duration-150 ease-in',
    ),
  );

  onMouseEnter(): void {
    this.menuItem.cancelHide();
  }

  onMouseLeave(): void {
    this.menuItem.onMouseLeave();
  }
}
