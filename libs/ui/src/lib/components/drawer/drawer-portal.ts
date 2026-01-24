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
import { ScDrawerProvider } from './drawer-provider';
import { firstValueFrom, timer } from 'rxjs';

@Component({
  selector: 'div[sc-drawer-portal]',
  imports: [OverlayModule],
  template: `
    <ng-template #drawerTemplate>
      <ng-content />
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
    backdropClass: 'sc-backdrop',
    scrollStrategy: this.overlay.scrollStrategies.block(),
  });

  protected readonly class = computed(() => cn('', this.classInput()));

  constructor() {
    // Handle Backdrop and Keyboard Close
    this.overlayRef.backdropClick().subscribe(() => this.closeDrawer());
    this.overlayRef.keydownEvents().subscribe((event) => {
      if (event.key === 'Escape') this.closeDrawer();
    });

    effect(() => {
      if (this.drawer.open()) {
        this.attachDrawer();
      } else {
        this.detachDrawerWithAnimation();
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

  private async detachDrawerWithAnimation() {
    if (this.overlayRef.hasAttached()) {
      const backdrop = this.overlayRef.backdropElement;

      // Start the fade out
      backdrop?.classList.add('sc-backdrop-hiding');

      // Wait for the CSS transition (300ms)
      await firstValueFrom(timer(300));

      this.overlayRef.detach();
    }
  }

  private closeDrawer(): void {
    this.drawer.open.set(false);
  }
}
