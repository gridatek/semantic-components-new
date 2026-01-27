import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { DisabledPasswordInputDemo } from './disabled-password-input-demo';

@Component({
  selector: 'app-disabled-password-input-demo-container',
  imports: [DemoContainer, DisabledPasswordInputDemo],
  template: `
    <app-demo-container title="Disabled" [code]="code">
      <app-disabled-password-input-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledPasswordInputDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScPasswordInput } from '@semantic-components/ui';

@Component({
  selector: 'app-disabled-password-input-demo',
  imports: [ScPasswordInput],
  template: \`
    <div class="max-w-sm">
      <sc-password-input
        placeholder="Disabled input"
        [disabled]="true"
        [value]="'secretpassword'"
      />
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledPasswordInputDemo {}`;
}
