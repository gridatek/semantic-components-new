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
  selector: 'button[sc-signature-pad-pen-color]',
  template: `
    <span [class]="dotClass()" [style.background-color]="color()"></span>
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
export class ScSignaturePadColorButton {
  protected readonly signaturePad = inject(SC_SIGNATURE_PAD);

  readonly color = input.required<string>();
  readonly ariaLabel = input<string>('');
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly isActive = computed(
    () => this.signaturePad.penColor() === this.color(),
  );

  protected readonly class = computed(() =>
    cn(
      'inline-flex items-center justify-center size-8 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors',
      'disabled:pointer-events-none disabled:opacity-50',
      'data-[active]:border-primary data-[active]:bg-primary/10',
      this.classInput(),
    ),
  );

  protected readonly dotClass = computed(() =>
    cn(
      'size-4 rounded-full border border-border transition-transform',
      this.isActive() ? 'scale-110' : 'scale-100',
    ),
  );

  protected onClick(): void {
    if (this.signaturePad.disabled()) return;
    this.signaturePad.penColor.set(this.color());
  }
}
