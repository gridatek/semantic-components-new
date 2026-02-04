import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SiCheckIcon, SiMinusIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'sc-checkbox-icon',
  imports: [SiCheckIcon, SiMinusIcon],
  template: `
    @if (state() === 'indeterminate') {
      <svg si-minus-icon class="size-4"></svg>
    } @else if (state() === 'checked') {
      <svg si-check-icon class="size-4"></svg>
    }
  `,
  host: {
    '[attr.data-state]': 'state()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCheckboxIcon {
  readonly state = input<'checked' | 'unchecked' | 'indeterminate'>('unchecked');
}
