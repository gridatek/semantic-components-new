import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScAudioPlayer,
  ScAudioPlayerAudio,
  ScAudioPlayerInfo,
  ScAudioPlayerProgress,
  ScAudioPlayerPlayButton,
  ScAudioPlayerPrevious,
  ScAudioPlayerNext,
  AudioTrack,
} from '@semantic-components/ui';

@Component({
  selector: 'app-minimal-audio-player-demo',
  imports: [
    ScAudioPlayer,
    ScAudioPlayerAudio,
    ScAudioPlayerInfo,
    ScAudioPlayerProgress,
    ScAudioPlayerPlayButton,
    ScAudioPlayerPrevious,
    ScAudioPlayerNext,
  ],
  template: `
    <div
      sc-audio-player
      [tracks]="tracks"
      class="flex flex-col gap-2 p-2 bg-card border rounded-lg max-w-sm"
    >
      <div class="flex items-center gap-2">
        <div sc-audio-player-info class="flex-1 min-w-0 text-sm"></div>
        <div class="flex items-center gap-1">
          <button sc-audio-player-previous class="size-8"></button>
          <button sc-audio-player-play-button class="size-8"></button>
          <button sc-audio-player-next class="size-8"></button>
        </div>
      </div>
      <div sc-audio-player-progress></div>
      <audio sc-audio-player-audio></audio>
    </div>
  `,
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
}
