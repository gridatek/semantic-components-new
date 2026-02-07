import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { AudioPlayerDemo } from './audio-player-demo';

@Component({
  selector: 'app-audio-player-demo-container',
  imports: [DemoContainer, AudioPlayerDemo],
  template: `
    <app-demo-container
      title="Demo Audio Player"
      demoUrl="/demos/audio-player/audio-player-demo"
      [code]="code"
    >
      <app-audio-player-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudioPlayerDemoContainer {
  readonly code = ``;
}
