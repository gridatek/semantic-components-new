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
  selector: 'button[sc-audio-player-shuffle]',
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      [class]="player.shuffle() ? 'size-4 text-primary' : 'size-4'"
      class="pointer-events-none"
    >
      <path
        d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22"
      />
      <path d="m18 2 4 4-4 4" />
      <path d="M2 6h1.9c1.5 0 2.9.9 3.6 2.2" />
      <path d="M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8" />
      <path d="m18 14 4 4-4 4" />
    </svg>
  `,
  host: {
    'data-slot': 'audio-player-shuffle',
    type: 'button',
    '[class]': 'class()',
    '[attr.aria-pressed]': 'player.shuffle()',
    '[attr.aria-label]': "'Shuffle'",
    '(click)': 'player.shuffle.set(!player.shuffle())',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAudioPlayerShuffle {
  readonly player = inject(SC_AUDIO_PLAYER);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'size-8 rounded-full flex items-center justify-center',
      'hover:bg-accent transition-colors',
      'focus:outline-none focus:ring-2 focus:ring-ring',
      this.classInput(),
    ),
  );
}
