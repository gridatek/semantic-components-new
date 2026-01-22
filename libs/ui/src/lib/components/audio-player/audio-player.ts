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

export interface AudioTrack {
  src: string;
  title?: string;
  artist?: string;
  cover?: string;
  duration?: number;
}

@Component({
  selector: 'sc-audio-player',
  template: `
    <div [class]="containerClass()">
      <!-- Cover Art -->
      @if (showCover() && currentTrack()?.cover) {
        <div [class]="coverClass()">
          <img
            [src]="currentTrack()?.cover"
            [alt]="currentTrack()?.title || 'Album cover'"
            class="size-full object-cover"
          />
        </div>
      }

      <!-- Track Info -->
      @if (showInfo()) {
        <div [class]="infoClass()">
          <p class="font-medium truncate">
            {{ currentTrack()?.title || 'Unknown Track' }}
          </p>
          @if (currentTrack()?.artist) {
            <p class="text-sm text-muted-foreground truncate">
              {{ currentTrack()?.artist }}
            </p>
          }
        </div>
      }

      <!-- Progress Bar -->
      <div [class]="progressContainerClass()">
        <span class="text-xs text-muted-foreground w-10 text-right">
          {{ formatTime(currentTime()) }}
        </span>
        <div
          class="flex-1 h-1.5 bg-muted rounded-full cursor-pointer relative group"
          (click)="onProgressClick($event)"
          role="slider"
          [attr.aria-label]="'Seek'"
          [attr.aria-valuenow]="currentTime()"
          [attr.aria-valuemin]="0"
          [attr.aria-valuemax]="duration()"
          tabindex="0"
          (keydown)="onProgressKeydown($event)"
        >
          <div
            class="absolute inset-y-0 left-0 bg-primary rounded-full transition-all"
            [style.width.%]="progressPercent()"
          ></div>
          <div
            class="absolute top-1/2 -translate-y-1/2 size-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            [style.left.%]="progressPercent()"
            [style.transform]="'translate(-50%, -50%)'"
          ></div>
        </div>
        <span class="text-xs text-muted-foreground w-10">
          {{ formatTime(duration()) }}
        </span>
      </div>

      <!-- Controls -->
      <div [class]="controlsClass()">
        <!-- Shuffle -->
        @if (showShuffle()) {
          <button
            type="button"
            (click)="shuffle.set(!shuffle())"
            [class]="secondaryButtonClass()"
            [attr.aria-pressed]="shuffle()"
            aria-label="Shuffle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              [class]="shuffle() ? 'size-4 text-primary' : 'size-4'"
            >
              <path
                d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22"
              />
              <path d="m18 2 4 4-4 4" />
              <path d="M2 6h1.9c1.5 0 2.9.9 3.6 2.2" />
              <path d="M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8" />
              <path d="m18 14 4 4-4 4" />
            </svg>
          </button>
        }

        <!-- Previous -->
        <button
          type="button"
          (click)="previous()"
          [class]="secondaryButtonClass()"
          [disabled]="!canGoPrevious()"
          aria-label="Previous track"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="size-5"
          >
            <polygon points="19 20 9 12 19 4 19 20" fill="currentColor" />
            <line x1="5" x2="5" y1="19" y2="5" />
          </svg>
        </button>

        <!-- Play/Pause -->
        <button
          type="button"
          (click)="togglePlay()"
          [class]="playButtonClass()"
          [attr.aria-label]="isPlaying() ? 'Pause' : 'Play'"
        >
          @if (isPlaying()) {
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6"
            >
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          } @else {
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6"
            >
              <polygon points="6 3 20 12 6 21 6 3" />
            </svg>
          }
        </button>

        <!-- Next -->
        <button
          type="button"
          (click)="next()"
          [class]="secondaryButtonClass()"
          [disabled]="!canGoNext()"
          aria-label="Next track"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="size-5"
          >
            <polygon points="5 4 15 12 5 20 5 4" fill="currentColor" />
            <line x1="19" x2="19" y1="5" y2="19" />
          </svg>
        </button>

        <!-- Repeat -->
        @if (showRepeat()) {
          <button
            type="button"
            (click)="cycleRepeat()"
            [class]="secondaryButtonClass()"
            [attr.aria-label]="'Repeat: ' + repeat()"
          >
            @if (repeat() === 'one') {
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="size-4 text-primary"
              >
                <path d="m17 2 4 4-4 4" />
                <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
                <path d="m7 22-4-4 4-4" />
                <path d="M21 13v1a4 4 0 0 1-4 4H3" />
                <path d="M11 10h1v4" />
              </svg>
            } @else {
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                [class]="repeat() === 'all' ? 'size-4 text-primary' : 'size-4'"
              >
                <path d="m17 2 4 4-4 4" />
                <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
                <path d="m7 22-4-4 4-4" />
                <path d="M21 13v1a4 4 0 0 1-4 4H3" />
              </svg>
            }
          </button>
        }
      </div>

      <!-- Volume -->
      @if (showVolume()) {
        <div [class]="volumeClass()">
          <button
            type="button"
            (click)="toggleMute()"
            [class]="secondaryButtonClass()"
            [attr.aria-label]="isMuted() ? 'Unmute' : 'Mute'"
          >
            @if (isMuted() || volume() === 0) {
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="size-4"
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
                class="size-4"
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
                class="size-4"
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
            (input)="onVolumeChange($event)"
            class="w-20 h-1 accent-primary cursor-pointer"
            aria-label="Volume"
          />
        </div>
      }

      <!-- Hidden Audio Element -->
      <audio
        #audioElement
        [src]="currentTrack()?.src"
        (timeupdate)="onTimeUpdate()"
        (loadedmetadata)="onLoadedMetadata()"
        (ended)="onEnded()"
        (play)="isPlaying.set(true)"
        (pause)="isPlaying.set(false)"
      ></audio>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAudioPlayer {
  private readonly destroyRef = inject(DestroyRef);
  private readonly audioRef =
    viewChild.required<ElementRef<HTMLAudioElement>>('audioElement');

  // Inputs
  readonly tracks = input<AudioTrack[]>([]);
  readonly variant = input<'default' | 'compact' | 'minimal'>('default');
  readonly showCover = input<boolean>(true);
  readonly showInfo = input<boolean>(true);
  readonly showVolume = input<boolean>(true);
  readonly showShuffle = input<boolean>(true);
  readonly showRepeat = input<boolean>(true);
  readonly autoplay = input<boolean>(false);
  readonly class = input<string>('');

  // Models
  readonly currentIndex = model<number>(0);
  readonly volume = model<number>(1);
  readonly shuffle = model<boolean>(false);
  readonly repeat = model<'none' | 'one' | 'all'>('none');

  // Outputs
  readonly trackChange = output<AudioTrack>();
  readonly play = output<void>();
  readonly pause = output<void>();
  readonly ended = output<void>();

  // Internal state
  readonly isPlaying = signal(false);
  readonly isMuted = signal(false);
  readonly currentTime = signal(0);
  readonly duration = signal(0);
  private previousVolume = 1;

  protected readonly currentTrack = computed(() => {
    const tracks = this.tracks();
    const index = this.currentIndex();
    return tracks[index] ?? null;
  });

  protected readonly progressPercent = computed(() => {
    const duration = this.duration();
    if (duration === 0) return 0;
    return (this.currentTime() / duration) * 100;
  });

  protected readonly canGoPrevious = computed(() => {
    return this.tracks().length > 1;
  });

  protected readonly canGoNext = computed(() => {
    return this.tracks().length > 1;
  });

  protected readonly containerClass = computed(() => {
    const variant = this.variant();
    return cn(
      'flex flex-col gap-3 p-4 bg-card border rounded-lg',
      variant === 'compact' && 'flex-row items-center gap-4',
      variant === 'minimal' && 'p-2 gap-2',
      this.class(),
    );
  });

  protected readonly coverClass = computed(() => {
    const variant = this.variant();
    return cn(
      'rounded-md overflow-hidden bg-muted flex-shrink-0',
      variant === 'default' && 'w-full aspect-square max-w-[200px] mx-auto',
      variant === 'compact' && 'size-16',
      variant === 'minimal' && 'size-10',
    );
  });

  protected readonly infoClass = computed(() => {
    const variant = this.variant();
    return cn(
      variant === 'default' && 'text-center',
      variant === 'compact' && 'flex-1 min-w-0',
      variant === 'minimal' && 'flex-1 min-w-0',
    );
  });

  protected readonly progressContainerClass = computed(() =>
    cn('flex items-center gap-2'),
  );

  protected readonly controlsClass = computed(() =>
    cn('flex items-center justify-center gap-2'),
  );

  protected readonly volumeClass = computed(() =>
    cn('flex items-center gap-2 justify-center'),
  );

  protected readonly playButtonClass = computed(() =>
    cn(
      'size-12 rounded-full bg-primary text-primary-foreground',
      'flex items-center justify-center',
      'hover:bg-primary/90 transition-colors',
      'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
    ),
  );

  protected readonly secondaryButtonClass = computed(() =>
    cn(
      'size-8 rounded-full flex items-center justify-center',
      'hover:bg-accent transition-colors',
      'focus:outline-none focus:ring-2 focus:ring-ring',
      'disabled:opacity-50 disabled:cursor-not-allowed',
    ),
  );

  ngAfterViewInit(): void {
    const audio = this.audioRef().nativeElement;
    audio.volume = this.volume();

    if (this.autoplay()) {
      audio.play().catch(() => {
        // Autoplay blocked by browser
      });
    }
  }

  togglePlay(): void {
    const audio = this.audioRef().nativeElement;
    if (this.isPlaying()) {
      audio.pause();
      this.pause.emit();
    } else {
      audio.play();
      this.play.emit();
    }
  }

  previous(): void {
    const tracks = this.tracks();
    if (tracks.length === 0) return;

    // If more than 3 seconds in, restart current track
    if (this.currentTime() > 3) {
      this.seek(0);
      return;
    }

    let newIndex: number;
    if (this.shuffle()) {
      newIndex = Math.floor(Math.random() * tracks.length);
    } else {
      newIndex = this.currentIndex() - 1;
      if (newIndex < 0) {
        newIndex = tracks.length - 1;
      }
    }

    this.currentIndex.set(newIndex);
    this.trackChange.emit(tracks[newIndex]);

    if (this.isPlaying()) {
      setTimeout(() => this.audioRef().nativeElement.play(), 0);
    }
  }

  next(): void {
    const tracks = this.tracks();
    if (tracks.length === 0) return;

    let newIndex: number;
    if (this.shuffle()) {
      newIndex = Math.floor(Math.random() * tracks.length);
    } else {
      newIndex = this.currentIndex() + 1;
      if (newIndex >= tracks.length) {
        newIndex = 0;
      }
    }

    this.currentIndex.set(newIndex);
    this.trackChange.emit(tracks[newIndex]);

    if (this.isPlaying()) {
      setTimeout(() => this.audioRef().nativeElement.play(), 0);
    }
  }

  seek(time: number): void {
    const audio = this.audioRef().nativeElement;
    audio.currentTime = time;
    this.currentTime.set(time);
  }

  toggleMute(): void {
    const audio = this.audioRef().nativeElement;
    if (this.isMuted()) {
      audio.volume = this.previousVolume;
      this.volume.set(this.previousVolume);
      this.isMuted.set(false);
    } else {
      this.previousVolume = this.volume();
      audio.volume = 0;
      this.volume.set(0);
      this.isMuted.set(true);
    }
  }

  cycleRepeat(): void {
    const current = this.repeat();
    if (current === 'none') {
      this.repeat.set('all');
    } else if (current === 'all') {
      this.repeat.set('one');
    } else {
      this.repeat.set('none');
    }
  }

  protected onTimeUpdate(): void {
    const audio = this.audioRef().nativeElement;
    this.currentTime.set(audio.currentTime);
  }

  protected onLoadedMetadata(): void {
    const audio = this.audioRef().nativeElement;
    this.duration.set(audio.duration);
  }

  protected onEnded(): void {
    this.ended.emit();

    const repeatMode = this.repeat();
    if (repeatMode === 'one') {
      this.seek(0);
      this.audioRef().nativeElement.play();
    } else if (
      repeatMode === 'all' ||
      this.currentIndex() < this.tracks().length - 1
    ) {
      this.next();
    }
  }

  protected onProgressClick(event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const percent = (event.clientX - rect.left) / rect.width;
    this.seek(percent * this.duration());
  }

  protected onProgressKeydown(event: KeyboardEvent): void {
    const step = event.shiftKey ? 10 : 5;
    if (event.key === 'ArrowLeft') {
      this.seek(Math.max(0, this.currentTime() - step));
      event.preventDefault();
    } else if (event.key === 'ArrowRight') {
      this.seek(Math.min(this.duration(), this.currentTime() + step));
      event.preventDefault();
    }
  }

  protected onVolumeChange(event: Event): void {
    const value = +(event.target as HTMLInputElement).value;
    const audio = this.audioRef().nativeElement;
    audio.volume = value;
    this.volume.set(value);
    this.isMuted.set(value === 0);
  }

  protected formatTime(seconds: number): string {
    if (!isFinite(seconds) || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }
}

@Component({
  selector: 'sc-audio-player-minimal',
  imports: [ScAudioPlayer],
  template: `
    <sc-audio-player
      [tracks]="tracks()"
      [variant]="'minimal'"
      [showCover]="false"
      [showInfo]="true"
      [showVolume]="false"
      [showShuffle]="false"
      [showRepeat]="false"
      [(currentIndex)]="currentIndex"
      [class]="class()"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAudioPlayerMinimal {
  readonly tracks = input<AudioTrack[]>([]);
  readonly class = input<string>('');
  readonly currentIndex = model<number>(0);
}
