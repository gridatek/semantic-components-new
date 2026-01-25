import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { FormInputDemo } from './form-input-demo';

@Component({
  selector: 'app-form-input-demo-container',
  imports: [DemoContainer, FormInputDemo],
  template: `
    <app-demo-container title="Form" [code]="code">
      <app-form-input-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormInputDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScInput, ScLabel } from '@semantic-components/ui';

@Component({
  selector: 'app-form-input-demo',
  imports: [ScInput, ScLabel],
  template: \`
    <div class="rounded-lg border p-6 max-w-md">
      <div class="space-y-4">
        <h4 class="font-semibold">Create Account</h4>
        <div class="grid gap-4">
          <div class="grid grid-cols-2 gap-4">
            <div class="grid gap-1.5">
              <label sc-label for="first-name">First name</label>
              <input sc-input type="text" id="first-name" placeholder="John" />
            </div>
            <div class="grid gap-1.5">
              <label sc-label for="last-name">Last name</label>
              <input sc-input type="text" id="last-name" placeholder="Doe" />
            </div>
          </div>
          <div class="grid gap-1.5">
            <label sc-label for="signup-email">Email</label>
            <input
              sc-input
              type="email"
              id="signup-email"
              placeholder="john&#64;example.com"
            />
          </div>
          <div class="grid gap-1.5">
            <label sc-label for="signup-password">Password</label>
            <input sc-input type="password" id="signup-password" />
          </div>
        </div>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormInputDemo {}`;
}
