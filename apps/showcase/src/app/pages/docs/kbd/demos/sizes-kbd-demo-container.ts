import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { SizesKbdDemo } from './sizes-kbd-demo';

@Component({
  selector: 'app-sizes-kbd-demo-container',
  imports: [DemoContainer, SizesKbdDemo],
  template: `
    <app-demo-container
      title="Sizes"
      demoUrl="/demos/kbd/sizes-kbd-demo"
      [code]="code"
    >
      <app-sizes-kbd-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SizesKbdDemoContainer {
  readonly code = `import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ScKbd } from '@semantic-components/ui';

@Component({
  selector: 'app-sizes-kbd-demo',
  imports: [ScKbd],
  template: \`
    <div class="flex items-end gap-4">
      <div class="flex flex-col items-center gap-2">
        <kbd sc-kbd size="sm">⌘</kbd>
        <span class="text-xs text-muted-foreground">Small</span>
      </div>
      <div class="flex flex-col items-center gap-2">
        <kbd sc-kbd size="default">⌘</kbd>
        <span class="text-xs text-muted-foreground">Default</span>
      </div>
      <div class="flex flex-col items-center gap-2">
        <kbd sc-kbd size="lg">⌘</kbd>
        <span class="text-xs text-muted-foreground">Large</span>
      </div>
    </div>
  \`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SizesKbdDemo {}`;
}
