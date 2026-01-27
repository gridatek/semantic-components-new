import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScPasswordInput } from '@semantic-components/ui';

@Component({
  selector: 'app-basic-password-input-demo',
  imports: [ScPasswordInput],
  template: `
    <div class="max-w-sm space-y-2">
      <sc-password-input
        [(value)]="password"
        placeholder="Enter your password"
      />
      <p class="text-sm text-muted-foreground">
        Value: {{ password() ? '••••••••' : '(empty)' }}
      </p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicPasswordInputDemo {
  readonly password = signal('');
}
