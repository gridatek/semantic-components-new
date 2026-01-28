import {
  computed,
  DestroyRef,
  Directive,
  ElementRef,
  inject,
  input,
  InjectionToken,
  model,
  output,
  signal,
  viewChild,
  AfterViewInit,
} from '@angular/core';

export interface AudioTrack {
  src: string;
  title?: string;
  artist?: string;
  cover?: string;
  duration?: number;
}

export const SC_AUDIO_PLAYER = new InjectionToken<ScAudioPlayer>(
  'SC_AUDIO_PLAYER',
);

@Directive({
  selector: '[sc-audio-player]',
  exportAs: 'scAudioPlayer',
  providers: [{ provide: SC_AUDIO_PLAYER, useExisting: ScAudioPlayer }],
  host: {
    'data-slot': 'audio-player',
  },
})
export class ScAudioPlayer implements AfterViewInit {
  private readonly destroyRef = inject(DestroyRef);
  readonly audioRef = viewChild.required<ElementRef<HTMLAudioElement>>('audio');

  // Inputs
  readonly tracks = input<AudioTrack[]>([]);
  readonly autoplay = input<boolean>(false);

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

  readonly currentTrack = computed(() => {
    const tracks = this.tracks();
    const index = this.currentIndex();
    return tracks[index] ?? null;
  });

  readonly progressPercent = computed(() => {
    const duration = this.duration();
    if (duration === 0) return 0;
    return (this.currentTime() / duration) * 100;
  });

  readonly canGoPrevious = computed(() => {
    return this.tracks().length > 1;
  });

  readonly canGoNext = computed(() => {
    return this.tracks().length > 1;
  });

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

  onTimeUpdate(): void {
    const audio = this.audioRef().nativeElement;
    this.currentTime.set(audio.currentTime);
  }

  onLoadedMetadata(): void {
    const audio = this.audioRef().nativeElement;
    this.duration.set(audio.duration);
  }

  onEnded(): void {
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

  setVolume(value: number): void {
    const audio = this.audioRef().nativeElement;
    audio.volume = value;
    this.volume.set(value);
    this.isMuted.set(value === 0);
  }

  formatTime(seconds: number): string {
    if (!isFinite(seconds) || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }
}
