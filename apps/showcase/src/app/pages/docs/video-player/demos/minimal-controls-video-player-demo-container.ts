import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { MinimalControlsVideoPlayerDemo } from './minimal-controls-video-player-demo';

@Component({
  selector: 'app-minimal-controls-video-player-demo-container',
  imports: [DemoContainer, MinimalControlsVideoPlayerDemo],
  template: `
    <app-demo-container
      title="Minimal Controls"
      demoUrl="/demos/video-player/minimal-controls-video-player-demo"
      [code]="code"
    >
      <app-minimal-controls-video-player-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinimalControlsVideoPlayerDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScVideoPlayer } from '@semantic-components/ui';

@Component({
  selector: 'app-minimal-controls-video-player-demo',
  imports: [ScVideoPlayer],
  template: \`
    <sc-video-player
      [src]="sampleVideo"
      [showSkipButtons]="false"
      [showPlaybackSpeed]="false"
      [showPiP]="false"
      class="max-w-2xl"
    />
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinimalControlsVideoPlayerDemo {
  readonly sampleVideo =
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
}`;
}
