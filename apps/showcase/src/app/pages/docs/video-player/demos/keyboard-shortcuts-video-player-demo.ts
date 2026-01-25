import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScVideoPlayer } from '@semantic-components/ui';

@Component({
  selector: 'app-keyboard-shortcuts-video-player-demo',
  imports: [ScVideoPlayer],
  template: `
    <div class="space-y-3">
      <p class="text-sm text-muted-foreground">
        Click on the player and use these keyboard shortcuts:
      </p>
      <ul class="text-sm space-y-1 list-disc list-inside text-muted-foreground">
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
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KeyboardShortcutsVideoPlayerDemo {
  readonly sampleVideo =
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
}
