import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { AspectRatioVideoPlayerDemo } from './aspect-ratio-video-player-demo';

@Component({
  selector: 'app-aspect-ratio-video-player-demo-container',
  imports: [DemoContainer, AspectRatioVideoPlayerDemo],
  template: `
    <app-demo-container
      title="Aspect Ratio"
      demoUrl="/demos/video-player/aspect-ratio-video-player-demo"
      [code]="code"
    >
      <app-aspect-ratio-video-player-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AspectRatioVideoPlayerDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScVideoPlayer } from '@semantic-components/ui';

@Component({
  selector: 'app-aspect-ratio-video-player-demo',
  imports: [ScVideoPlayer],
  template: \`
    <sc-video-player
      [src]="sampleVideo"
      [aspectRatio]="'4/3'"
      class="max-w-xl"
    />
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AspectRatioVideoPlayerDemo {
  readonly sampleVideo =
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
}`;
}
