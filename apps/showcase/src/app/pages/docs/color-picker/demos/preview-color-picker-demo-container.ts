import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { PreviewColorPickerDemo } from './preview-color-picker-demo';

@Component({
  selector: 'app-preview-color-picker-demo-container',
  imports: [DemoContainer, PreviewColorPickerDemo],
  template: `
    <app-demo-container title="Live Preview" [code]="code">
      <app-preview-color-picker-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewColorPickerDemoContainer {
  readonly code = `// Color picker with live preview card`;
}
