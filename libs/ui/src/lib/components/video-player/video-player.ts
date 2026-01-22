import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  ElementRef,
  inject,
  input,
  model,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { cn } from '../../utils';

export interface VideoSource {
  src: string;
  type?: string;
  label?: string;
}

export interface VideoTrack {
  src: string;
  kind: 'subtitles' | 'captions' | 'descriptions' | 'chapters' | 'metadata';
  srclang: string;
  label: string;
  default?: boolean;
}

@Component({
  selector: 'sc-video-player',
  template: `
    <div
      [class]="containerClass()"
      (mouseenter)="showControls.set(true)"
      (mouseleave)="onMouseLeave()"
      (mousemove)="onMouseMove()"
    >
      <!-- Video Element -->
      <video
        #videoElement
        [class]="videoClass()"
        [poster]="poster()"
        [autoplay]="autoplay()"
        [loop]="loop()"
        [muted]="muted()"
        [playsInline]="playsInline()"
        (timeupdate)="onTimeUpdate()"
        (loadedmetadata)="onLoadedMetadata()"
        (ended)="onEnded()"
        (play)="isPlaying.set(true)"
        (pause)="isPlaying.set(false)"
        (waiting)="isBuffering.set(true)"
        (canplay)="isBuffering.set(false)"
        (volumechange)="onVolumeChange()"
        (click)="togglePlay()"
        (dblclick)="toggleFullscreen()"
      >
        @for (source of sources(); track source.src) {
          <source [src]="source.src" [type]="source.type || 'video/mp4'" />
        }
        @if (src()) {
          <source [src]="src()" type="video/mp4" />
        }
        @for (track of tracks(); track track.src) {
          <track
            [src]="track.src"
            [kind]="track.kind"
            [srclang]="track.srclang"
            [label]="track.label"
            [default]="track.default"
          />
        }
      </video>

      <!-- Buffering Indicator -->
      @if (isBuffering()) {
        <div
          class="absolute inset-0 flex items-center justify-center bg-black/20"
        >
          <div
            class="size-12 border-4 border-white/30 border-t-white rounded-full animate-spin"
          ></div>
        </div>
      }

      <!-- Big Play Button (when paused) -->
      @if (!isPlaying() && !isBuffering() && showBigPlayButton()) {
        <button
          type="button"
          (click)="togglePlay()"
          class="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
          aria-label="Play video"
        >
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

      <!-- Controls Overlay -->
      @if (showControlsComputed()) {
        <div [class]="controlsContainerClass()">
          <!-- Progress Bar -->
          <div class="px-4 py-2">
            <div
              class="relative h-1 bg-white/30 rounded-full cursor-pointer group"
              (click)="onProgressClick($event)"
              (mousedown)="onProgressMouseDown($event)"
            >
              <!-- Buffered -->
              <div
                class="absolute inset-y-0 left-0 bg-white/50 rounded-full"
                [style.width.%]="bufferedPercent()"
              ></div>
              <!-- Progress -->
              <div
                class="absolute inset-y-0 left-0 bg-white rounded-full"
                [style.width.%]="progressPercent()"
              ></div>
              <!-- Thumb -->
              <div
                class="absolute top-1/2 -translate-y-1/2 size-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                [style.left.%]="progressPercent()"
                [style.transform]="'translate(-50%, -50%)'"
              ></div>
            </div>
          </div>

          <!-- Control Buttons -->
          <div class="flex items-center gap-2 px-4 pb-3">
            <!-- Play/Pause -->
            <button
              type="button"
              (click)="togglePlay()"
              [class]="controlButtonClass()"
              [attr.aria-label]="isPlaying() ? 'Pause' : 'Play'"
            >
              @if (isPlaying()) {
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
            @if (showSkipButtons()) {
              <button
                type="button"
                (click)="skip(-10)"
                [class]="controlButtonClass()"
                aria-label="Skip back 10 seconds"
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
            }

            <!-- Skip Forward -->
            @if (showSkipButtons()) {
              <button
                type="button"
                (click)="skip(10)"
                [class]="controlButtonClass()"
                aria-label="Skip forward 10 seconds"
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
            }

            <!-- Volume -->
            <div class="flex items-center gap-1 group/volume">
              <button
                type="button"
                (click)="toggleMute()"
                [class]="controlButtonClass()"
                [attr.aria-label]="isMuted() ? 'Unmute' : 'Mute'"
              >
                @if (isMuted() || volume() === 0) {
                  <svg
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
                } @else if (volume() < 0.5) {
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    class="size-5"
                  >
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
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
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  </svg>
                }
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                [value]="volume()"
                (input)="onVolumeInput($event)"
                class="w-0 group-hover/volume:w-20 transition-all duration-200 h-1 accent-white cursor-pointer"
                aria-label="Volume"
              />
            </div>

            <!-- Time -->
            <span class="text-sm text-white ml-2">
              {{ formatTime(currentTime()) }} / {{ formatTime(duration()) }}
            </span>

            <!-- Spacer -->
            <div class="flex-1"></div>

            <!-- Playback Speed -->
            @if (showPlaybackSpeed()) {
              <div class="relative">
                <button
                  type="button"
                  (click)="showSpeedMenu.set(!showSpeedMenu())"
                  [class]="controlButtonClass()"
                  aria-label="Playback speed"
                >
                  <span class="text-xs font-medium">{{ playbackRate() }}x</span>
                </button>
                @if (showSpeedMenu()) {
                  <div
                    class="absolute bottom-full right-0 mb-2 bg-black/90 rounded-lg py-2 min-w-[80px]"
                  >
                    @for (speed of playbackSpeeds; track speed) {
                      <button
                        type="button"
                        (click)="setPlaybackRate(speed)"
                        class="w-full px-4 py-1 text-sm text-white hover:bg-white/20 text-left"
                        [class.bg-white/10]="playbackRate() === speed"
                      >
                        {{ speed }}x
                      </button>
                    }
                  </div>
                }
              </div>
            }

            <!-- Picture in Picture -->
            @if (showPiP()) {
              <button
                type="button"
                (click)="togglePiP()"
                [class]="controlButtonClass()"
                aria-label="Picture in picture"
              >
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
            }

            <!-- Fullscreen -->
            <button
              type="button"
              (click)="toggleFullscreen()"
              [class]="controlButtonClass()"
              [attr.aria-label]="
                isFullscreen() ? 'Exit fullscreen' : 'Enter fullscreen'
              "
            >
              @if (isFullscreen()) {
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
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keydown)': 'onKeydown($event)',
    '(document:fullscreenchange)': 'onFullscreenChange()',
  },
})
export class ScVideoPlayer {
  private readonly destroyRef = inject(DestroyRef);
  private readonly videoRef =
    viewChild.required<ElementRef<HTMLVideoElement>>('videoElement');

  // Inputs
  readonly src = input<string>('');
  readonly sources = input<VideoSource[]>([]);
  readonly tracks = input<VideoTrack[]>([]);
  readonly poster = input<string>('');
  readonly autoplay = input<boolean>(false);
  readonly loop = input<boolean>(false);
  readonly muted = input<boolean>(false);
  readonly playsInline = input<boolean>(true);
  readonly showSkipButtons = input<boolean>(true);
  readonly showPlaybackSpeed = input<boolean>(true);
  readonly showPiP = input<boolean>(true);
  readonly showBigPlayButton = input<boolean>(true);
  readonly aspectRatio = input<string>('16/9');
  readonly class = input<string>('');

  // Models
  readonly volume = model<number>(1);
  readonly playbackRate = model<number>(1);

  // Outputs
  readonly play = output<void>();
  readonly pause = output<void>();
  readonly ended = output<void>();
  readonly timeUpdate = output<number>();

  // Internal state
  readonly isPlaying = signal(false);
  readonly isBuffering = signal(false);
  readonly isMuted = signal(false);
  readonly isFullscreen = signal(false);
  readonly currentTime = signal(0);
  readonly duration = signal(0);
  readonly buffered = signal(0);
  readonly showControls = signal(true);
  readonly showSpeedMenu = signal(false);

  readonly playbackSpeeds = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];

  private controlsTimeout: ReturnType<typeof setTimeout> | null = null;
  private previousVolume = 1;

  protected readonly progressPercent = computed(() => {
    const duration = this.duration();
    if (duration === 0) return 0;
    return (this.currentTime() / duration) * 100;
  });

  protected readonly bufferedPercent = computed(() => {
    const duration = this.duration();
    if (duration === 0) return 0;
    return (this.buffered() / duration) * 100;
  });

  protected readonly showControlsComputed = computed(() => {
    return this.showControls() || !this.isPlaying();
  });

  protected readonly containerClass = computed(() =>
    cn('relative bg-black rounded-lg overflow-hidden group', this.class()),
  );

  protected readonly videoClass = computed(() =>
    cn('w-full h-full object-contain', `aspect-[${this.aspectRatio()}]`),
  );

  protected readonly controlsContainerClass = computed(() =>
    cn(
      'absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent',
      'transition-opacity duration-300',
      this.showControlsComputed()
        ? 'opacity-100'
        : 'opacity-0 pointer-events-none',
    ),
  );

  protected readonly controlButtonClass = computed(() =>
    cn(
      'size-8 rounded flex items-center justify-center',
      'text-white hover:bg-white/20 transition-colors',
      'focus:outline-none focus:ring-2 focus:ring-white/50',
    ),
  );

  togglePlay(): void {
    const video = this.videoRef().nativeElement;
    if (this.isPlaying()) {
      video.pause();
      this.pause.emit();
    } else {
      video.play();
      this.play.emit();
    }
  }

  skip(seconds: number): void {
    const video = this.videoRef().nativeElement;
    video.currentTime = Math.max(
      0,
      Math.min(video.duration, video.currentTime + seconds),
    );
  }

  toggleMute(): void {
    const video = this.videoRef().nativeElement;
    if (this.isMuted()) {
      video.muted = false;
      video.volume = this.previousVolume;
      this.volume.set(this.previousVolume);
      this.isMuted.set(false);
    } else {
      this.previousVolume = this.volume();
      video.muted = true;
      this.isMuted.set(true);
    }
  }

  toggleFullscreen(): void {
    const container = this.videoRef().nativeElement.parentElement;
    if (!container) return;

    if (this.isFullscreen()) {
      document.exitFullscreen?.();
    } else {
      container.requestFullscreen?.();
    }
  }

  togglePiP(): void {
    const video = this.videoRef().nativeElement;
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture?.();
    } else {
      video.requestPictureInPicture?.();
    }
  }

  setPlaybackRate(rate: number): void {
    const video = this.videoRef().nativeElement;
    video.playbackRate = rate;
    this.playbackRate.set(rate);
    this.showSpeedMenu.set(false);
  }

  protected onTimeUpdate(): void {
    const video = this.videoRef().nativeElement;
    this.currentTime.set(video.currentTime);
    this.timeUpdate.emit(video.currentTime);

    // Update buffered
    if (video.buffered.length > 0) {
      this.buffered.set(video.buffered.end(video.buffered.length - 1));
    }
  }

  protected onLoadedMetadata(): void {
    const video = this.videoRef().nativeElement;
    this.duration.set(video.duration);
    video.volume = this.volume();
    video.playbackRate = this.playbackRate();
  }

  protected onEnded(): void {
    this.ended.emit();
  }

  protected onVolumeChange(): void {
    const video = this.videoRef().nativeElement;
    this.isMuted.set(video.muted);
    if (!video.muted) {
      this.volume.set(video.volume);
    }
  }

  protected onVolumeInput(event: Event): void {
    const value = +(event.target as HTMLInputElement).value;
    const video = this.videoRef().nativeElement;
    video.volume = value;
    video.muted = value === 0;
    this.volume.set(value);
    this.isMuted.set(value === 0);
  }

  protected onProgressClick(event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const percent = (event.clientX - rect.left) / rect.width;
    const video = this.videoRef().nativeElement;
    video.currentTime = percent * video.duration;
  }

  protected onProgressMouseDown(event: MouseEvent): void {
    // Could implement drag seeking here
  }

  protected onMouseLeave(): void {
    if (this.isPlaying()) {
      this.startHideControlsTimer();
    }
  }

  protected onMouseMove(): void {
    this.showControls.set(true);
    if (this.isPlaying()) {
      this.startHideControlsTimer();
    }
  }

  protected onKeydown(event: KeyboardEvent): void {
    // Only handle if video player is focused or in fullscreen
    const target = event.target as HTMLElement;
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return;

    switch (event.key) {
      case ' ':
      case 'k':
        this.togglePlay();
        event.preventDefault();
        break;
      case 'ArrowLeft':
        this.skip(-5);
        event.preventDefault();
        break;
      case 'ArrowRight':
        this.skip(5);
        event.preventDefault();
        break;
      case 'ArrowUp':
        this.adjustVolume(0.1);
        event.preventDefault();
        break;
      case 'ArrowDown':
        this.adjustVolume(-0.1);
        event.preventDefault();
        break;
      case 'm':
        this.toggleMute();
        event.preventDefault();
        break;
      case 'f':
        this.toggleFullscreen();
        event.preventDefault();
        break;
    }
  }

  protected onFullscreenChange(): void {
    this.isFullscreen.set(!!document.fullscreenElement);
  }

  private adjustVolume(delta: number): void {
    const video = this.videoRef().nativeElement;
    const newVolume = Math.max(0, Math.min(1, this.volume() + delta));
    video.volume = newVolume;
    video.muted = newVolume === 0;
    this.volume.set(newVolume);
    this.isMuted.set(newVolume === 0);
  }

  private startHideControlsTimer(): void {
    if (this.controlsTimeout) {
      clearTimeout(this.controlsTimeout);
    }
    this.controlsTimeout = setTimeout(() => {
      if (this.isPlaying()) {
        this.showControls.set(false);
      }
    }, 3000);
  }

  protected formatTime(seconds: number): string {
    if (!isFinite(seconds) || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }
}
