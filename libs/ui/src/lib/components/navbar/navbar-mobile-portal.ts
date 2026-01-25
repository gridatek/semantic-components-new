import { Overlay, OverlayModule, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  effect,
  inject,
  input,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';
import { ScNavbarProvider } from './navbar-provider';

@Component({
  selector: 'div[sc-navbar-mobile-portal]',
  imports: [OverlayModule],
  template: `
    <ng-template #mobileMenuTemplate>
      <ng-content />
    </ng-template>
  `,
  host: {
    'data-slot': 'navbar-mobile-portal',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScNavbarMobilePortal {
  private readonly provider = inject(ScNavbarProvider);
  private readonly overlay = inject(Overlay);
  private readonly viewContainerRef = inject(ViewContainerRef);
  private readonly destroyRef = inject(DestroyRef); // 1. Inject DestroyRef

  readonly classInput = input<string>('', { alias: 'class' });

  @ViewChild('mobileMenuTemplate', { static: true })
  private mobileMenuTemplate!: TemplateRef<unknown>;

  protected readonly origin = computed(() => this.provider.origin());
  protected readonly class = computed(() => cn('md:hidden', this.classInput()));

  // 2. Create overlay without strict dependency on origin initially
  private overlayRef: OverlayRef = this.overlay.create({
    positionStrategy: this.overlay.position().global(), // Default placeholder
    hasBackdrop: false, // Ensure this is intended (clicking outside won't close it by default)
    scrollStrategy: this.overlay.scrollStrategies.block(),
  });

  private detachTimer: any; // 3. Track timer to prevent race conditions

  constructor() {
    // 4. Cleanup memory when component is destroyed
    this.destroyRef.onDestroy(() => {
      this.overlayRef.dispose();
      clearTimeout(this.detachTimer);
    });

    // Handle Keyboard Close
    this.overlayRef.keydownEvents().subscribe((event) => {
      if (event.key === 'Escape') this.closeMenu();
    });

    // 5. Update Position Strategy when Origin becomes available
    effect(() => {
      const origin = this.origin();
      if (origin?.elementRef) {
        const positionStrategy = this.overlay
          .position()
          .flexibleConnectedTo(origin.elementRef)
          .withPositions([
            {
              originX: 'start',
              originY: 'bottom',
              overlayX: 'start',
              overlayY: 'top',
            },
          ])
          .withPush(false);

        this.overlayRef.updatePositionStrategy(positionStrategy);
      }
    });

    // Handle Open/Close state
    effect(() => {
      if (this.provider.open()) {
        this.attachMenu();
      } else {
        this.detachMenu();
      }
    });
  }

  private attachMenu(): void {
    // 6. Stop any pending close actions if user re-opens quickly
    if (this.detachTimer) {
      clearTimeout(this.detachTimer);
      this.detachTimer = null;
    }

    if (!this.overlayRef.hasAttached()) {
      const portal = new TemplatePortal(
        this.mobileMenuTemplate,
        this.viewContainerRef,
      );
      this.overlayRef.attach(portal);
    }
  }

  private detachMenu(): void {
    if (this.overlayRef.hasAttached()) {
      // 7. Store timer ID to clear it if needed
      this.detachTimer = setTimeout(() => {
        this.overlayRef.detach();
      }, 300);
    }
  }

  private closeMenu(): void {
    this.provider.open.set(false);
  }
}
