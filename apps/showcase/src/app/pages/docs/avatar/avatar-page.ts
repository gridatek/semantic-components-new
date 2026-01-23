import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicAvatarDemoContainer } from './demos/basic-avatar-demo-container';
import { FallbackAvatarDemoContainer } from './demos/fallback-avatar-demo-container';
import { SizesAvatarDemoContainer } from './demos/sizes-avatar-demo-container';

@Component({
  selector: 'app-avatar-page',
  imports: [
    BasicAvatarDemoContainer,
    FallbackAvatarDemoContainer,
    SizesAvatarDemoContainer,
  ],
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
        <app-basic-avatar-demo-container />
        <app-fallback-avatar-demo-container />
        <app-sizes-avatar-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AvatarPage {}
