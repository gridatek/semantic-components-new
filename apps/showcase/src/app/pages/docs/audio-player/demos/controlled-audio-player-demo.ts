import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
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

@Component({
  selector: 'app-controlled-audio-player-demo',
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
      [(currentIndex)]="currentIndex"
      [(volume)]="volume"
      [(shuffle)]="shuffle"
      [(repeat)]="repeat"
      (trackChange)="onTrackChange($event)"
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
    <div class="text-sm text-muted-foreground space-y-1 mt-3">
      <p>Current track: {{ currentIndex() + 1 }}</p>
      <p>Volume: {{ (volume() * 100).toFixed(0) }}%</p>
      <p>Shuffle: {{ shuffle() ? 'On' : 'Off' }}</p>
      <p>Repeat: {{ repeat() }}</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlledAudioPlayerDemo {
  readonly currentIndex = signal(0);
  readonly volume = signal(1);
  readonly shuffle = signal(false);
  readonly repeat = signal<'none' | 'one' | 'all'>('none');

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

  onTrackChange(track: ScAudioTrack): void {
    console.log('Track changed:', track.title);
  }
}
