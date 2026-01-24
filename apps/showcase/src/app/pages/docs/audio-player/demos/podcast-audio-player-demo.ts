import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScAudioPlayer, AudioTrack } from '@semantic-components/ui';

@Component({
  selector: 'app-podcast-audio-player-demo',
  imports: [ScAudioPlayer],
  template: `
    <sc-audio-player [tracks]="tracks" class="max-w-md" />
  `,
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
}
