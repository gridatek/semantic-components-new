import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { DisabledTextareaDemo } from './disabled-textarea-demo';

@Component({
  selector: 'app-disabled-textarea-demo-container',
  imports: [DemoContainer, DisabledTextareaDemo],
  template: `
    <app-demo-container title="Disabled" [code]="code">
      <app-disabled-textarea-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledTextareaDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScTextarea } from '@semantic-components/ui';

@Component({
  selector: 'app-disabled-textarea-demo',
  imports: [ScTextarea],
  template: \`
    <textarea
      sc-textarea
      placeholder="Disabled textarea"
      disabled
    ></textarea>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledTextareaDemo {}`;
}
