import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScColorPickerDemo } from './color-picker-demo';

@Component({
  selector: 'app-color-picker-demo-container',
  imports: [DemoContainer, ScColorPickerDemo],
  template: `
    <app-demo-container title="ColorPicker" [code]="code">
      <app-sc-color-picker-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ColorPickerDemoContainer {
  readonly code = '';
}
