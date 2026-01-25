import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { DefaultSpinnerDemo } from './default-spinner-demo';

@Component({
  selector: 'app-default-spinner-demo-container',
  imports: [DemoContainer, DefaultSpinnerDemo],
  template: `
    <app-demo-container title="Default" [code]="code">
      <app-default-spinner-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultSpinnerDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScSpinner } from '@semantic-components/ui';

@Component({
  selector: 'app-default-spinner-demo',
  imports: [ScSpinner],
  template: \`
    <div class="flex items-center gap-6">
      <span sc-spinner size="xs"></span>
      <span sc-spinner size="sm"></span>
      <span sc-spinner></span>
      <span sc-spinner size="lg"></span>
      <span sc-spinner size="xl"></span>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultSpinnerDemo {}`;
}
