import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { SC_SIGNATURE_PAD } from './signature-pad';
import { cn } from '../../utils';

@Component({
  selector: 'div[sc-signature-pad-pen]',
  template: `
    <div [class]="colorGroupClass()">
      @for (color of colors(); track color) {
        <button
          type="button"
          [class]="colorButtonClass(color)"
          [attr.aria-label]="'Color ' + color"
          [attr.data-active]="signaturePad.penColor() === color || null"
          (click)="setColor(color)"
        >
          <span
            [class]="colorDotClass(color)"
            [style.background-color]="color"
          ></span>
        </button>
      }
    </div>

    <div [class]="widthGroupClass()">
      @for (width of widths(); track width) {
        <button
          type="button"
          [class]="widthButtonClass(width)"
          [attr.aria-label]="'Width ' + width"
          [attr.data-active]="signaturePad.penWidth() === width || null"
          (click)="setWidth(width)"
        >
          <span
            [class]="widthLineClass(width)"
            [style.height.px]="width"
          ></span>
        </button>
      }
    </div>
  `,
  host: {
    '[class]': 'class()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSignaturePadPen {
  protected readonly signaturePad = inject(SC_SIGNATURE_PAD);

  readonly colors = input<string[]>([
    '#000000',
    '#1d4ed8',
    '#dc2626',
    '#16a34a',
  ]);
  readonly widths = input<number[]>([1, 2, 3, 5]);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('flex items-center gap-3', this.classInput()),
  );

  protected readonly colorGroupClass = computed(() =>
    cn('flex items-center gap-1'),
  );

  protected readonly widthGroupClass = computed(() =>
    cn('flex items-center gap-1'),
  );

  protected colorButtonClass(color: string): string {
    const isActive = this.signaturePad.penColor() === color;
    return cn(
      'inline-flex items-center justify-center size-8 rounded-md border border-input bg-background hover:bg-accent transition-colors',
      isActive && 'border-primary bg-primary/10',
    );
  }

  protected colorDotClass(color: string): string {
    const isActive = this.signaturePad.penColor() === color;
    return cn(
      'size-4 rounded-full border border-border transition-transform',
      isActive ? 'scale-110' : 'scale-100',
    );
  }

  protected widthButtonClass(width: number): string {
    const isActive = this.signaturePad.penWidth() === width;
    return cn(
      'inline-flex items-center justify-center size-8 rounded-md border border-input bg-background hover:bg-accent transition-colors',
      isActive && 'border-primary bg-primary/10',
    );
  }

  protected widthLineClass(width: number): string {
    const isActive = this.signaturePad.penWidth() === width;
    return cn(
      'w-4 rounded-full bg-foreground transition-all',
      isActive ? 'opacity-100' : 'opacity-60',
    );
  }

  protected setColor(color: string): void {
    if (this.signaturePad.disabled()) return;
    this.signaturePad.penColor.set(color);
  }

  protected setWidth(width: number): void {
    if (this.signaturePad.disabled()) return;
    this.signaturePad.penWidth.set(width);
  }
}
