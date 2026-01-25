import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ColorsSpinnerDemo } from './colors-spinner-demo';

@Component({
  selector: 'app-colors-spinner-demo-container',
  imports: [DemoContainer, ColorsSpinnerDemo],
  template: `
    <app-demo-container title="Colors" [code]="code">
      <app-colors-spinner-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorsSpinnerDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScSpinner } from '@semantic-components/ui';

@Component({
  selector: 'app-colors-spinner-demo',
  imports: [ScSpinner],
  template: \`
    <div class="flex items-center gap-6">
      <span sc-spinner class="text-primary"></span>
      <span sc-spinner class="text-blue-500"></span>
      <span sc-spinner class="text-green-500"></span>
      <span sc-spinner class="text-yellow-500"></span>
      <span sc-spinner class="text-red-500"></span>
      <span sc-spinner class="text-purple-500"></span>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorsSpinnerDemo {}`;
}
