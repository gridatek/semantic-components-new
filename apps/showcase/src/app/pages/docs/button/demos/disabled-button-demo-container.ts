import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { DisabledButtonDemo } from './disabled-button-demo';

@Component({
  selector: 'app-disabled-button-demo-container',
  imports: [DemoContainer, DisabledButtonDemo],
  template: `
    <app-demo-container
      title="Disabled"
      demoUrl="/demos/button/disabled-button-demo"
      [code]="code"
    >
      <app-disabled-button-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledButtonDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScButton } from '@semantic-components/ui';

@Component({
  selector: 'app-disabled-button-demo',
  imports: [ScButton],
  template: \`
    <div class="flex flex-wrap items-center gap-4">
      <button sc-button disabled>Default</button>
      <button sc-button variant="secondary" disabled>Secondary</button>
      <button sc-button variant="destructive" disabled>Destructive</button>
      <button sc-button variant="outline" disabled>Outline</button>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledButtonDemo {}`;
}
