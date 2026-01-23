import { ChangeDetectionStrategy, Component } from '@angular/core';
import AudioPlayerDemoContainer from './demos/audio-player-demo-container';

@Component({
  selector: 'app-audio-player-page',
  imports: [AudioPlayerDemoContainer],
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
        <app-audio-player-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AudioPlayerPage {}
