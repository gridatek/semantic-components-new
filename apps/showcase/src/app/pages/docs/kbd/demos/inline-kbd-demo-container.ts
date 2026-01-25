import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { InlineKbdDemo } from './inline-kbd-demo';

@Component({
  selector: 'app-inline-kbd-demo-container',
  imports: [DemoContainer, InlineKbdDemo],
  template: `
    <app-demo-container
      title="Inline Usage"
      demoUrl="/demos/kbd/inline-kbd-demo"
      [code]="code"
    >
      <app-inline-kbd-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InlineKbdDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScKbd } from '@semantic-components/ui';

@Component({
  selector: 'app-inline-kbd-demo',
  imports: [ScKbd],
  template: \`
    <div class="space-y-2">
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
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InlineKbdDemo {}`;
}
