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
  selector: 'button[sc-audio-player-next]',
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      class="size-5 pointer-events-none"
    >
      <polygon points="5 4 15 12 5 20 5 4" fill="currentColor" />
      <line x1="19" x2="19" y1="5" y2="19" />
    </svg>
  `,
  host: {
    'data-slot': 'audio-player-next',
    type: 'button',
    '[class]': 'class()',
    '[disabled]': '!player.canGoNext()',
    '[attr.aria-label]': "'Next track'",
    '(click)': 'player.next()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAudioPlayerNext {
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
