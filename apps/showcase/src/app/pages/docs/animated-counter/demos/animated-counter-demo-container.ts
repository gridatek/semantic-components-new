import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { AnimatedCounterDemoComponent } from './animated-counter-demo';

@Component({
  selector: 'app-animated-counter-demo-container',
  imports: [DemoContainer, AnimatedCounterDemoComponent],
  template: `
    <app-demo-container title="AnimatedCounter" [code]="code">
      <sc-animated-counter-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AnimatedCounterDemoContainer {
  readonly code = '';
}
