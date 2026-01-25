import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { CompactCountdownDemo } from './compact-countdown-demo';

@Component({
  selector: 'app-compact-countdown-demo-container',
  imports: [DemoContainer, CompactCountdownDemo],
  template: `
    <app-demo-container title="Compact" [code]="code">
      <app-compact-countdown-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompactCountdownDemoContainer {
  readonly code = `// See compact-countdown-demo.ts for full source`;
}
