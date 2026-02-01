import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { VideoPlayerDemoContainer } from './demos/basic-video-player-demo-container';

@Component({
  selector: 'app-video-player-page',
  imports: [VideoPlayerDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Video Player</h1>
        <p class="text-muted-foreground">
          Full-featured HTML5 video player with custom controls, keyboard
          shortcuts, and fullscreen support.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-video-player-demo-container />
      </section>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class VideoPlayerPage {}
