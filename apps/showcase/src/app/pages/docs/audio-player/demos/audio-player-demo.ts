import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScAudioPlayer, AudioTrack } from '@semantic-components/ui';

@Component({
  selector: 'sc-audio-player-demo',
  imports: [ScAudioPlayer],
  template: `
    <div class="space-y-8">
      <!-- Basic Audio Player -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Basic Audio Player</h3>
        <p class="text-sm text-muted-foreground">
          Full-featured audio player with all controls.
        </p>
        <sc-audio-player [tracks]="sampleTracks" class="max-w-md" />
      </section>

      <!-- Compact Variant -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Compact Variant</h3>
        <p class="text-sm text-muted-foreground">
          Horizontal layout for sidebars or smaller spaces.
        </p>
        <sc-audio-player
          [tracks]="sampleTracks"
          [variant]="'compact'"
          class="max-w-lg"
        />
      </section>

      <!-- Minimal Variant -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Minimal Variant</h3>
        <p class="text-sm text-muted-foreground">
          Simplified player with just the essentials.
        </p>
        <sc-audio-player
          [tracks]="sampleTracks"
          [variant]="'minimal'"
          [showCover]="false"
          [showVolume]="false"
          [showShuffle]="false"
          [showRepeat]="false"
          class="max-w-sm"
        />
      </section>

      <!-- Without Cover -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Without Cover Art</h3>
        <p class="text-sm text-muted-foreground">
          Player without album artwork display.
        </p>
        <sc-audio-player
          [tracks]="sampleTracks"
          [showCover]="false"
          class="max-w-md"
        />
      </section>

      <!-- Single Track -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Single Track</h3>
        <p class="text-sm text-muted-foreground">
          Player with a single audio file.
        </p>
        <sc-audio-player
          [tracks]="[singleTrack]"
          [showShuffle]="false"
          class="max-w-md"
        />
      </section>

      <!-- Custom Colors -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">With Podcast</h3>
        <p class="text-sm text-muted-foreground">
          Works great for podcasts too.
        </p>
        <sc-audio-player [tracks]="podcastTracks" class="max-w-md" />
      </section>

      <!-- Controlled Playback -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Controlled Playback</h3>
        <p class="text-sm text-muted-foreground">
          Control playback state externally.
        </p>
        <sc-audio-player
          [tracks]="sampleTracks"
          [(currentIndex)]="currentIndex"
          [(volume)]="volume"
          [(shuffle)]="shuffle"
          [(repeat)]="repeat"
          (trackChange)="onTrackChange($event)"
          class="max-w-md"
        />
        <div class="text-sm text-muted-foreground space-y-1">
          <p>Current track: {{ currentIndex() + 1 }}</p>
          <p>Volume: {{ (volume() * 100).toFixed(0) }}%</p>
          <p>Shuffle: {{ shuffle() ? 'On' : 'Off' }}</p>
          <p>Repeat: {{ repeat() }}</p>
        </div>
      </section>

      <!-- Keyboard Shortcuts -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Keyboard Shortcuts</h3>
        <p class="text-sm text-muted-foreground">
          Focus on the progress bar and use these shortcuts:
        </p>
        <ul
          class="text-sm space-y-1 list-disc list-inside text-muted-foreground"
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
        <sc-audio-player [tracks]="sampleTracks" class="max-w-md" />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAudioPlayerDemo {
  readonly currentIndex = signal(0);
  readonly volume = signal(1);
  readonly shuffle = signal(false);
  readonly repeat = signal<'none' | 'one' | 'all'>('none');

  readonly sampleTracks: AudioTrack[] = [
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

  readonly singleTrack: AudioTrack = {
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    title: 'Ambient Soundscape',
    artist: 'Audio Artist',
    cover: 'https://picsum.photos/200/200?random=4',
  };

  readonly podcastTracks: AudioTrack[] = [
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

  onTrackChange(track: AudioTrack): void {
    console.log('Track changed:', track.title);
  }
}
