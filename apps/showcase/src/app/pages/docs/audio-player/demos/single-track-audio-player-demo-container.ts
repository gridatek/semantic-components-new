import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { SingleTrackAudioPlayerDemo } from './single-track-audio-player-demo';

@Component({
  selector: 'app-single-track-audio-player-demo-container',
  imports: [DemoContainer, SingleTrackAudioPlayerDemo],
  template: `
    <app-demo-container
      title="Single Track"
      demoUrl="/demos/audio-player/single-track-audio-player-demo"
      [code]="code"
    >
      <app-single-track-audio-player-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleTrackAudioPlayerDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScAudioPlayer, ScAudioTrack } from '@semantic-components/ui';

@Component({
  selector: 'app-single-track-audio-player-demo',
  imports: [ScAudioPlayer],
  template: \`
    <sc-audio-player
      [tracks]="[track]"
      [showShuffle]="false"
      class="max-w-md"
    />
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleTrackAudioPlayerDemo {
  readonly track: ScAudioTrack = {
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    title: 'Ambient Soundscape',
    artist: 'Audio Artist',
    cover: 'https://picsum.photos/200/200?random=4',
  };
}`;
}
