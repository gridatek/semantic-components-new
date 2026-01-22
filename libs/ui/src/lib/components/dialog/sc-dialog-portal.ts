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
import { ScDialog } from './sc-dialog';

@Component({
  selector: 'div[sc-dialog-portal]',
  imports: [OverlayModule],
  template: `
    <ng-template #dialogTemplate>
      <div
        class="fixed inset-0 z-50 flex items-center justify-center"
        (click)="onBackdropClick($event)"
        (keydown.escape)="closeDialog()"
      >
        <!-- Backdrop -->
        <div [class]="backdropClass()" aria-hidden="true"></div>
        <!-- Content -->
        <ng-content />
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
  private readonly dialog = inject(ScDialog);
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
    hasBackdrop: false,
    scrollStrategy: this.overlay.scrollStrategies.block(),
  });

  protected readonly class = computed(() => cn('', this.classInput()));

  protected readonly backdropClass = computed(() =>
    cn(
      'fixed inset-0 bg-black/80',
      this.dialog.open()
        ? 'opacity-100 visible transition-[opacity,visibility] duration-150 ease-out'
        : 'opacity-0 invisible transition-[opacity,visibility] duration-150 ease-in [transition-delay:0s,150ms]',
    ),
  );

  constructor() {
    effect(() => {
      if (this.dialog.open()) {
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

  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closeDialog();
    }
  }

  closeDialog(): void {
    this.dialog.open.set(false);
  }
}
