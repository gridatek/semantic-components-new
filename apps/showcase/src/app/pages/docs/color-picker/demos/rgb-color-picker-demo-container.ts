import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { RgbColorPickerDemo } from './rgb-color-picker-demo';

@Component({
  selector: 'app-rgb-color-picker-demo-container',
  imports: [DemoContainer, RgbColorPickerDemo],
  template: `
    <app-demo-container title="RGB Format" [code]="code">
      <app-rgb-color-picker-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RgbColorPickerDemoContainer {
  readonly code = `// Color picker with RGB format display`;
}
