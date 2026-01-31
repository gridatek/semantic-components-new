import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScVideoPlayer,
  ScVideoPlayerVideo,
  ScVideoPlayerControls,
  ScVideoPlayerPlayButton,
  ScVideoPlayerProgress,
  ScVideoPlayerVolume,
  ScVideoPlayerTime,
  ScVideoPlayerFullscreenButton,
} from '@semantic-components/ui';
import {
  SiPlayIcon,
  SiPauseIcon,
  SiVolumeXIcon,
  SiVolume2Icon,
  SiMaximizeIcon,
  SiMinimizeIcon,
} from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-no-overlay-video-player-demo',
  imports: [
    ScVideoPlayer,
    ScVideoPlayerVideo,
    ScVideoPlayerControls,
    ScVideoPlayerPlayButton,
    ScVideoPlayerProgress,
    ScVideoPlayerVolume,
    ScVideoPlayerTime,
    ScVideoPlayerFullscreenButton,
    SiPlayIcon,
    SiPauseIcon,
    SiVolumeXIcon,
    SiVolume2Icon,
    SiMaximizeIcon,
    SiMinimizeIcon,
  ],
  template: `
    <div
      sc-video-player
      #player="scVideoPlayer"
      class="relative bg-black rounded-lg overflow-hidden max-w-2xl"
    >
      <!-- Video (no big play button) -->
      <video sc-video-player-video [src]="sampleVideo"></video>

      <!-- Controls -->
      <div sc-video-player-controls>
        <div sc-video-player-progress class="mb-2"></div>

        <div class="flex items-center gap-2">
          <!-- Play/Pause -->
          <button sc-video-player-play>
            @if (player.isPlaying()) {
              <svg si-pause-icon></svg>
            } @else {
              <svg si-play-icon></svg>
            }
          </button>

          <!-- Volume -->
          <div sc-video-player-volume>
            @if (player.isMuted() || player.volume() === 0) {
              <svg volume-icon si-volume-x-icon></svg>
            } @else {
              <svg volume-icon si-volume-2-icon></svg>
            }
          </div>

          <!-- Time -->
          <span sc-video-player-time class="ml-2"></span>

          <!-- Spacer -->
          <div class="flex-1"></div>

          <!-- Fullscreen -->
          <button sc-video-player-fullscreen>
            @if (player.isFullscreen()) {
              <svg si-minimize-icon></svg>
            } @else {
              <svg si-maximize-icon></svg>
            }
          </button>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoOverlayVideoPlayerDemo {
  readonly sampleVideo =
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
}
