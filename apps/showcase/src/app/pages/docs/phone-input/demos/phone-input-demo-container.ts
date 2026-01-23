import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScPhoneInputDemo } from './phone-input-demo';

@Component({
  selector: 'app-phone-input-demo-container',
  imports: [DemoContainer, ScPhoneInputDemo],
  template: `
    <app-demo-container title="PhoneInput" [code]="code">
      <sc-phone-input-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PhoneInputDemoContainer {
  readonly code = '';
}
