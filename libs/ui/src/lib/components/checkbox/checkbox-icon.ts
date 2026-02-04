import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'sc-checkbox-icon',
  host: {
    '[attr.data-state]': 'state()',
  },
  template: `
    @if (state() === 'indeterminate') {
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
        <line x1="5" x2="19" y1="12" y2="12" />
      </svg>
    } @else if (state() === 'checked') {
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
        <path d="M20 6 9 17l-5-5" />
      </svg>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCheckboxIcon {
  readonly state = input<'checked' | 'unchecked' | 'indeterminate'>('unchecked');
}
