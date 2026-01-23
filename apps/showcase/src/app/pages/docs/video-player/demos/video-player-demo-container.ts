import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScVideoPlayerDemo } from './video-player-demo';

@Component({
  selector: 'app-video-player-demo-container',
  imports: [DemoContainer, ScVideoPlayerDemo],
  template: `
    <app-demo-container title="Video" [code]="code">
      <sc-video-player-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScVideoPlayerDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScVideoPlayer, VideoSource } from '@semantic-components/ui';

@Component({
  selector: 'sc-video-player-demo',
  imports: [ScVideoPlayer],
  template: \`
    <div class="space-y-8">
      <!-- Basic Video Player -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Basic Video Player</h3>
        <p class="text-sm text-muted-foreground">
          Full-featured video player with all controls.
        </p>
        <sc-video-player
          [src]="sampleVideo"
          [poster]="samplePoster"
          class="max-w-2xl"
        />
      </section>

      <!-- Multiple Sources -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Multiple Sources</h3>
        <p class="text-sm text-muted-foreground">
          Provide multiple sources for browser compatibility.
        </p>
        <sc-video-player
          [sources]="videoSources"
          [poster]="samplePoster"
          class="max-w-2xl"
        />
      </section>

      <!-- Without Skip Buttons -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Minimal Controls</h3>
        <p class="text-sm text-muted-foreground">
          Simplified controls without skip buttons and playback speed.
        </p>
        <sc-video-player
          [src]="sampleVideo"
          [showSkipButtons]="false"
          [showPlaybackSpeed]="false"
          [showPiP]="false"
          class="max-w-2xl"
        />
      </section>

      <!-- Autoplay Muted -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Autoplay (Muted)</h3>
        <p class="text-sm text-muted-foreground">
          Autoplaying video must be muted due to browser policies.
        </p>
        <sc-video-player
          [src]="sampleVideo"
          [autoplay]="true"
          [muted]="true"
          class="max-w-2xl"
        />
      </section>

      <!-- Loop -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Looping Video</h3>
        <p class="text-sm text-muted-foreground">
          Video loops back to start when finished.
        </p>
        <sc-video-player [src]="sampleVideo" [loop]="true" class="max-w-2xl" />
      </section>

      <!-- Custom Aspect Ratio -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Custom Aspect Ratio</h3>
        <p class="text-sm text-muted-foreground">
          4:3 aspect ratio for older content.
        </p>
        <sc-video-player
          [src]="sampleVideo"
          [aspectRatio]="'4/3'"
          class="max-w-xl"
        />
      </section>

      <!-- Controlled Playback -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Controlled Playback</h3>
        <p class="text-sm text-muted-foreground">
          Control volume and playback rate externally.
        </p>
        <sc-video-player
          [src]="sampleVideo"
          [(volume)]="volume"
          [(playbackRate)]="playbackRate"
          (timeUpdate)="onTimeUpdate($event)"
          class="max-w-2xl"
        />
        <div class="flex gap-4 items-center max-w-2xl">
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
        <p class="text-sm text-muted-foreground">
          Current time: {{ currentTime().toFixed(1) }}s
        </p>
      </section>

      <!-- Without Big Play Button -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Without Big Play Button</h3>
        <p class="text-sm text-muted-foreground">
          Cleaner look without the center play overlay.
        </p>
        <sc-video-player
          [src]="sampleVideo"
          [showBigPlayButton]="false"
          class="max-w-2xl"
        />
      </section>

      <!-- Keyboard Shortcuts -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Keyboard Shortcuts</h3>
        <p class="text-sm text-muted-foreground">
          Click on the player and use these keyboard shortcuts:
        </p>
        <ul
          class="text-sm space-y-1 list-disc list-inside text-muted-foreground"
        >
          <li>
            <kbd class="px-1 py-0.5 bg-muted rounded text-xs">Space</kbd>
            /
            <kbd class="px-1 py-0.5 bg-muted rounded text-xs">K</kbd>
            - Play/Pause
          </li>
          <li>
            <kbd class="px-1 py-0.5 bg-muted rounded text-xs">←</kbd>
            /
            <kbd class="px-1 py-0.5 bg-muted rounded text-xs">→</kbd>
            - Seek 5 seconds
          </li>
          <li>
            <kbd class="px-1 py-0.5 bg-muted rounded text-xs">↑</kbd>
            /
            <kbd class="px-1 py-0.5 bg-muted rounded text-xs">↓</kbd>
            - Volume
          </li>
          <li>
            <kbd class="px-1 py-0.5 bg-muted rounded text-xs">M</kbd>
            - Mute/Unmute
          </li>
          <li>
            <kbd class="px-1 py-0.5 bg-muted rounded text-xs">F</kbd>
            - Fullscreen
          </li>
        </ul>
        <sc-video-player [src]="sampleVideo" class="max-w-2xl" />
      </section>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScVideoPlayerDemo {
  readonly volume = signal(1);
  readonly playbackRate = signal(1);
  readonly currentTime = signal(0);

  readonly sampleVideo =
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
  readonly samplePoster = 'https://picsum.photos/1280/720?random=1';

  readonly videoSources: VideoSource[] = [
    {
      src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      type: 'video/mp4',
    },
  ];

  onTimeUpdate(time: number): void {
    this.currentTime.set(time);
  }
}`;
}
