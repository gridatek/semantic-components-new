import { OverlayModule } from '@angular/cdk/overlay';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { ScMenu } from './menu';
import { cn } from '../../utils';

@Component({
  selector: 'div[sc-menu-popup]',
  imports: [OverlayModule],
  template: `
    @if (origin(); as origin) {
      <ng-template
        [cdkConnectedOverlayOpen]="expanded()"
        [cdkConnectedOverlay]="{ origin, usePopover: 'inline' }"
        [cdkConnectedOverlayPositions]="[
          {
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top',
            offsetY: 4,
          },
        ]"
        cdkAttachPopoverAsChild
      >
        <ng-content />
      </ng-template>
    }
  `,
  host: {
    'data-slot': 'menu-popup',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScMenuPopup {
  private readonly scMenu = inject(ScMenu);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly origin = computed(() => this.scMenu.origin());
  protected readonly expanded = computed(
    () => this.scMenu.trigger()?.expanded() ?? false,
  );

  protected readonly class = computed(() => cn('', this.classInput()));
}
