import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { BasicTextareaDemo } from './basic-textarea-demo';

@Component({
  selector: 'app-basic-textarea-demo-container',
  imports: [DemoContainer, BasicTextareaDemo],
  template: `
    <app-demo-container
      title="Basic"
      demoUrl="/demos/textarea/basic-textarea-demo"
      [code]="code"
    >
      <app-basic-textarea-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicTextareaDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScField, ScLabel, ScTextarea } from '@semantic-components/ui';

@Component({
  selector: 'app-basic-textarea-demo',
  imports: [ScField, ScLabel, ScTextarea],
  template: \`
    <div sc-field>
      <label sc-label>Your message</label>
      <textarea sc-textarea placeholder="Type your message here."></textarea>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicTextareaDemo {}`;
}
