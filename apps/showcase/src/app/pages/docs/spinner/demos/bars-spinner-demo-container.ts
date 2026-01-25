import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { BarsSpinnerDemo } from './bars-spinner-demo';

@Component({
  selector: 'app-bars-spinner-demo-container',
  imports: [DemoContainer, BarsSpinnerDemo],
  template: `
    <app-demo-container title="Bars" [code]="code">
      <app-bars-spinner-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarsSpinnerDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScSpinnerBars } from '@semantic-components/ui';

@Component({
  selector: 'app-bars-spinner-demo',
  imports: [ScSpinnerBars],
  template: \`
    <div class="flex items-center gap-6">
      <span sc-spinner-bars size="xs"></span>
      <span sc-spinner-bars size="sm"></span>
      <span sc-spinner-bars></span>
      <span sc-spinner-bars size="lg"></span>
      <span sc-spinner-bars size="xl"></span>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarsSpinnerDemo {}`;
}
