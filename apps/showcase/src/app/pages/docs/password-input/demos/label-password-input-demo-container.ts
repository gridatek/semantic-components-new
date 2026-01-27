import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { LabelPasswordInputDemo } from './label-password-input-demo';

@Component({
  selector: 'app-label-password-input-demo-container',
  imports: [DemoContainer, LabelPasswordInputDemo],
  template: `
    <app-demo-container title="With Label" [code]="code">
      <app-label-password-input-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelPasswordInputDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScPasswordInput } from '@semantic-components/ui';

@Component({
  selector: 'app-label-password-input-demo',
  imports: [ScPasswordInput],
  template: \`
    <div class="max-w-sm space-y-2">
      <label class="text-sm font-medium leading-none">Password</label>
      <sc-password-input placeholder="Enter password" />
      <p class="text-xs text-muted-foreground">
        Must be at least 8 characters.
      </p>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelPasswordInputDemo {}`;
}
