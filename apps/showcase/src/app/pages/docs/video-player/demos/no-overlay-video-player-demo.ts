import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScVideoPlayer } from '@semantic-components/ui';

@Component({
  selector: 'app-no-overlay-video-player-demo',
  imports: [ScVideoPlayer],
  template: `
    <sc-video-player
      [src]="sampleVideo"
      [showBigPlayButton]="false"
      class="max-w-2xl"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoOverlayVideoPlayerDemo {
  readonly sampleVideo =
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
}
