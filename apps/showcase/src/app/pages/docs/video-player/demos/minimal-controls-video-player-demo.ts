import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScVideoPlayer } from '@semantic-components/ui';

@Component({
  selector: 'app-minimal-controls-video-player-demo',
  imports: [ScVideoPlayer],
  template: `
    <sc-video-player
      [src]="sampleVideo"
      [showSkipButtons]="false"
      [showPlaybackSpeed]="false"
      [showPiP]="false"
      class="max-w-2xl"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinimalControlsVideoPlayerDemo {
  readonly sampleVideo =
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
}
