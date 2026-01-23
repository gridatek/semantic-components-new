import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScVideoPlayerDemo } from './video-player-demo';

@Component({
  selector: 'app-video-player-demo-container',
  imports: [DemoContainer, ScVideoPlayerDemo],
  template: `
    <app-demo-container title="VideoPlayer" [code]="code">
      <sc-video-player-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class VideoPlayerDemoContainer {
  readonly code = '';
}
