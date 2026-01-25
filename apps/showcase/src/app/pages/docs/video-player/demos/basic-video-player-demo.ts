import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScVideoPlayer } from '@semantic-components/ui';

@Component({
  selector: 'app-basic-video-player-demo',
  imports: [ScVideoPlayer],
  template: `
    <sc-video-player
      [src]="sampleVideo"
      [poster]="samplePoster"
      class="max-w-2xl"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicVideoPlayerDemo {
  readonly sampleVideo =
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
  readonly samplePoster = 'https://picsum.photos/1280/720?random=1';
}
