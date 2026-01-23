import { ChangeDetectionStrategy, Component } from '@angular/core';
import AvatarDemoContainer from './demos/avatar-demo-container';

@Component({
  selector: 'app-avatar-page',
  imports: [AvatarDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Avatar</h1>
        <p class="text-muted-foreground">
          An image element with a fallback for representing the user.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-avatar-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AvatarPage {}
