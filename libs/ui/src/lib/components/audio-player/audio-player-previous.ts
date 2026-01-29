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
  selector: 'button[sc-audio-player-previous]',
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      class="size-5 pointer-events-none"
    >
      <polygon points="19 20 9 12 19 4 19 20" fill="currentColor" />
      <line x1="5" x2="5" y1="19" y2="5" />
    </svg>
  `,
  host: {
    'data-slot': 'audio-player-previous',
    type: 'button',
    '[class]': 'class()',
    '[disabled]': '!player.canGoPrevious()',
    '[attr.aria-label]': "'Previous track'",
    '(click)': 'player.previous()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAudioPlayerPrevious {
  readonly player = inject(SC_AUDIO_PLAYER);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'size-8 rounded-full flex items-center justify-center',
      'hover:bg-accent transition-colors',
      'focus:outline-none focus:ring-2 focus:ring-ring',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      this.classInput(),
    ),
  );
}
