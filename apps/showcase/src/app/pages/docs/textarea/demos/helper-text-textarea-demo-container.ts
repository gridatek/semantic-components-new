import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { HelperTextTextareaDemo } from './helper-text-textarea-demo';

@Component({
  selector: 'app-helper-text-textarea-demo-container',
  imports: [DemoContainer, HelperTextTextareaDemo],
  template: `
    <app-demo-container
      title="With Helper Text"
      demoUrl="/demos/textarea/helper-text-textarea-demo"
      [code]="code"
    >
      <app-helper-text-textarea-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelperTextTextareaDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScField,
  ScFieldDescription,
  ScLabel,
  ScTextarea,
} from '@semantic-components/ui';

@Component({
  selector: 'app-helper-text-textarea-demo',
  imports: [ScField, ScFieldDescription, ScLabel, ScTextarea],
  template: \`
    <div sc-field>
      <label sc-label>Bio</label>
      <textarea sc-textarea placeholder="Tell us about yourself"></textarea>
      <p sc-field-description>
        Your bio will be visible on your public profile.
      </p>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelperTextTextareaDemo {}`;
}
