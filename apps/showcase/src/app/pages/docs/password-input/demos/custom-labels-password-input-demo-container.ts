import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { CustomLabelsPasswordInputDemo } from './custom-labels-password-input-demo';

@Component({
  selector: 'app-custom-labels-password-input-demo-container',
  imports: [DemoContainer, CustomLabelsPasswordInputDemo],
  template: `
    <app-demo-container title="Custom Labels" [code]="code">
      <app-custom-labels-password-input-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomLabelsPasswordInputDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScPasswordInputConfirm } from '@semantic-components/ui';

@Component({
  selector: 'app-custom-labels-password-input-demo',
  imports: [ScPasswordInputConfirm],
  template: \`
    <div class="max-w-sm">
      <sc-password-input-confirm
        passwordLabel="New Password"
        confirmLabel="Re-enter Password"
        passwordPlaceholder="Enter new password"
        confirmPlaceholder="Type password again"
      />
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomLabelsPasswordInputDemo {}`;
}
