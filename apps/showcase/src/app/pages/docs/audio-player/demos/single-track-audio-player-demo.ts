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
  ScAudioTrack,
} from '@semantic-components/ui';
import {
  SiPlayIcon,
  SiPauseIcon,
  SiSkipBackIcon,
  SiSkipForwardIcon,
  SiRepeatIcon,
  SiRepeat1Icon,
} from '@semantic-icons/lucide-icons';

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
    SiPlayIcon,
    SiPauseIcon,
    SiSkipBackIcon,
    SiSkipForwardIcon,
    SiRepeatIcon,
    SiRepeat1Icon,
  ],
  template: `
    <div
      sc-audio-player
      #player="scAudioPlayer"
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
        <button sc-audio-player-previous>
          <svg si-skip-back-icon></svg>
        </button>
        <button sc-audio-player-play-button>
          @if (player.isPlaying()) {
            <svg si-pause-icon></svg>
          } @else {
            <svg si-play-icon></svg>
          }
        </button>
        <button sc-audio-player-next>
          <svg si-skip-forward-icon></svg>
        </button>
        <button sc-audio-player-repeat>
          @if (player.repeat() === 'one') {
            <svg si-repeat-1-icon></svg>
          } @else {
            <svg si-repeat-icon></svg>
          }
        </button>
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
  readonly track: ScAudioTrack = {
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    title: 'Ambient Soundscape',
    artist: 'Audio Artist',
    cover: 'https://picsum.photos/200/200?random=4',
  };
}
