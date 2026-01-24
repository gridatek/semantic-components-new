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
import { firstValueFrom, timer } from 'rxjs';

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

  protected readonly class = computed(() => cn('', this.classInput()));

  constructor() {
    effect(() => {
      if (this.alertDialogProvider.open()) {
        this.attachDialog();
      } else {
        this.detachDialogWithAnimation();
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

  private async detachDialogWithAnimation() {
    if (this.overlayRef.hasAttached()) {
      const backdrop = this.overlayRef.backdropElement;

      // Start the fade out
      backdrop?.classList.add('sc-backdrop-hiding');

      // Wait for the CSS transition (300ms)
      await firstValueFrom(timer(300));

      this.overlayRef.detach();
    }
  }
}
