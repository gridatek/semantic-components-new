import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { StrengthBarPasswordInputDemo } from './strength-bar-password-input-demo';

@Component({
  selector: 'app-strength-bar-password-input-demo-container',
  imports: [DemoContainer, StrengthBarPasswordInputDemo],
  template: `
    <app-demo-container title="Strength Bar Only" [code]="code">
      <app-strength-bar-password-input-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StrengthBarPasswordInputDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScPasswordInputStrength } from '@semantic-components/ui';

@Component({
  selector: 'app-strength-bar-password-input-demo',
  imports: [ScPasswordInputStrength],
  template: \`
    <div class="max-w-sm">
      <sc-password-input-strength
        placeholder="Type to see strength"
        [showRequirements]="false"
      />
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StrengthBarPasswordInputDemo {}`;
}
