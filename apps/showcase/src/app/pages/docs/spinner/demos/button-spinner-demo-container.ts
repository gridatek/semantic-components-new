import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ButtonSpinnerDemo } from './button-spinner-demo';

@Component({
  selector: 'app-button-spinner-demo-container',
  imports: [DemoContainer, ButtonSpinnerDemo],
  template: `
    <app-demo-container title="In Buttons" [code]="code">
      <app-button-spinner-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonSpinnerDemoContainer {
  readonly code = `// See button-spinner-demo.ts for full source
// Spinners used inside disabled loading buttons`;
}
