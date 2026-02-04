import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SiCheckIcon, SiMinusIcon } from '@semantic-icons/lucide-icons';
import { ScCheckboxIndicator } from './checkbox-indicator';

@Component({
  selector: 'sc-visual-checkbox',
  imports: [ScCheckboxIndicator, SiCheckIcon, SiMinusIcon],
  template: `
    <span sc-checkbox-indicator [state]="state()" [class]="indicatorClass()">
      @if (state() === 'indeterminate') {
        <svg si-minus-icon class="size-4"></svg>
      } @else if (state() === 'checked') {
        <svg si-check-icon class="size-4"></svg>
      }
    </span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScVisualCheckbox {
  readonly indicatorClass = input<string>('', { alias: 'class' });
  readonly state = input<'checked' | 'unchecked' | 'indeterminate'>('unchecked');
}
