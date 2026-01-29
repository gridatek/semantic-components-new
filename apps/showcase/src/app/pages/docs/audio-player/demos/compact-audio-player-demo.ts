import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScAudioPlayer,
  ScAudioPlayerAudio,
  ScAudioPlayerCover,
  ScAudioPlayerInfo,
  ScAudioPlayerProgress,
  ScAudioPlayerPlayButton,
  ScAudioPlayerPrevious,
  ScAudioPlayerNext,
  ScAudioPlayerShuffle,
  ScAudioPlayerRepeat,
  ScAudioPlayerVolume,
  AudioTrack,
} from '@semantic-components/ui';

@Component({
  selector: 'app-compact-audio-player-demo',
  imports: [
    ScAudioPlayer,
    ScAudioPlayerAudio,
    ScAudioPlayerCover,
    ScAudioPlayerInfo,
    ScAudioPlayerProgress,
    ScAudioPlayerPlayButton,
    ScAudioPlayerPrevious,
    ScAudioPlayerNext,
    ScAudioPlayerShuffle,
    ScAudioPlayerRepeat,
    ScAudioPlayerVolume,
  ],
  template: `
    <div
      sc-audio-player
      [tracks]="tracks"
      class="flex items-center gap-4 p-4 bg-card border rounded-lg max-w-lg"
    >
      <div sc-audio-player-cover class="size-16"></div>
      <div class="flex flex-col gap-3 flex-1 min-w-0">
        <div sc-audio-player-info></div>
        <div sc-audio-player-progress></div>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <button sc-audio-player-shuffle></button>
            <button sc-audio-player-previous></button>
            <button sc-audio-player-play-button></button>
            <button sc-audio-player-next></button>
            <button sc-audio-player-repeat></button>
          </div>
          <div sc-audio-player-volume class="max-w-32"></div>
        </div>
      </div>
      <audio sc-audio-player-audio></audio>
    </div>
  `,
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
}
