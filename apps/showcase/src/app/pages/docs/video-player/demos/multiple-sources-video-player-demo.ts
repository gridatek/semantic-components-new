import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScVideoPlayer, VideoSource } from '@semantic-components/ui';

@Component({
  selector: 'app-multiple-sources-video-player-demo',
  imports: [ScVideoPlayer],
  template: `
    <sc-video-player
      [sources]="videoSources"
      [poster]="samplePoster"
      class="max-w-2xl"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultipleSourcesVideoPlayerDemo {
  readonly samplePoster = 'https://picsum.photos/1280/720?random=1';

  readonly videoSources: VideoSource[] = [
    {
      src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      type: 'video/mp4',
    },
  ];
}
