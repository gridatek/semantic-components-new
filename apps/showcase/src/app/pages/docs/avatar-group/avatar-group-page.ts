import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AvatarGroupDemoComponent } from './demos/avatar-group-demo-container';

@Component({
  selector: 'app-avatar-group-page',
  imports: [AvatarGroupDemoComponent],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">AvatarGroup</h1>
        <p class="text-muted-foreground">
          Display a group of avatars with stacked/overlapping layout and
          overflow indicator.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-avatar-group-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AvatarGroupPage {}
