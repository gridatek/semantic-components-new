import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ControlledVideoPlayerDemo } from './controlled-video-player-demo';

@Component({
  selector: 'app-controlled-video-player-demo-container',
  imports: [DemoContainer, ControlledVideoPlayerDemo],
  template: `
    <app-demo-container
      title="Controlled Playback"
      demoUrl="/demos/video-player/controlled-video-player-demo"
      [code]="code"
    >
      <app-controlled-video-player-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlledVideoPlayerDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScVideoPlayer } from '@semantic-components/ui';

@Component({
  selector: 'app-controlled-video-player-demo',
  imports: [ScVideoPlayer],
  template: \`
    <sc-video-player
      [src]="sampleVideo"
      [(volume)]="volume"
      [(playbackRate)]="playbackRate"
      (timeUpdate)="onTimeUpdate($event)"
      class="max-w-2xl"
    />
    <div class="flex gap-4 items-center max-w-2xl mt-4">
      <div class="flex-1">
        <label class="text-sm text-muted-foreground">
          Volume: {{ (volume() * 100).toFixed(0) }}%
        </label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          [value]="volume()"
          (input)="volume.set(+$any($event.target).value)"
          class="w-full"
        />
      </div>
      <div class="flex-1">
        <label class="text-sm text-muted-foreground">
          Speed: {{ playbackRate() }}x
        </label>
        <input
          type="range"
          min="0.25"
          max="2"
          step="0.25"
          [value]="playbackRate()"
          (input)="playbackRate.set(+$any($event.target).value)"
          class="w-full"
        />
      </div>
    </div>
    <p class="text-sm text-muted-foreground mt-2">
      Current time: {{ currentTime().toFixed(1) }}s
    </p>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlledVideoPlayerDemo {
  readonly volume = signal(1);
  readonly playbackRate = signal(1);
  readonly currentTime = signal(0);

  readonly sampleVideo =
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

  onTimeUpdate(time: number): void {
    this.currentTime.set(time);
  }
}`;
}
