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
import { ScSheetProvider } from './sheet-provider';

@Component({
  selector: 'div[sc-sheet-portal]',
  imports: [OverlayModule, ScBackdrop],
  template: `
    <ng-template #sheetTemplate>
      <!-- Visual backdrop (behind transparent CDK backdrop) -->
      <div
        sc-backdrop
        [open]="sheetProvider.open()"
        (animationComplete)="onBackdropAnimationComplete()"
      ></div>
      <ng-content />
    </ng-template>
  `,
  host: {
    'data-slot': 'sheet-portal',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSheetPortal {
  readonly sheetProvider = inject(ScSheetProvider);
  private readonly overlay = inject(Overlay);
  private readonly viewContainerRef = inject(ViewContainerRef);

  readonly classInput = input<string>('', { alias: 'class' });

  @ViewChild('sheetTemplate', { static: true })
  private sheetTemplate!: TemplateRef<unknown>;

  private overlayRef = this.overlay.create({
    positionStrategy: this.overlay.position().global(),
    hasBackdrop: true,
    backdropClass: 'cdk-overlay-transparent-backdrop',
    scrollStrategy: this.overlay.scrollStrategies.block(),
  });

  protected readonly class = computed(() => cn('', this.classInput()));

  constructor() {
    // Handle Backdrop and Keyboard Close
    this.overlayRef.backdropClick().subscribe(() => this.closeSheet());
    this.overlayRef.keydownEvents().subscribe((event) => {
      if (event.key === 'Escape') this.closeSheet();
    });

    // Use overlayOpen instead of open to delay DOM removal until animation completes
    effect(() => {
      if (this.sheetProvider.overlayOpen()) {
        this.attachSheet();
      } else {
        this.detachSheet();
      }
    });
  }

  private attachSheet(): void {
    if (!this.overlayRef.hasAttached()) {
      const portal = new TemplatePortal(
        this.sheetTemplate,
        this.viewContainerRef,
      );
      this.overlayRef.attach(portal);
    }
  }

  private detachSheet(): void {
    if (this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
    }
  }

  private closeSheet(): void {
    this.sheetProvider.open.set(false);
  }

  /**
   * Called when backdrop close animation completes
   * Forwards to provider for coordination
   */
  protected onBackdropAnimationComplete(): void {
    this.sheetProvider.onBackdropAnimationComplete();
  }
}
