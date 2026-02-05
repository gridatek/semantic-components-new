import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { MaxlengthTextareaDemo } from './maxlength-textarea-demo';

@Component({
  selector: 'app-maxlength-textarea-demo-container',
  imports: [DemoContainer, MaxlengthTextareaDemo],
  template: `
    <app-demo-container
      title="With Character Limit"
      demoUrl="/demos/textarea/maxlength-textarea-demo"
      [code]="code"
    >
      <app-maxlength-textarea-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaxlengthTextareaDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScField,
  ScFieldDescription,
  ScLabel,
  ScTextarea,
} from '@semantic-components/ui';

@Component({
  selector: 'app-maxlength-textarea-demo',
  imports: [ScField, ScFieldDescription, ScLabel, ScTextarea],
  template: \`
    <div sc-field>
      <label sc-label>Description</label>
      <textarea
        sc-textarea
        maxlength="200"
        placeholder="Enter description..."
      ></textarea>
      <p sc-field-description>Max 200 characters.</p>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaxlengthTextareaDemo {}`;
}
