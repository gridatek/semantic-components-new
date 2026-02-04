import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SiCheckIcon, SiMinusIcon } from '@semantic-icons/lucide-icons';
import { ScCheckboxIndicator } from './checkbox-indicator';
import { ScCheckboxIcon } from './checkbox-icon';

@Component({
  selector: 'sc-visual-checkbox',
  imports: [ScCheckboxIndicator, ScCheckboxIcon, SiCheckIcon, SiMinusIcon],
  template: `
    <span sc-checkbox-indicator [state]="state()" [class]="indicatorClass()">
      @if (state() === 'indeterminate') {
        <svg si-minus-icon sc-checkbox-icon></svg>
      } @else if (state() === 'checked') {
        <svg si-check-icon sc-checkbox-icon></svg>
      }
    </span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScVisualCheckbox {
  readonly indicatorClass = input<string>('', { alias: 'class' });
  readonly state = input<'checked' | 'unchecked' | 'indeterminate'>('unchecked');
}
