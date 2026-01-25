import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { BasicInputDemo } from './basic-input-demo';

@Component({
  selector: 'app-basic-input-demo-container',
  imports: [DemoContainer, BasicInputDemo],
  template: `
    <app-demo-container title="Basic" [code]="code">
      <app-basic-input-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicInputDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScInput } from '@semantic-components/ui';

@Component({
  selector: 'app-basic-input-demo',
  imports: [ScInput],
  template: \`<input sc-input type="text" placeholder="Enter text..." />\`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicInputDemo {}`;
}
