import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ScCheckboxIndicator } from './checkbox-indicator';
import { ScCheckboxIcon } from './checkbox-icon';

@Component({
  selector: 'sc-visual-checkbox',
  imports: [ScCheckboxIndicator, ScCheckboxIcon],
  template: `
    <sc-checkbox-indicator [state]="state()" [class]="indicatorClass()">
      <sc-checkbox-icon [state]="state()" />
    </sc-checkbox-indicator>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScVisualCheckbox {
  readonly indicatorClass = input<string>('', { alias: 'class' });
  readonly state = input<'checked' | 'unchecked' | 'indeterminate'>('unchecked');
}
