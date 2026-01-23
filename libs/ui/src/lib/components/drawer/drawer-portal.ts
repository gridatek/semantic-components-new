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
import { ScDrawer } from './drawer';

@Component({
  selector: 'div[sc-drawer-portal]',
  imports: [OverlayModule],
  template: `
    <ng-template #drawerTemplate>
      <div
        class="fixed inset-0 z-50 flex"
        [class.items-end]="drawer.direction() === 'bottom'"
        [class.items-start]="drawer.direction() === 'top'"
        [class.justify-end]="drawer.direction() === 'right'"
        [class.justify-start]="drawer.direction() === 'left'"
        (keydown.escape)="onEscapeKey()"
      >
        <!-- Backdrop -->
        <div
          [class]="backdropClass()"
          aria-hidden="true"
          (click)="onBackdropClick()"
        ></div>
        <!-- Content -->
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
  readonly drawer = inject(ScDrawer);
  private readonly overlay = inject(Overlay);
  private readonly viewContainerRef = inject(ViewContainerRef);

  readonly classInput = input<string>('', { alias: 'class' });

  @ViewChild('drawerTemplate', { static: true })
  private drawerTemplate!: TemplateRef<unknown>;

  private overlayRef = this.overlay.create({
    positionStrategy: this.overlay.position().global(),
    hasBackdrop: false,
    scrollStrategy: this.overlay.scrollStrategies.block(),
  });

  protected readonly class = computed(() => cn('', this.classInput()));

  protected readonly backdropClass = computed(() =>
    cn(
      'fixed inset-0 bg-black/80',
      this.drawer.open()
        ? 'opacity-100 visible transition-[opacity,visibility] duration-300 ease-out'
        : 'opacity-0 invisible transition-[opacity,visibility] duration-300 ease-in [transition-delay:0s,300ms]',
    ),
  );

  constructor() {
    effect(() => {
      if (this.drawer.open()) {
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

  onBackdropClick(): void {
    this.drawer.open.set(false);
  }

  onEscapeKey(): void {
    this.drawer.open.set(false);
  }
}
