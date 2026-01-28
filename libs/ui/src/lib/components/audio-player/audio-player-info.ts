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
  selector: 'div[sc-audio-player-info]',
  template: `
    <p class="font-medium truncate">
      {{ player.currentTrack()?.title || 'Unknown Track' }}
    </p>
    @if (player.currentTrack()?.artist) {
      <p class="text-sm text-muted-foreground truncate">
        {{ player.currentTrack()?.artist }}
      </p>
    }
  `,
  host: {
    'data-slot': 'audio-player-info',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAudioPlayerInfo {
  readonly player = inject(SC_AUDIO_PLAYER);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('', this.classInput()));
}
