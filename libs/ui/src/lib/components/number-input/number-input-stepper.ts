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
  selector: '[sc-number-input-stepper]',
  template: `
    <button
      type="button"
      class="flex h-1/2 items-center justify-center hover:bg-accent disabled:pointer-events-none disabled:opacity-50"
      [disabled]="!numberInput.canIncrement()"
      (click)="numberInput.increment()"
      aria-label="Increase value"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        class="size-3"
      >
        <path d="m18 15-6-6-6 6" />
      </svg>
    </button>
    <button
      type="button"
      class="flex h-1/2 items-center justify-center border-t border-input hover:bg-accent disabled:pointer-events-none disabled:opacity-50"
      [disabled]="!numberInput.canDecrement()"
      (click)="numberInput.decrement()"
      aria-label="Decrease value"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        class="size-3"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </button>
  `,
  host: {
    'data-slot': 'number-input-stepper',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScNumberInputStepper {
  readonly numberInput = inject(SC_NUMBER_INPUT);

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'flex flex-col border-l border-input w-6 rounded-r-md overflow-hidden',
      this.classInput(),
    ),
  );
}
