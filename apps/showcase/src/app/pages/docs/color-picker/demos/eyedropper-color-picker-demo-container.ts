import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { EyedropperColorPickerDemo } from './eyedropper-color-picker-demo';

@Component({
  selector: 'app-eyedropper-color-picker-demo-container',
  imports: [DemoContainer, EyedropperColorPickerDemo],
  template: `
    <app-demo-container title="Eye Dropper" [code]="code">
      <app-eyedropper-color-picker-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EyedropperColorPickerDemoContainer {
  readonly code = `// Color picker with eye dropper (Chrome/Edge)`;
}
