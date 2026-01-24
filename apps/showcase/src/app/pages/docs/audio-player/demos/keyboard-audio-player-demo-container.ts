import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { KeyboardAudioPlayerDemo } from './keyboard-audio-player-demo';

@Component({
  selector: 'app-keyboard-audio-player-demo-container',
  imports: [DemoContainer, KeyboardAudioPlayerDemo],
  template: `
    <app-demo-container
      title="Keyboard Shortcuts"
      demoUrl="/demos/audio-player/keyboard-audio-player-demo"
      [code]="code"
    >
      <app-keyboard-audio-player-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KeyboardAudioPlayerDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScAudioPlayer, AudioTrack } from '@semantic-components/ui';

@Component({
  selector: 'app-keyboard-audio-player-demo',
  imports: [ScAudioPlayer],
  template: \`
    <ul
      class="text-sm space-y-1 list-disc list-inside text-muted-foreground mb-3"
    >
      <li>
        <kbd class="px-1 py-0.5 bg-muted rounded text-xs">\u2190</kbd>
        /
        <kbd class="px-1 py-0.5 bg-muted rounded text-xs">\u2192</kbd>
        - Seek 5 seconds
      </li>
      <li>
        <kbd class="px-1 py-0.5 bg-muted rounded text-xs">Shift</kbd>
        + Arrow - Seek 10 seconds
      </li>
    </ul>
    <sc-audio-player [tracks]="tracks" class="max-w-md" />
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KeyboardAudioPlayerDemo {
  readonly tracks: AudioTrack[] = [
    {
      src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      title: 'SoundHelix Song 1',
      artist: 'T. Sch\u00FCrger',
      cover: 'https://picsum.photos/200/200?random=1',
    },
    {
      src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
      title: 'SoundHelix Song 2',
      artist: 'T. Sch\u00FCrger',
      cover: 'https://picsum.photos/200/200?random=2',
    },
    {
      src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
      title: 'SoundHelix Song 3',
      artist: 'T. Sch\u00FCrger',
      cover: 'https://picsum.photos/200/200?random=3',
    },
  ];
}`;
}
