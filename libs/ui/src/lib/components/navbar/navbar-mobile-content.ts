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
  selector: 'div[sc-navbar-mobile-content]',
  imports: [OverlayModule],
  template: `
    <ng-template #mobileMenuTemplate>
      <div
        [attr.data-slot]="'navbar-mobile-menu'"
        id="navbar-mobile-menu"
        role="navigation"
        [attr.aria-label]="'Mobile navigation'"
        [class]="menuClass()"
        [tabindex]="-1"
      >
        <ng-content />
      </div>
    </ng-template>
  `,
  host: {
    'data-slot': 'navbar-mobile-content',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScNavbarMobileContent {
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

  protected readonly menuClass = computed(() => {
    const isOpen = this.navbar.mobileMenuOpen();

    return cn(
      'md:hidden',
      'fixed inset-x-0 top-[calc(var(--navbar-height,57px))] bottom-0',
      'z-50',
      'flex flex-col gap-2 p-6',
      'bg-background border-t border-border',
      'transition-all duration-300 ease-in-out',
      isOpen
        ? 'opacity-100 translate-y-0 pointer-events-auto'
        : 'opacity-0 -translate-y-full pointer-events-none',
    );
  });

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
