import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { cn } from '../../utils';

@Component({
  selector: 'sc-visual-checkbox',
  host: {
    '[class]': 'class()',
    '[attr.data-state]': 'state()',
    '[attr.aria-hidden]': 'true',
  },
  template: `
    @if (state() === 'checked' || state() === 'indeterminate') {
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="size-4"
      >
        @if (state() === 'indeterminate') {
          <line x1="5" x2="19" y1="12" y2="12" />
        } @else {
          <path d="M20 6 9 17l-5-5" />
        }
      </svg>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScVisualCheckbox {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly state = input<'checked' | 'unchecked' | 'indeterminate'>('unchecked');

  protected readonly class = computed(() =>
    cn(
      'pointer-events-none inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border border-primary transition-colors',
      'data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
      'data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground',
      this.classInput(),
    ),
  );
}
