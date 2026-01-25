import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { LoopVideoPlayerDemo } from './loop-video-player-demo';

@Component({
  selector: 'app-loop-video-player-demo-container',
  imports: [DemoContainer, LoopVideoPlayerDemo],
  template: `
    <app-demo-container
      title="Loop"
      demoUrl="/demos/video-player/loop-video-player-demo"
      [code]="code"
    >
      <app-loop-video-player-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoopVideoPlayerDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScVideoPlayer } from '@semantic-components/ui';

@Component({
  selector: 'app-loop-video-player-demo',
  imports: [ScVideoPlayer],
  template: \`
    <sc-video-player [src]="sampleVideo" [loop]="true" class="max-w-2xl" />
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoopVideoPlayerDemo {
  readonly sampleVideo =
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
}`;
}
