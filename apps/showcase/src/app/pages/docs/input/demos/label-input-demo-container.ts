import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { LabelInputDemo } from './label-input-demo';

@Component({
  selector: 'app-label-input-demo-container',
  imports: [DemoContainer, LabelInputDemo],
  template: `
    <app-demo-container
      title="With Label"
      demoUrl="/demos/input/label-input-demo"
      [code]="code"
    >
      <app-label-input-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelInputDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { form, FormField, required } from '@angular/forms/signals';
import { ScField, ScInput, ScLabel } from '@semantic-components/ui';

@Component({
  selector: 'app-label-input-demo',
  imports: [FormField, ScField, ScInput, ScLabel],
  template: \`
    <div sc-field>
      <label sc-label>Email</label>
      <input sc-input type="email" [formField]="emailForm.email" placeholder="Email" />
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelInputDemo {
  readonly formModel = signal({ email: '' });
  readonly emailForm = form(this.formModel, (s) => {
    required(s.email);
  });
}`;
}
