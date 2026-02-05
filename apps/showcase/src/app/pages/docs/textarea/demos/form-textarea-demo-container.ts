import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { FormTextareaDemo } from './form-textarea-demo';

@Component({
  selector: 'app-form-textarea-demo-container',
  imports: [DemoContainer, FormTextareaDemo],
  template: `
    <app-demo-container
      title="Form Example"
      demoUrl="/demos/textarea/form-textarea-demo"
      [code]="code"
    >
      <app-form-textarea-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormTextareaDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScCard,
  ScCardContent,
  ScCardHeader,
  ScCardTitle,
  ScField,
  ScInput,
  ScLabel,
  ScTextarea,
} from '@semantic-components/ui';

@Component({
  selector: 'app-form-textarea-demo',
  imports: [
    ScCard,
    ScCardContent,
    ScCardHeader,
    ScCardTitle,
    ScField,
    ScInput,
    ScLabel,
    ScTextarea,
  ],
  template: \`
    <div sc-card class="max-w-lg">
      <div sc-card-header>
        <h4 sc-card-title class="text-base">Contact Us</h4>
      </div>
      <div sc-card-content class="grid gap-4">
        <div class="grid grid-cols-2 gap-4">
          <div sc-field>
            <label sc-label>Name</label>
            <input sc-input type="text" placeholder="Your name" />
          </div>
          <div sc-field>
            <label sc-label>Email</label>
            <input sc-input type="email" placeholder="your&#64;email.com" />
          </div>
        </div>
        <div sc-field>
          <label sc-label>Subject</label>
          <input sc-input type="text" placeholder="How can we help?" />
        </div>
        <div sc-field>
          <label sc-label>Message</label>
          <textarea
            sc-textarea
            rows="4"
            placeholder="Please describe your inquiry in detail..."
          ></textarea>
        </div>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormTextareaDemo {}`;
}
