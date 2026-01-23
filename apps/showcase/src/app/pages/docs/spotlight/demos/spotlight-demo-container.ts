import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { SpotlightDemoComponent } from './spotlight-demo';

@Component({
  selector: 'app-spotlight-demo-container',
  imports: [DemoContainer, SpotlightDemoComponent],
  template: `
    <app-demo-container title="Spotlight" [code]="code">
      <app-spotlight-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SpotlightDemoContainer {
  readonly code = '';
}
