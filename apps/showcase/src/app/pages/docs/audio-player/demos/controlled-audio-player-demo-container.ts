import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ControlledAudioPlayerDemo } from './controlled-audio-player-demo';

@Component({
  selector: 'app-controlled-audio-player-demo-container',
  imports: [DemoContainer, ControlledAudioPlayerDemo],
  template: `
    <app-demo-container
      title="Controlled Playback"
      demoUrl="/demos/audio-player/controlled-audio-player-demo"
      [code]="code"
    >
      <app-controlled-audio-player-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlledAudioPlayerDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScAudioPlayer, AudioTrack } from '@semantic-components/ui';

@Component({
  selector: 'app-controlled-audio-player-demo',
  imports: [ScAudioPlayer],
  template: \`
    <sc-audio-player
      [tracks]="tracks"
      [(currentIndex)]="currentIndex"
      [(volume)]="volume"
      [(shuffle)]="shuffle"
      [(repeat)]="repeat"
      (trackChange)="onTrackChange($event)"
      class="max-w-md"
    />
    <div class="text-sm text-muted-foreground space-y-1 mt-3">
      <p>Current track: {{ currentIndex() + 1 }}</p>
      <p>Volume: {{ (volume() * 100).toFixed(0) }}%</p>
      <p>Shuffle: {{ shuffle() ? 'On' : 'Off' }}</p>
      <p>Repeat: {{ repeat() }}</p>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlledAudioPlayerDemo {
  readonly currentIndex = signal(0);
  readonly volume = signal(1);
  readonly shuffle = signal(false);
  readonly repeat = signal<'none' | 'one' | 'all'>('none');

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

  onTrackChange(track: AudioTrack): void {
    console.log('Track changed:', track.title);
  }
}`;
}
