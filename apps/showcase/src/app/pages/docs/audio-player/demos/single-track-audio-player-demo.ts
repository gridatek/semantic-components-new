import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScAudioPlayer, AudioTrack } from '@semantic-components/ui';

@Component({
  selector: 'app-single-track-audio-player-demo',
  imports: [ScAudioPlayer],
  template: `
    <sc-audio-player
      [tracks]="[track]"
      [showShuffle]="false"
      class="max-w-md"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleTrackAudioPlayerDemo {
  readonly track: AudioTrack = {
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    title: 'Ambient Soundscape',
    artist: 'Audio Artist',
    cover: 'https://picsum.photos/200/200?random=4',
  };
}
