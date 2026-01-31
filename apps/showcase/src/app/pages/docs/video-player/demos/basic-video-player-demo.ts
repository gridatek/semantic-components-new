import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScVideoPlayer,
  ScVideoPlayerVideo,
  ScVideoPlayerControls,
  ScVideoPlayerPlayButton,
  ScVideoPlayerProgress,
  ScVideoPlayerVolume,
  ScVideoPlayerTime,
  ScVideoPlayerSkipButton,
  ScVideoPlayerSpeedButton,
  ScVideoPlayerFullscreenButton,
  ScVideoPlayerPipButton,
  ScVideoPlayerBigPlayButton,
  ScVideoPlayerBuffering,
} from '@semantic-components/ui';

@Component({
  selector: 'app-basic-video-player-demo',
  imports: [
    ScVideoPlayer,
    ScVideoPlayerVideo,
    ScVideoPlayerControls,
    ScVideoPlayerPlayButton,
    ScVideoPlayerProgress,
    ScVideoPlayerVolume,
    ScVideoPlayerTime,
    ScVideoPlayerSkipButton,
    ScVideoPlayerSpeedButton,
    ScVideoPlayerFullscreenButton,
    ScVideoPlayerPipButton,
    ScVideoPlayerBigPlayButton,
    ScVideoPlayerBuffering,
  ],
  template: `
    <div
      sc-video-player
      #player="scVideoPlayer"
      class="relative bg-black rounded-lg overflow-hidden max-w-2xl"
    >
      <!-- Buffering Indicator -->
      <div sc-video-player-buffering>
        <div
          class="size-12 border-4 border-white/30 border-t-white rounded-full animate-spin"
        ></div>
      </div>

      <!-- Video -->
      <video
        sc-video-player-video
        [src]="sampleVideo"
        [poster]="samplePoster"
      ></video>

      <!-- Big Play Button -->
      @if (!player.isPlaying() && !player.isBuffering()) {
        <button sc-video-player-big-play>
          <div
            class="size-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-10 text-black ml-1"
            >
              <polygon points="6 3 20 12 6 21 6 3" />
            </svg>
          </div>
        </button>
      }

      <!-- Controls -->
      <div sc-video-player-controls>
        <div sc-video-player-progress class="mb-2"></div>

        <div class="flex items-center gap-2">
          <!-- Play/Pause -->
          <button sc-video-player-play>
            @if (player.isPlaying()) {
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-5"
              >
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            } @else {
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-5"
              >
                <polygon points="6 3 20 12 6 21 6 3" />
              </svg>
            }
          </button>

          <!-- Skip Back -->
          <button
            sc-video-player-skip
            [seconds]="-10"
            ariaLabel="Skip back 10 seconds"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="size-5"
            >
              <path
                d="M11 17a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1z"
              />
              <polyline points="11 12 11 8" />
              <path d="M21 12a9 9 0 1 1-9-9" />
              <polyline points="21 3 21 9 15 9" />
            </svg>
          </button>

          <!-- Skip Forward -->
          <button
            sc-video-player-skip
            [seconds]="10"
            ariaLabel="Skip forward 10 seconds"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="size-5"
            >
              <path
                d="M18 17a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1z"
              />
              <polyline points="13 12 13 8" />
              <path d="M3 12a9 9 0 1 0 9-9" />
              <polyline points="3 3 3 9 9 9" />
            </svg>
          </button>

          <!-- Volume -->
          <div sc-video-player-volume>
            @if (player.isMuted() || player.volume() === 0) {
              <svg
                volume-icon
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="size-5"
              >
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <line x1="22" x2="16" y1="9" y2="15" />
                <line x1="16" x2="22" y1="9" y2="15" />
              </svg>
            } @else {
              <svg
                volume-icon
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="size-5"
              >
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
              </svg>
            }
          </div>

          <!-- Time -->
          <span sc-video-player-time class="ml-2"></span>

          <!-- Spacer -->
          <div class="flex-1"></div>

          <!-- Playback Speed -->
          <div sc-video-player-speed></div>

          <!-- Picture in Picture -->
          <button sc-video-player-pip>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="size-5"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <rect width="8" height="5" x="12" y="11" rx="1" />
            </svg>
          </button>

          <!-- Fullscreen -->
          <button sc-video-player-fullscreen>
            @if (player.isFullscreen()) {
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="size-5"
              >
                <path d="M8 3v3a2 2 0 0 1-2 2H3" />
                <path d="M21 8h-3a2 2 0 0 1-2-2V3" />
                <path d="M3 16h3a2 2 0 0 1 2 2v3" />
                <path d="M16 21v-3a2 2 0 0 1 2-2h3" />
              </svg>
            } @else {
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="size-5"
              >
                <path d="M3 8V5a2 2 0 0 1 2-2h3" />
                <path d="M16 3h3a2 2 0 0 1 2 2v3" />
                <path d="M21 16v3a2 2 0 0 1-2 2h-3" />
                <path d="M8 21H5a2 2 0 0 1-2-2v-3" />
              </svg>
            }
          </button>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicVideoPlayerDemo {
  readonly sampleVideo =
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
  readonly samplePoster = 'https://picsum.photos/1280/720?random=1';
}
