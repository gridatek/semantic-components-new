import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { AutoplayVideoPlayerDemo } from './autoplay-video-player-demo';

@Component({
  selector: 'app-autoplay-video-player-demo-container',
  imports: [DemoContainer, AutoplayVideoPlayerDemo],
  template: `
    <app-demo-container
      title="Autoplay"
      demoUrl="/demos/video-player/autoplay-video-player-demo"
      [code]="code"
    >
      <app-autoplay-video-player-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutoplayVideoPlayerDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScVideoPlayer } from '@semantic-components/ui';

@Component({
  selector: 'app-autoplay-video-player-demo',
  imports: [ScVideoPlayer],
  template: \`
    <sc-video-player
      [src]="sampleVideo"
      [autoplay]="true"
      [muted]="true"
      class="max-w-2xl"
    />
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutoplayVideoPlayerDemo {
  readonly sampleVideo =
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
}`;
}
