import { ChangeDetectionStrategy, Component } from '@angular/core';
import PasswordInputDemoContainer from './demos/password-input-demo-container';

@Component({
  selector: 'app-password-input-page',
  imports: [PasswordInputDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">PasswordInput</h1>
        <p class="text-muted-foreground">
          Password input with show/hide toggle, strength indicator, and
          confirmation support.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-password-input-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PasswordInputPage {}
