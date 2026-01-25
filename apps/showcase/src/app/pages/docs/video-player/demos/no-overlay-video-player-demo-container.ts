import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { NoOverlayVideoPlayerDemo } from './no-overlay-video-player-demo';

@Component({
  selector: 'app-no-overlay-video-player-demo-container',
  imports: [DemoContainer, NoOverlayVideoPlayerDemo],
  template: `
    <app-demo-container
      title="No Overlay"
      demoUrl="/demos/video-player/no-overlay-video-player-demo"
      [code]="code"
    >
      <app-no-overlay-video-player-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoOverlayVideoPlayerDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScVideoPlayer } from '@semantic-components/ui';

@Component({
  selector: 'app-no-overlay-video-player-demo',
  imports: [ScVideoPlayer],
  template: \`
    <sc-video-player
      [src]="sampleVideo"
      [showBigPlayButton]="false"
      class="max-w-2xl"
    />
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoOverlayVideoPlayerDemo {
  readonly sampleVideo =
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
}`;
}
