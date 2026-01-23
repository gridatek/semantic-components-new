import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ConfettiDemoComponent } from './confetti-demo';

@Component({
  selector: 'app-confetti-demo-container',
  imports: [DemoContainer, ConfettiDemoComponent],
  template: `
    <app-demo-container title="Confetti" [code]="code">
      <sc-confetti-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ConfettiDemoContainer {
  readonly code = '';
}
