import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';
import { SC_NUMBER_INPUT } from './number-input';

@Component({
  selector: 'button[sc-number-input-increment]',
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      class="size-4"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  `,
  host: {
    'data-slot': 'number-input-increment',
    type: 'button',
    '[class]': 'class()',
    '[disabled]': '!numberInput.canIncrement()',
    '[attr.aria-label]': '"Increase value"',
    '(click)': 'onClick()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScNumberInputIncrement {
  readonly numberInput = inject(SC_NUMBER_INPUT);

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'inline-flex size-9 items-center justify-center border-l border-input',
      'hover:bg-accent hover:text-accent-foreground',
      'disabled:pointer-events-none disabled:opacity-50',
      'focus:outline-none focus-visible:ring-1 focus-visible:ring-ring',
      'rounded-r-md',
      this.classInput(),
    ),
  );

  onClick(): void {
    this.numberInput.increment();
  }
}
