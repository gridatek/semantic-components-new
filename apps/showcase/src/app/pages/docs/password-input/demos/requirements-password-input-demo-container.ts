import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { RequirementsPasswordInputDemo } from './requirements-password-input-demo';

@Component({
  selector: 'app-requirements-password-input-demo-container',
  imports: [DemoContainer, RequirementsPasswordInputDemo],
  template: `
    <app-demo-container title="Requirements Only" [code]="code">
      <app-requirements-password-input-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequirementsPasswordInputDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScPasswordInputStrength } from '@semantic-components/ui';

@Component({
  selector: 'app-requirements-password-input-demo',
  imports: [ScPasswordInputStrength],
  template: \`
    <div class="max-w-sm">
      <sc-password-input-strength
        placeholder="Type to see requirements"
        [showStrength]="false"
      />
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequirementsPasswordInputDemo {}`;
}
