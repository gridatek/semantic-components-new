import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { WidthsPasswordInputDemo } from './widths-password-input-demo';

@Component({
  selector: 'app-widths-password-input-demo-container',
  imports: [DemoContainer, WidthsPasswordInputDemo],
  template: `
    <app-demo-container title="Different Widths" [code]="code">
      <app-widths-password-input-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidthsPasswordInputDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScPasswordInput } from '@semantic-components/ui';

@Component({
  selector: 'app-widths-password-input-demo',
  imports: [ScPasswordInput],
  template: \`
    <div class="space-y-2">
      <sc-password-input placeholder="Small width" class="w-48" />
      <sc-password-input placeholder="Medium width" class="w-64" />
      <sc-password-input placeholder="Large width" class="w-96" />
      <sc-password-input placeholder="Full width" class="w-full max-w-md" />
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidthsPasswordInputDemo {}`;
}
