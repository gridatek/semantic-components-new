import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScKbd } from '@semantic-components/ui';

@Component({
  selector: 'app-sizes-kbd-demo',
  imports: [ScKbd],
  template: `
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
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SizesKbdDemo {}
