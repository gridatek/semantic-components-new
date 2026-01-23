import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { SplitButtonDemoComponent } from './split-button-demo';

@Component({
  selector: 'app-split-button-demo-container',
  imports: [DemoContainer, SplitButtonDemoComponent],
  template: `
    <app-demo-container title="SplitButton" [code]="code">
      <app-split-button-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SplitButtonDemoContainer {
  readonly code = '';
}
