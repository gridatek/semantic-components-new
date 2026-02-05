import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { LabelTextareaDemo } from './label-textarea-demo';

@Component({
  selector: 'app-label-textarea-demo-container',
  imports: [DemoContainer, LabelTextareaDemo],
  template: `
    <app-demo-container
      title="With Label"
      demoUrl="/demos/textarea/label-textarea-demo"
      [code]="code"
    >
      <app-label-textarea-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelTextareaDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScField, ScLabel, ScTextarea } from '@semantic-components/ui';

@Component({
  selector: 'app-label-textarea-demo',
  imports: [ScField, ScLabel, ScTextarea],
  template: \`
    <div sc-field>
      <label sc-label>Your message</label>
      <textarea sc-textarea placeholder="Type your message here."></textarea>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelTextareaDemo {}`;
}
