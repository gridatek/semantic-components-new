import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { BasicPasswordInputDemo } from './basic-password-input-demo';

@Component({
  selector: 'app-basic-password-input-demo-container',
  imports: [DemoContainer, BasicPasswordInputDemo],
  template: `
    <app-demo-container title="Basic" [code]="code">
      <app-basic-password-input-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicPasswordInputDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScPasswordInput } from '@semantic-components/ui';

@Component({
  selector: 'app-basic-password-input-demo',
  imports: [ScPasswordInput],
  template: \`
    <div class="max-w-sm space-y-2">
      <sc-password-input
        [(value)]="password"
        placeholder="Enter your password"
      />
      <p class="text-sm text-muted-foreground">
        Value: {{ password() ? '••••••••' : '(empty)' }}
      </p>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicPasswordInputDemo {
  readonly password = signal('');
}`;
}
