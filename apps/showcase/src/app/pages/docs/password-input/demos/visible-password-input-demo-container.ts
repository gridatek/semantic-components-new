import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { VisiblePasswordInputDemo } from './visible-password-input-demo';

@Component({
  selector: 'app-visible-password-input-demo-container',
  imports: [DemoContainer, VisiblePasswordInputDemo],
  template: `
    <app-demo-container title="Visible by Default" [code]="code">
      <app-visible-password-input-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VisiblePasswordInputDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScPasswordInput } from '@semantic-components/ui';

@Component({
  selector: 'app-visible-password-input-demo',
  imports: [ScPasswordInput],
  template: \`
    <div class="max-w-sm">
      <sc-password-input
        placeholder="Password visible by default"
        [showByDefault]="true"
      />
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VisiblePasswordInputDemo {}`;
}
