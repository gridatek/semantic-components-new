import { CdkTrapFocus } from '@angular/cdk/a11y';
import { Overlay, OverlayModule } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  input,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';
import { ScBackdrop } from '../backdrop';
import { ScDrawerProvider } from './drawer-provider';

@Component({
  selector: 'div[sc-drawer-portal]',
  imports: [OverlayModule, ScBackdrop, CdkTrapFocus],
  template: `
    <ng-template #drawerTemplate>
      <!-- Visual backdrop (behind transparent CDK backdrop) -->
      <div
        sc-backdrop
        [open]="drawer.open()"
        (animationComplete)="onBackdropAnimationComplete()"
      ></div>
      <div cdkTrapFocus [cdkTrapFocusAutoCapture]="true">
        <ng-content />
      </div>
    </ng-template>
  `,
  host: {
    'data-slot': 'drawer-portal',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScDrawerPortal {
  readonly drawer = inject(ScDrawerProvider);
  private readonly overlay = inject(Overlay);
  private readonly viewContainerRef = inject(ViewContainerRef);

  readonly classInput = input<string>('', { alias: 'class' });

  @ViewChild('drawerTemplate', { static: true })
  private drawerTemplate!: TemplateRef<unknown>;

  private overlayRef = this.overlay.create({
    positionStrategy: this.overlay.position().global(),
    hasBackdrop: true,
    backdropClass: 'cdk-overlay-transparent-backdrop',
    scrollStrategy: this.overlay.scrollStrategies.block(),
  });

  protected readonly class = computed(() => cn('', this.classInput()));

  constructor() {
    // Handle Backdrop and Keyboard Close
    this.overlayRef.backdropClick().subscribe(() => this.closeDrawer());
    this.overlayRef.keydownEvents().subscribe((event) => {
      if (event.key === 'Escape') this.closeDrawer();
    });

    // Use overlayOpen instead of open to delay DOM removal until animation completes
    effect(() => {
      if (this.drawer.overlayOpen()) {
        this.attachDrawer();
      } else {
        this.detachDrawer();
      }
    });
  }

  private attachDrawer(): void {
    if (!this.overlayRef.hasAttached()) {
      const portal = new TemplatePortal(
        this.drawerTemplate,
        this.viewContainerRef,
      );
      this.overlayRef.attach(portal);
    }
  }

  private detachDrawer(): void {
    if (this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
    }
  }

  private closeDrawer(): void {
    this.drawer.open.set(false);
  }

  /**
   * Called when backdrop close animation completes
   * Forwards to provider for coordination
   */
  protected onBackdropAnimationComplete(): void {
    this.drawer.onBackdropAnimationComplete();
  }
}
