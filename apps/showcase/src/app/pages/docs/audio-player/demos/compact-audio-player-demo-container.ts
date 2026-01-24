import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { CompactAudioPlayerDemo } from './compact-audio-player-demo';

@Component({
  selector: 'app-compact-audio-player-demo-container',
  imports: [DemoContainer, CompactAudioPlayerDemo],
  template: `
    <app-demo-container
      title="Compact Variant"
      demoUrl="/demos/audio-player/compact-audio-player-demo"
      [code]="code"
    >
      <app-compact-audio-player-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompactAudioPlayerDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScAudioPlayer, AudioTrack } from '@semantic-components/ui';

@Component({
  selector: 'app-compact-audio-player-demo',
  imports: [ScAudioPlayer],
  template: \`
    <sc-audio-player
      [tracks]="tracks"
      [variant]="'compact'"
      class="max-w-lg"
    />
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompactAudioPlayerDemo {
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
