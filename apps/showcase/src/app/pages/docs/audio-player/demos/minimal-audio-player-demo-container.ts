import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { MinimalAudioPlayerDemo } from './minimal-audio-player-demo';

@Component({
  selector: 'app-minimal-audio-player-demo-container',
  imports: [DemoContainer, MinimalAudioPlayerDemo],
  template: `
    <app-demo-container
      title="Minimal Variant"
      demoUrl="/demos/audio-player/minimal-audio-player-demo"
      [code]="code"
    >
      <app-minimal-audio-player-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinimalAudioPlayerDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScAudioPlayer, AudioTrack } from '@semantic-components/ui';

@Component({
  selector: 'app-minimal-audio-player-demo',
  imports: [ScAudioPlayer],
  template: \`
    <sc-audio-player
      [tracks]="tracks"
      [variant]="'minimal'"
      [showCover]="false"
      [showVolume]="false"
      [showShuffle]="false"
      [showRepeat]="false"
      class="max-w-sm"
    />
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinimalAudioPlayerDemo {
  readonly tracks: AudioTrack[] = [
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
