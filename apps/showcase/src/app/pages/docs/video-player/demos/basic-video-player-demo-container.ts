import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { BasicVideoPlayerDemo } from './basic-video-player-demo';

@Component({
  selector: 'app-basic-video-player-demo-container',
  imports: [DemoContainer, BasicVideoPlayerDemo],
  template: `
    <app-demo-container
      title="Basic"
      demoUrl="/demos/video-player/basic-video-player-demo"
      [code]="code"
    >
      <app-basic-video-player-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicVideoPlayerDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScVideoPlayer } from '@semantic-components/ui';

@Component({
  selector: 'app-basic-video-player-demo',
  imports: [ScVideoPlayer],
  template: \`
    <sc-video-player
      [src]="sampleVideo"
      [poster]="samplePoster"
      class="max-w-2xl"
    />
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicVideoPlayerDemo {
  readonly sampleVideo =
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
  readonly samplePoster = 'https://picsum.photos/1280/720?random=1';
}`;
}
