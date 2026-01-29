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
  ScAudioPlayerRepeat,
  ScAudioPlayerVolume,
  AudioTrack,
} from '@semantic-components/ui';

@Component({
  selector: 'app-single-track-audio-player-demo',
  imports: [
    ScAudioPlayer,
    ScAudioPlayerAudio,
    ScAudioPlayerCover,
    ScAudioPlayerInfo,
    ScAudioPlayerProgress,
    ScAudioPlayerPlayButton,
    ScAudioPlayerPrevious,
    ScAudioPlayerNext,
    ScAudioPlayerRepeat,
    ScAudioPlayerVolume,
  ],
  template: `
    <div
      sc-audio-player
      [tracks]="[track]"
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

      <!-- Controls (no shuffle for single track) -->
      <div class="flex items-center justify-center gap-2">
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
export class SingleTrackAudioPlayerDemo {
  readonly track: AudioTrack = {
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    title: 'Ambient Soundscape',
    artist: 'Audio Artist',
    cover: 'https://picsum.photos/200/200?random=4',
  };
}
