import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { AsLinkButtonDemo } from './as-link-button-demo';

@Component({
  selector: 'app-as-link-button-demo-container',
  imports: [DemoContainer, AsLinkButtonDemo],
  template: `
    <app-demo-container
      title="As Link"
      demoUrl="/demos/button/as-link-button-demo"
      [code]="code"
    >
      <app-as-link-button-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsLinkButtonDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScButton } from '@semantic-components/ui';

@Component({
  selector: 'app-as-link-button-demo',
  imports: [ScButton],
  template: \`
    <div class="flex flex-wrap items-center gap-4">
      <a sc-button href="#">Default Link</a>
      <a sc-button variant="outline" href="#">Outline Link</a>
      <a sc-button variant="ghost" href="#">Ghost Link</a>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsLinkButtonDemo {}`;
}
