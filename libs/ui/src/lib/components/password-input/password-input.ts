import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  ElementRef,
  input,
  model,
  output,
  signal,
  untracked,
  ViewEncapsulation,
  viewChild,
} from '@angular/core';
import { cn } from '../../utils';

@Component({
  selector: 'sc-password-input',
  exportAs: 'scPasswordInput',
  template: `
    <div [class]="containerClass()">
      <input
        #inputEl
        [id]="id()"
        [type]="visible() ? 'text' : 'password'"
        [value]="value()"
        [placeholder]="placeholder()"
        [disabled]="disabled()"
        [readonly]="readonly()"
        [autocomplete]="autocomplete()"
        [class]="inputClass()"
        (input)="onInput($event)"
        (focus)="focused.set(true)"
        (blur)="focused.set(false)"
      />
      <button
        type="button"
        [class]="toggleButtonClass()"
        [disabled]="disabled()"
        [attr.aria-label]="visible() ? 'Hide password' : 'Show password'"
        [attr.aria-pressed]="visible()"
        (click)="toggle()"
      >
        @if (visible()) {
          <!-- Eye off icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            [class]="iconClass()"
          >
            <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
            <path
              d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
            />
            <path
              d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
            />
            <line x1="2" x2="22" y1="2" y2="22" />
          </svg>
        } @else {
          <!-- Eye icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            [class]="iconClass()"
          >
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        }
      </button>
    </div>
  `,
  host: {
    'data-slot': 'password-input',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPasswordInput {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly id = input<string>('');
  readonly placeholder = input<string>('');
  readonly disabled = input<boolean>(false);
  readonly readonly = input<boolean>(false);
  readonly autocomplete = input<string>('current-password');
  readonly showByDefault = input<boolean>(false);

  readonly value = model<string>('');
  readonly visible = signal(false);
  readonly focused = signal(false);

  readonly visibilityChange = output<boolean>();

  private readonly inputEl = viewChild<ElementRef<HTMLInputElement>>('inputEl');

  private readonly showByDefaultEffect = effect(() => {
    const showByDefault = this.showByDefault();
    untracked(() => {
      if (showByDefault) {
        this.visible.set(true);
      }
    });
  });

  protected readonly containerClass = computed(() =>
    cn('relative', this.classInput()),
  );

  protected readonly inputClass = computed(() =>
    cn(
      'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 pr-10 text-sm shadow-sm transition-colors',
      'file:border-0 file:bg-transparent file:text-sm file:font-medium',
      'placeholder:text-muted-foreground',
      'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
      'disabled:cursor-not-allowed disabled:opacity-50',
    ),
  );

  protected readonly toggleButtonClass = computed(() =>
    cn(
      'absolute right-0 top-0 h-full px-3 py-2',
      'text-muted-foreground hover:text-foreground',
      'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1',
      'disabled:pointer-events-none disabled:opacity-50',
      'transition-colors',
    ),
  );

  protected readonly iconClass = computed(() => cn('size-4'));

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value.set(input.value);
  }

  toggle(): void {
    this.visible.update((v) => !v);
    this.visibilityChange.emit(this.visible());
  }

  show(): void {
    this.visible.set(true);
    this.visibilityChange.emit(true);
  }

  hide(): void {
    this.visible.set(false);
    this.visibilityChange.emit(false);
  }

  focus(): void {
    this.inputEl()?.nativeElement.focus();
  }
}
