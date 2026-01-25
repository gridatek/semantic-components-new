import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScVideoPlayer } from '@semantic-components/ui';

@Component({
  selector: 'app-aspect-ratio-video-player-demo',
  imports: [ScVideoPlayer],
  template: `
    <sc-video-player
      [src]="sampleVideo"
      [aspectRatio]="'4/3'"
      class="max-w-xl"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AspectRatioVideoPlayerDemo {
  readonly sampleVideo =
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
}
