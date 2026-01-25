import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { FullColorPickerDemo } from './full-color-picker-demo';

@Component({
  selector: 'app-full-color-picker-demo-container',
  imports: [DemoContainer, FullColorPickerDemo],
  template: `
    <app-demo-container title="Full" [code]="code">
      <app-full-color-picker-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FullColorPickerDemoContainer {
  readonly code = `// Full color picker with area, hue slider, preview and hex input`;
}
