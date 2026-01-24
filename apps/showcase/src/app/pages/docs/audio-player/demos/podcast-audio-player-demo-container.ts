import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { PodcastAudioPlayerDemo } from './podcast-audio-player-demo';

@Component({
  selector: 'app-podcast-audio-player-demo-container',
  imports: [DemoContainer, PodcastAudioPlayerDemo],
  template: `
    <app-demo-container
      title="With Podcast"
      demoUrl="/demos/audio-player/podcast-audio-player-demo"
      [code]="code"
    >
      <app-podcast-audio-player-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PodcastAudioPlayerDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScAudioPlayer, AudioTrack } from '@semantic-components/ui';

@Component({
  selector: 'app-podcast-audio-player-demo',
  imports: [ScAudioPlayer],
  template: \`
    <sc-audio-player [tracks]="tracks" class="max-w-md" />
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PodcastAudioPlayerDemo {
  readonly tracks: AudioTrack[] = [
    {
      src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
      title: 'Episode 1: Getting Started',
      artist: 'Tech Podcast',
      cover: 'https://picsum.photos/200/200?random=5',
    },
    {
      src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
      title: 'Episode 2: Deep Dive',
      artist: 'Tech Podcast',
      cover: 'https://picsum.photos/200/200?random=5',
    },
  ];
}`;
}
