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
import { ScAlertDialogProvider } from './alert-dialog-provider';

@Component({
  selector: 'div[sc-alert-dialog-portal]',
  imports: [OverlayModule],
  template: `
    <ng-template #dialogTemplate>
      <ng-content />
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
  private readonly alertDialogProvider = inject(ScAlertDialogProvider);
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
    backdropClass: 'sc-backdrop',
    scrollStrategy: this.overlay.scrollStrategies.block(),
  });

  private backdropAnimationTimeout: ReturnType<typeof setTimeout> | null = null;

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

    // Sync backdrop animation with open state (not overlayOpen)
    effect(() => {
      const backdrop = this.overlayRef.backdropElement;
      if (backdrop) {
        if (this.alertDialogProvider.open()) {
          // Opening: Remove hiding class and cancel any pending timeout
          backdrop.classList.remove('sc-backdrop-hiding');
          if (this.backdropAnimationTimeout) {
            clearTimeout(this.backdropAnimationTimeout);
            this.backdropAnimationTimeout = null;
          }
        } else {
          // Closing: Add hiding class and wait 300ms for backdrop animation
          backdrop.classList.add('sc-backdrop-hiding');
        }
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
}
