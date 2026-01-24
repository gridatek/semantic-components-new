import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicAudioPlayerDemoContainer } from './demos/basic-audio-player-demo-container';
import { CompactAudioPlayerDemoContainer } from './demos/compact-audio-player-demo-container';
import { MinimalAudioPlayerDemoContainer } from './demos/minimal-audio-player-demo-container';
import { NoCoverAudioPlayerDemoContainer } from './demos/no-cover-audio-player-demo-container';
import { SingleTrackAudioPlayerDemoContainer } from './demos/single-track-audio-player-demo-container';
import { PodcastAudioPlayerDemoContainer } from './demos/podcast-audio-player-demo-container';
import { ControlledAudioPlayerDemoContainer } from './demos/controlled-audio-player-demo-container';
import { KeyboardAudioPlayerDemoContainer } from './demos/keyboard-audio-player-demo-container';

@Component({
  selector: 'app-audio-player-page',
  imports: [
    BasicAudioPlayerDemoContainer,
    CompactAudioPlayerDemoContainer,
    MinimalAudioPlayerDemoContainer,
    NoCoverAudioPlayerDemoContainer,
    SingleTrackAudioPlayerDemoContainer,
    PodcastAudioPlayerDemoContainer,
    ControlledAudioPlayerDemoContainer,
    KeyboardAudioPlayerDemoContainer,
  ],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">AudioPlayer</h1>
        <p class="text-muted-foreground">
          Feature-rich audio player with playlist support, shuffle, and repeat.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-basic-audio-player-demo-container />
        <app-compact-audio-player-demo-container />
        <app-minimal-audio-player-demo-container />
        <app-no-cover-audio-player-demo-container />
        <app-single-track-audio-player-demo-container />
        <app-podcast-audio-player-demo-container />
        <app-controlled-audio-player-demo-container />
        <app-keyboard-audio-player-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AudioPlayerPage {}
