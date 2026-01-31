import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { NoCoverAudioPlayerDemo } from './no-cover-audio-player-demo';

@Component({
  selector: 'app-no-cover-audio-player-demo-container',
  imports: [DemoContainer, NoCoverAudioPlayerDemo],
  template: `
    <app-demo-container
      title="Without Cover Art"
      demoUrl="/demos/audio-player/no-cover-audio-player-demo"
      [code]="code"
    >
      <app-no-cover-audio-player-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoCoverAudioPlayerDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScAudioPlayer, ScAudioTrack } from '@semantic-components/ui';

@Component({
  selector: 'app-no-cover-audio-player-demo',
  imports: [ScAudioPlayer],
  template: \`
    <sc-audio-player
      [tracks]="tracks"
      [showCover]="false"
      class="max-w-md"
    />
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoCoverAudioPlayerDemo {
  readonly tracks: ScAudioTrack[] = [
    {
      src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      title: 'SoundHelix Song 1',
      artist: 'T. Schürger',
      cover: 'https://picsum.photos/200/200?random=1',
    },
    {
      src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
      title: 'SoundHelix Song 2',
      artist: 'T. Schürger',
      cover: 'https://picsum.photos/200/200?random=2',
    },
    {
      src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
      title: 'SoundHelix Song 3',
      artist: 'T. Schürger',
      cover: 'https://picsum.photos/200/200?random=3',
    },
  ];
}`;
}
