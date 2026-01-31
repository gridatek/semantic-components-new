import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { AspectRatioVideoPlayerDemoContainer } from './demos/aspect-ratio-video-player-demo-container';
import { AutoplayVideoPlayerDemoContainer } from './demos/autoplay-video-player-demo-container';
import { BasicVideoPlayerDemoContainer } from './demos/basic-video-player-demo-container';
import { ControlledVideoPlayerDemoContainer } from './demos/controlled-video-player-demo-container';
import { KeyboardShortcutsVideoPlayerDemoContainer } from './demos/keyboard-shortcuts-video-player-demo-container';
import { LoopVideoPlayerDemoContainer } from './demos/loop-video-player-demo-container';
import { MinimalControlsVideoPlayerDemoContainer } from './demos/minimal-controls-video-player-demo-container';
import { MultipleSourcesVideoPlayerDemoContainer } from './demos/multiple-sources-video-player-demo-container';
import { NoOverlayVideoPlayerDemoContainer } from './demos/no-overlay-video-player-demo-container';

@Component({
  selector: 'app-video-player-page',
  imports: [
    BasicVideoPlayerDemoContainer,
    MultipleSourcesVideoPlayerDemoContainer,
    MinimalControlsVideoPlayerDemoContainer,
    AutoplayVideoPlayerDemoContainer,
    LoopVideoPlayerDemoContainer,
    AspectRatioVideoPlayerDemoContainer,
    ControlledVideoPlayerDemoContainer,
    NoOverlayVideoPlayerDemoContainer,
    KeyboardShortcutsVideoPlayerDemoContainer,
  ],
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
        <app-basic-video-player-demo-container />
        <app-multiple-sources-video-player-demo-container />
        <app-minimal-controls-video-player-demo-container />
        <app-autoplay-video-player-demo-container />
        <app-loop-video-player-demo-container />
        <app-aspect-ratio-video-player-demo-container />
        <app-controlled-video-player-demo-container />
        <app-no-overlay-video-player-demo-container />
        <app-keyboard-shortcuts-video-player-demo-container />
      </section>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class VideoPlayerPage {}
