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
  selector: 'button[sc-signature-pad-pen-width]',
  template: `
    <span [class]="lineClass()" [style.height.px]="width()"></span>
  `,
  host: {
    type: 'button',
    '[class]': 'class()',
    '[attr.aria-label]': 'ariaLabel()',
    '[attr.data-active]': 'isActive() || null',
    '[disabled]': 'signaturePad.disabled() || null',
    '(click)': 'onClick()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSignaturePadWidthButton {
  protected readonly signaturePad = inject(SC_SIGNATURE_PAD);

  readonly width = input.required<number>();
  readonly ariaLabel = input<string>('');
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly isActive = computed(
    () => this.signaturePad.penWidth() === this.width(),
  );

  protected readonly class = computed(() =>
    cn(
      'inline-flex items-center justify-center size-8 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors',
      'disabled:pointer-events-none disabled:opacity-50',
      'data-[active]:border-primary data-[active]:bg-primary/10',
      this.classInput(),
    ),
  );

  protected readonly lineClass = computed(() =>
    cn(
      'w-4 rounded-full bg-foreground transition-all',
      this.isActive() ? 'opacity-100' : 'opacity-60',
    ),
  );

  protected onClick(): void {
    if (this.signaturePad.disabled()) return;
    this.signaturePad.penWidth.set(this.width());
  }
}
