import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { MultipleSourcesVideoPlayerDemo } from './multiple-sources-video-player-demo';

@Component({
  selector: 'app-multiple-sources-video-player-demo-container',
  imports: [DemoContainer, MultipleSourcesVideoPlayerDemo],
  template: `
    <app-demo-container
      title="Multiple Sources"
      demoUrl="/demos/video-player/multiple-sources-video-player-demo"
      [code]="code"
    >
      <app-multiple-sources-video-player-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultipleSourcesVideoPlayerDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScVideoPlayer, VideoSource } from '@semantic-components/ui';

@Component({
  selector: 'app-multiple-sources-video-player-demo',
  imports: [ScVideoPlayer],
  template: \`
    <sc-video-player
      [sources]="videoSources"
      [poster]="samplePoster"
      class="max-w-2xl"
    />
  \`,
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
}`;
}
