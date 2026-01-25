import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { CompletedCountdownDemo } from './completed-countdown-demo';

@Component({
  selector: 'app-completed-countdown-demo-container',
  imports: [DemoContainer, CompletedCountdownDemo],
  template: `
    <app-demo-container title="Completed" [code]="code">
      <app-completed-countdown-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompletedCountdownDemoContainer {
  readonly code = `// See completed-countdown-demo.ts for full source`;
}
