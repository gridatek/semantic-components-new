import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { DisabledInputDemo } from './disabled-input-demo';

@Component({
  selector: 'app-disabled-input-demo-container',
  imports: [DemoContainer, DisabledInputDemo],
  template: `
    <app-demo-container title="Disabled" [code]="code">
      <app-disabled-input-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledInputDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScInput } from '@semantic-components/ui';

@Component({
  selector: 'app-disabled-input-demo',
  imports: [ScInput],
  template: \`<input sc-input type="text" placeholder="Disabled input" disabled />\`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledInputDemo {}`;
}
