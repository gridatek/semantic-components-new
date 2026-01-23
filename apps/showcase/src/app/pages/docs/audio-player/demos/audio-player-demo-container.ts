import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScAudioPlayerDemo } from './audio-player-demo';

@Component({
  selector: 'app-audio-player-demo-container',
  imports: [DemoContainer, ScAudioPlayerDemo],
  template: `
    <app-demo-container title="AudioPlayer" [code]="code">
      <sc-audio-player-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AudioPlayerDemoContainer {
  readonly code = '';
}
