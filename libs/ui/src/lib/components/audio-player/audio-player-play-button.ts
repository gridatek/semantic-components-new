import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';
import { SC_AUDIO_PLAYER } from './audio-player';

@Component({
  selector: 'button[sc-audio-player-play-button]',
  template: `
    @if (player.isPlaying()) {
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="size-6 pointer-events-none"
      >
        <rect x="6" y="4" width="4" height="16" rx="1" />
        <rect x="14" y="4" width="4" height="16" rx="1" />
      </svg>
    } @else {
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="size-6 pointer-events-none"
      >
        <polygon points="6 3 20 12 6 21 6 3" />
      </svg>
    }
  `,
  host: {
    'data-slot': 'audio-player-play-button',
    type: 'button',
    '[class]': 'class()',
    '[attr.aria-label]': "player.isPlaying() ? 'Pause' : 'Play'",
    '(click)': 'player.togglePlay()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAudioPlayerPlayButton {
  readonly player = inject(SC_AUDIO_PLAYER);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'size-12 rounded-full bg-primary text-primary-foreground',
      'flex items-center justify-center',
      'hover:bg-primary/90 transition-colors',
      'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
      this.classInput(),
    ),
  );
}
