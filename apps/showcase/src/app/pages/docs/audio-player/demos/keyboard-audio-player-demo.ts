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
  ScAudioTrack,
} from '@semantic-components/ui';
import {
  SiPlayIcon,
  SiPauseIcon,
  SiSkipBackIcon,
  SiSkipForwardIcon,
  SiRepeatIcon,
  SiRepeat1Icon,
  SiShuffleIcon,
} from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-keyboard-audio-player-demo',
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
    SiPlayIcon,
    SiPauseIcon,
    SiSkipBackIcon,
    SiSkipForwardIcon,
    SiRepeatIcon,
    SiRepeat1Icon,
    SiShuffleIcon,
  ],
  template: `
    <ul
      class="text-sm space-y-1 list-disc list-inside text-muted-foreground mb-3"
    >
      <li>
        <kbd class="px-1 py-0.5 bg-muted rounded text-xs">←</kbd>
        /
        <kbd class="px-1 py-0.5 bg-muted rounded text-xs">→</kbd>
        - Seek 5 seconds
      </li>
      <li>
        <kbd class="px-1 py-0.5 bg-muted rounded text-xs">Shift</kbd>
        + Arrow - Seek 10 seconds
      </li>
    </ul>
    <div
      sc-audio-player
      #player="scAudioPlayer"
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
        <button sc-audio-player-shuffle>
          <svg si-shuffle-icon></svg>
        </button>
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
export class KeyboardAudioPlayerDemo {
  readonly tracks: ScAudioTrack[] = [
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
