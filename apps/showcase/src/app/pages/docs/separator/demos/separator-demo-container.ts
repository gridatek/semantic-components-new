import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScSeparatorDemo } from './separator-demo';

@Component({
  selector: 'app-separator-demo-container',
  imports: [DemoContainer, ScSeparatorDemo],
  template: `
    <app-demo-container title="Separator" [code]="code">
      <app-sc-separator-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SeparatorDemoContainer {
  readonly code = '';
}
