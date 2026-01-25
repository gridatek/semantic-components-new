import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScVideoPlayer } from '@semantic-components/ui';

@Component({
  selector: 'app-autoplay-video-player-demo',
  imports: [ScVideoPlayer],
  template: `
    <sc-video-player
      [src]="sampleVideo"
      [autoplay]="true"
      [muted]="true"
      class="max-w-2xl"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutoplayVideoPlayerDemo {
  readonly sampleVideo =
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
}
