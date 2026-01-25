import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { VariantsKbdDemo } from './variants-kbd-demo';

@Component({
  selector: 'app-variants-kbd-demo-container',
  imports: [DemoContainer, VariantsKbdDemo],
  template: `
    <app-demo-container
      title="Variants"
      demoUrl="/demos/kbd/variants-kbd-demo"
      [code]="code"
    >
      <app-variants-kbd-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VariantsKbdDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScKbd } from '@semantic-components/ui';

@Component({
  selector: 'app-variants-kbd-demo',
  imports: [ScKbd],
  template: \`
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
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VariantsKbdDemo {}`;
}
