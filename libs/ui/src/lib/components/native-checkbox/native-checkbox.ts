import {
  computed,
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  signal,
} from '@angular/core';
import { cn } from '../../utils';

const checkSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E")`;
const indeterminateSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' x2='19' y1='12' y2='12'/%3E%3C/svg%3E")`;

@Directive({
  selector: 'input[scNativeCheckbox]',
  host: {
    type: 'checkbox',
    'data-slot': 'checkbox',
    '[class]': 'class()',
    '[style.background-image]': 'backgroundImage()',
    '[style.background-size]': '"100% 100%"',
    '[style.background-position]': '"center"',
    '[style.background-repeat]': '"no-repeat"',
    '(change)': 'onChange()',
    '(input)': 'onChange()',
  },
})
export class ScNativeCheckbox {
  private readonly elementRef = inject(ElementRef<HTMLInputElement>);

  readonly classInput = input<string>('', { alias: 'class' });
  readonly indeterminate = input<boolean>(false);

  protected readonly checked = signal(false);

  constructor() {
    // Set indeterminate state on the native element
    effect(() => {
      this.elementRef.nativeElement.indeterminate = this.indeterminate();
    });
  }

  protected readonly class = computed(() =>
    cn(
      'peer h-4 w-4 shrink-0 appearance-none rounded-sm border border-primary bg-background ring-offset-background transition-colors',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'checked:bg-primary checked:border-primary',
      'indeterminate:bg-primary indeterminate:border-primary',
      this.classInput(),
    ),
  );

  protected readonly backgroundImage = computed(() => {
    if (this.indeterminate()) return indeterminateSvg;
    if (this.checked()) return checkSvg;
    return 'none';
  });

  protected onChange(): void {
    this.checked.set(this.elementRef.nativeElement.checked);
  }
}
