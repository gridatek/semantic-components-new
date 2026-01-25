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
import { ScNavbar } from './navbar';

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
  private readonly navbar = inject(ScNavbar);
  private readonly overlay = inject(Overlay);
  private readonly viewContainerRef = inject(ViewContainerRef);

  readonly classInput = input<string>('', { alias: 'class' });

  @ViewChild('mobileMenuTemplate', { static: true })
  private mobileMenuTemplate!: TemplateRef<unknown>;

  private overlayRef = this.overlay.create({
    positionStrategy: this.overlay.position().global(),
    hasBackdrop: false,
    scrollStrategy: this.overlay.scrollStrategies.block(),
  });

  protected readonly class = computed(() => cn('md:hidden', this.classInput()));

  constructor() {
    // Handle Keyboard Close
    this.overlayRef.keydownEvents().subscribe((event) => {
      if (event.key === 'Escape') this.closeMenu();
    });

    effect(() => {
      if (this.navbar.mobileMenuOpen()) {
        this.attachMenu();
      } else {
        this.detachMenu();
      }
    });
  }

  private attachMenu(): void {
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
      // Wait for animation to complete before detaching
      setTimeout(() => {
        this.overlayRef.detach();
      }, 300);
    }
  }

  private closeMenu(): void {
    this.navbar.mobileMenuOpen.set(false);
  }
}
