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
  selector: 'app-podcast-audio-player-demo',
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
      class="flex flex-col gap-3 p-4 bg-card border rounded-lg max-w-md"
    >
      <!-- Cover -->
      <div
        sc-audio-player-cover
        class="w-full aspect-square max-w-[200px] mx-auto"
      ></div>

      <!-- Track Info -->
      <div sc-audio-player-info class="text-center"></div>

      <!-- Progress -->
      <div sc-audio-player-progress></div>

      <!-- Controls -->
      <div class="flex items-center justify-center gap-2">
        <button sc-audio-player-shuffle></button>
        <button sc-audio-player-previous></button>
        <button sc-audio-player-play-button></button>
        <button sc-audio-player-next></button>
        <button sc-audio-player-repeat></button>
      </div>

      <!-- Volume -->
      <div sc-audio-player-volume class="justify-center"></div>

      <!-- Hidden Audio Element -->
      <audio sc-audio-player-audio></audio>
    </div>
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
