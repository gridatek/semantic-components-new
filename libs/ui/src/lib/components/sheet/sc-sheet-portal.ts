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
import { ScSheet } from './sc-sheet';

@Component({
  selector: 'div[sc-sheet-portal]',
  imports: [OverlayModule],
  template: `
    <ng-template #sheetTemplate>
      <div
        class="fixed inset-0 z-50"
        (click)="onBackdropClick($event)"
        (keydown.escape)="closeSheet()"
      >
        <!-- Backdrop -->
        <div [class]="backdropClass()" aria-hidden="true"></div>
        <!-- Content -->
        <ng-content />
      </div>
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
  private readonly sheet = inject(ScSheet);
  private readonly overlay = inject(Overlay);
  private readonly viewContainerRef = inject(ViewContainerRef);

  readonly classInput = input<string>('', { alias: 'class' });

  @ViewChild('sheetTemplate', { static: true })
  private sheetTemplate!: TemplateRef<unknown>;

  private overlayRef = this.overlay.create({
    positionStrategy: this.overlay.position().global(),
    hasBackdrop: false,
    scrollStrategy: this.overlay.scrollStrategies.block(),
  });

  protected readonly class = computed(() => cn('', this.classInput()));

  protected readonly backdropClass = computed(() =>
    cn(
      'fixed inset-0 bg-black/80',
      this.sheet.open()
        ? 'opacity-100 visible transition-[opacity,visibility] duration-300 ease-out'
        : 'opacity-0 invisible transition-[opacity,visibility] duration-300 ease-in [transition-delay:0s,300ms]',
    ),
  );

  constructor() {
    effect(() => {
      if (this.sheet.open()) {
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

  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closeSheet();
    }
  }

  closeSheet(): void {
    this.sheet.open.set(false);
  }
}
