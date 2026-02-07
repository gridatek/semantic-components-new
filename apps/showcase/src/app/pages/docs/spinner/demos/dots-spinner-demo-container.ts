import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { DotsSpinnerDemo } from './dots-spinner-demo';

@Component({
  selector: 'app-dots-spinner-demo-container',
  imports: [DemoContainer, DotsSpinnerDemo],
  template: `
    <app-demo-container title="Dots" [code]="code">
      <app-dots-spinner-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DotsSpinnerDemoContainer {
  readonly code = `import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ScSpinnerDots } from '@semantic-components/ui';

@Component({
  selector: 'app-dots-spinner-demo',
  imports: [ScSpinnerDots],
  template: \`
    <div class="flex items-center gap-6">
      <span sc-spinner-dots size="xs"></span>
      <span sc-spinner-dots size="sm"></span>
      <span sc-spinner-dots></span>
      <span sc-spinner-dots size="lg"></span>
      <span sc-spinner-dots size="xl"></span>
    </div>
  \`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DotsSpinnerDemo {}`;
}
