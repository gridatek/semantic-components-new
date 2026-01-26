import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { BasicTextareaDemo } from './basic-textarea-demo';

@Component({
  selector: 'app-basic-textarea-demo-container',
  imports: [DemoContainer, BasicTextareaDemo],
  template: `
    <app-demo-container title="Basic" [code]="code">
      <app-basic-textarea-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicTextareaDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScTextarea } from '@semantic-components/ui';

@Component({
  selector: 'app-basic-textarea-demo',
  imports: [ScTextarea],
  template: \`
    <textarea sc-textarea placeholder="Type your message here."></textarea>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicTextareaDemo {}`;
}
