import { NgTemplateOutlet } from '@angular/common';
import { CdkTrapFocus } from '@angular/cdk/a11y';
import { Overlay, OverlayModule, OverlayRef } from '@angular/cdk/overlay';
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
  viewChild,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';
import { ScBackdrop } from '../backdrop';
import { ScDialogProvider } from './dialog-provider';

@Component({
  selector: 'div[sc-dialog-portal]',
  imports: [OverlayModule, ScBackdrop, CdkTrapFocus, NgTemplateOutlet],
  template: `
    <ng-template #dialogTemplate>
      <!-- Visual backdrop (behind transparent CDK backdrop) -->
      <div
        sc-backdrop
        [open]="dialogProvider.open()"
        (animationComplete)="onBackdropAnimationComplete()"
      ></div>
      <div cdkTrapFocus [cdkTrapFocusAutoCapture]="true">
        <ng-container [ngTemplateOutlet]="contentTemplate()" />
      </div>
    </ng-template>
  `,
  host: {
    'data-slot': 'dialog-portal',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScDialogPortal {
  readonly dialogProvider = inject(ScDialogProvider);
  private readonly overlay = inject(Overlay);
  private readonly viewContainerRef = inject(ViewContainerRef);

  readonly classInput = input<string>('', { alias: 'class' });

  private readonly dialogTemplate =
    viewChild.required<TemplateRef<unknown>>('dialogTemplate');

  protected readonly contentTemplate = contentChild.required(TemplateRef);

  private overlayRef: OverlayRef | null = null;

  protected readonly class = computed(() => cn('', this.classInput()));

  constructor() {
    // Use overlayOpen instead of open to delay DOM removal until animation completes
    effect(() => {
      if (this.dialogProvider.overlayOpen()) {
        this.attachDialog();
      } else {
        this.detachDialog();
      }
    });
  }

  private getOverlayRef() {
    if (!this.overlayRef) {
      this.overlayRef = this.overlay.create({
        positionStrategy: this.overlay
          .position()
          .global()
          .centerHorizontally()
          .centerVertically(),
        hasBackdrop: true,
        backdropClass: 'cdk-overlay-transparent-backdrop',
        scrollStrategy: this.overlay.scrollStrategies.block(),
      });

      this.overlayRef.backdropClick().subscribe(() => this.closeDialog());
      this.overlayRef.keydownEvents().subscribe((event) => {
        if (event.key === 'Escape') this.closeDialog();
      });
    }
    return this.overlayRef;
  }

  private attachDialog(): void {
    const ref = this.getOverlayRef();
    if (!ref.hasAttached()) {
      const portal = new TemplatePortal(
        this.dialogTemplate(),
        this.viewContainerRef,
      );
      ref.attach(portal);
    }
  }

  private detachDialog(): void {
    if (this.overlayRef?.hasAttached()) {
      this.overlayRef.detach();
    }
  }

  private closeDialog(): void {
    this.dialogProvider.open.set(false);
  }

  /**
   * Called when backdrop close animation completes
   * Forwards to provider for coordination
   */
  protected onBackdropAnimationComplete(): void {
    this.dialogProvider.onBackdropAnimationComplete();
  }
}
