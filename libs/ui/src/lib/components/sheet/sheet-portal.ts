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
import { ScSheetProvider } from './sheet-provider';

@Component({
  selector: 'div[sc-sheet-portal]',
  imports: [OverlayModule],
  template: `
    <ng-template #sheetTemplate>
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
  private readonly sheetProvider = inject(ScSheetProvider);
  private readonly overlay = inject(Overlay);
  private readonly viewContainerRef = inject(ViewContainerRef);

  readonly classInput = input<string>('', { alias: 'class' });

  @ViewChild('sheetTemplate', { static: true })
  private sheetTemplate!: TemplateRef<unknown>;

  private overlayRef = this.overlay.create({
    positionStrategy: this.overlay.position().global(),
    hasBackdrop: true,
    scrollStrategy: this.overlay.scrollStrategies.block(),
  });

  protected readonly class = computed(() => cn('', this.classInput()));

  constructor() {
    // Handle Backdrop and Keyboard Close
    this.overlayRef.backdropClick().subscribe(() => this.closeSheet());
    this.overlayRef.keydownEvents().subscribe((event) => {
      if (event.key === 'Escape') this.closeSheet();
    });

    effect(() => {
      if (this.sheetProvider.open()) {
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

  closeSheet(): void {
    this.sheetProvider.open.set(false);
  }
}
