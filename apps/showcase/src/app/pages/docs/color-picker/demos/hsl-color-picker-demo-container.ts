import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { HslColorPickerDemo } from './hsl-color-picker-demo';

@Component({
  selector: 'app-hsl-color-picker-demo-container',
  imports: [DemoContainer, HslColorPickerDemo],
  template: `
    <app-demo-container title="HSL Format" [code]="code">
      <app-hsl-color-picker-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HslColorPickerDemoContainer {
  readonly code = `// Color picker with HSL format display`;
}
