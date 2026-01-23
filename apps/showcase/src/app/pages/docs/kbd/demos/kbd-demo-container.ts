import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScKbdDemo } from './kbd-demo';

@Component({
  selector: 'app-kbd-demo-container',
  imports: [DemoContainer, ScKbdDemo],
  template: `
    <app-demo-container title="Kbd" [code]="code">
      <app-sc-kbd-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScKbdDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScKbd } from '@semantic-components/ui';

@Component({
  selector: 'app-sc-kbd-demo',
  imports: [ScKbd],
  template: \`
    <div class="space-y-8">
      <!-- Basic Keys -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Basic Keys</h3>
        <div class="flex flex-wrap items-center gap-2">
          <kbd sc-kbd>⌘</kbd>
          <kbd sc-kbd>Shift</kbd>
          <kbd sc-kbd>Alt</kbd>
          <kbd sc-kbd>Ctrl</kbd>
          <kbd sc-kbd>Enter</kbd>
          <kbd sc-kbd>Esc</kbd>
          <kbd sc-kbd>Tab</kbd>
          <kbd sc-kbd>Space</kbd>
        </div>
      </div>

      <!-- Keyboard Shortcuts -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Keyboard Shortcuts</h3>
        <div class="space-y-3">
          <div class="flex items-center gap-2">
            <span class="text-sm text-muted-foreground w-24">Copy</span>
            <kbd sc-kbd>⌘</kbd>
            <span class="text-muted-foreground">+</span>
            <kbd sc-kbd>C</kbd>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-sm text-muted-foreground w-24">Paste</span>
            <kbd sc-kbd>⌘</kbd>
            <span class="text-muted-foreground">+</span>
            <kbd sc-kbd>V</kbd>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-sm text-muted-foreground w-24">Undo</span>
            <kbd sc-kbd>⌘</kbd>
            <span class="text-muted-foreground">+</span>
            <kbd sc-kbd>Z</kbd>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-sm text-muted-foreground w-24">Save</span>
            <kbd sc-kbd>⌘</kbd>
            <span class="text-muted-foreground">+</span>
            <kbd sc-kbd>S</kbd>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-sm text-muted-foreground w-24">Search</span>
            <kbd sc-kbd>⌘</kbd>
            <span class="text-muted-foreground">+</span>
            <kbd sc-kbd>K</kbd>
          </div>
        </div>
      </div>

      <!-- Variants -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Variants</h3>
        <div class="space-y-3">
          <div class="flex items-center gap-4">
            <span class="text-sm text-muted-foreground w-20">Default</span>
            <kbd sc-kbd variant="default">⌘</kbd>
            <kbd sc-kbd variant="default">K</kbd>
          </div>
          <div class="flex items-center gap-4">
            <span class="text-sm text-muted-foreground w-20">Outline</span>
            <kbd sc-kbd variant="outline">⌘</kbd>
            <kbd sc-kbd variant="outline">K</kbd>
          </div>
        </div>
      </div>

      <!-- Sizes -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Sizes</h3>
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
      </div>

      <!-- Arrow Keys -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Arrow Keys</h3>
        <div class="flex flex-col items-center gap-1">
          <kbd sc-kbd>↑</kbd>
          <div class="flex gap-1">
            <kbd sc-kbd>←</kbd>
            <kbd sc-kbd>↓</kbd>
            <kbd sc-kbd>→</kbd>
          </div>
        </div>
      </div>

      <!-- Function Keys -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Function Keys</h3>
        <div class="flex flex-wrap items-center gap-2">
          <kbd sc-kbd>F1</kbd>
          <kbd sc-kbd>F2</kbd>
          <kbd sc-kbd>F3</kbd>
          <kbd sc-kbd>F4</kbd>
          <kbd sc-kbd>F5</kbd>
          <kbd sc-kbd>F6</kbd>
          <kbd sc-kbd>F7</kbd>
          <kbd sc-kbd>F8</kbd>
          <kbd sc-kbd>F9</kbd>
          <kbd sc-kbd>F10</kbd>
          <kbd sc-kbd>F11</kbd>
          <kbd sc-kbd>F12</kbd>
        </div>
      </div>

      <!-- In Text -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Inline Usage</h3>
        <p class="text-sm text-muted-foreground">
          Press
          <kbd sc-kbd size="sm">⌘</kbd>
          <kbd sc-kbd size="sm">K</kbd>
          to open the command palette, or
          <kbd sc-kbd size="sm">Esc</kbd>
          to close it.
        </p>
        <p class="text-sm text-muted-foreground">
          Use
          <kbd sc-kbd size="sm">Tab</kbd>
          to navigate between fields and
          <kbd sc-kbd size="sm">Enter</kbd>
          to submit.
        </p>
      </div>

      <!-- Complex Shortcuts -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Complex Shortcuts</h3>
        <div class="space-y-3">
          <div class="flex items-center gap-2">
            <span class="text-sm text-muted-foreground w-32">Screenshot</span>
            <kbd sc-kbd>⌘</kbd>
            <span class="text-muted-foreground">+</span>
            <kbd sc-kbd>Shift</kbd>
            <span class="text-muted-foreground">+</span>
            <kbd sc-kbd>4</kbd>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-sm text-muted-foreground w-32">Force Quit</span>
            <kbd sc-kbd>⌘</kbd>
            <span class="text-muted-foreground">+</span>
            <kbd sc-kbd>Option</kbd>
            <span class="text-muted-foreground">+</span>
            <kbd sc-kbd>Esc</kbd>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-sm text-muted-foreground w-32">Dev Tools</span>
            <kbd sc-kbd>⌘</kbd>
            <span class="text-muted-foreground">+</span>
            <kbd sc-kbd>Option</kbd>
            <span class="text-muted-foreground">+</span>
            <kbd sc-kbd>I</kbd>
          </div>
        </div>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScKbdDemo {}`;
}
