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
  selector: 'button[sc-audio-player-repeat]',
  template: `
    @if (player.repeat() === 'one') {
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        class="size-4 text-primary pointer-events-none"
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
        [class]="player.repeat() === 'all' ? 'size-4 text-primary' : 'size-4'"
        class="pointer-events-none"
      >
        <path d="m17 2 4 4-4 4" />
        <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
        <path d="m7 22-4-4 4-4" />
        <path d="M21 13v1a4 4 0 0 1-4 4H3" />
      </svg>
    }
  `,
  host: {
    'data-slot': 'audio-player-repeat',
    type: 'button',
    '[class]': 'class()',
    '[attr.aria-label]': "'Repeat: ' + player.repeat()",
    '(click)': 'player.cycleRepeat()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAudioPlayerRepeat {
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
