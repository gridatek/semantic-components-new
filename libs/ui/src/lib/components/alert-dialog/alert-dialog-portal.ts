import { NgTemplateOutlet } from '@angular/common';
import { CdkTrapFocus } from '@angular/cdk/a11y';
import { Overlay, OverlayModule } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
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
import { ScAlertDialogProvider } from './alert-dialog-provider';

@Component({
  selector: 'div[sc-alert-dialog-portal]',
  imports: [OverlayModule, ScBackdrop, CdkTrapFocus, NgTemplateOutlet],
  template: `
    <ng-template #dialogTemplate>
      <!-- Visual backdrop (behind transparent CDK backdrop) -->
      <div
        sc-backdrop
        [open]="alertDialogProvider.open()"
        (animationComplete)="onBackdropAnimationComplete()"
      ></div>
      <div cdkTrapFocus [cdkTrapFocusAutoCapture]="true">
        <ng-template [ngTemplateOutlet]="contentTpl()" />
      </div>
    </ng-template>
  `,
  host: {
    'data-slot': 'alert-dialog-portal',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAlertDialogPortal {
  readonly contentTpl = contentChild.required(TemplateRef);
  readonly alertDialogProvider = inject(ScAlertDialogProvider);
  private readonly overlay = inject(Overlay);
  private readonly viewContainerRef = inject(ViewContainerRef);

  readonly classInput = input<string>('', { alias: 'class' });

  @ViewChild('dialogTemplate', { static: true })
  private dialogTemplate!: TemplateRef<unknown>;

  private overlayRef = this.overlay.create({
    positionStrategy: this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically(),
    hasBackdrop: true,
    backdropClass: 'cdk-overlay-transparent-backdrop',
    scrollStrategy: this.overlay.scrollStrategies.block(),
  });

  protected readonly class = computed(() => cn('', this.classInput()));

  constructor() {
    // Use overlayOpen instead of open to delay DOM removal until animation completes
    effect(() => {
      if (this.alertDialogProvider.overlayOpen()) {
        this.attachDialog();
      } else {
        this.detachDialog();
      }
    });
  }

  private attachDialog(): void {
    if (!this.overlayRef.hasAttached()) {
      const portal = new TemplatePortal(
        this.dialogTemplate,
        this.viewContainerRef,
      );
      this.overlayRef.attach(portal);
    }
  }

  private detachDialog(): void {
    if (this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
    }
  }

  /**
   * Called when backdrop close animation completes
   * Forwards to provider for coordination
   */
  protected onBackdropAnimationComplete(): void {
    this.alertDialogProvider.onBackdropAnimationComplete();
  }
}
