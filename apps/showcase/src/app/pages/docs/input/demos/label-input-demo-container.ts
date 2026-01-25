import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { LabelInputDemo } from './label-input-demo';

@Component({
  selector: 'app-label-input-demo-container',
  imports: [DemoContainer, LabelInputDemo],
  template: `
    <app-demo-container title="With Label" [code]="code">
      <app-label-input-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelInputDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScInput, ScLabel } from '@semantic-components/ui';

@Component({
  selector: 'app-label-input-demo',
  imports: [ScInput, ScLabel],
  template: \`
    <div class="grid w-full max-w-sm items-center gap-1.5">
      <label sc-label for="email">Email</label>
      <input sc-input type="email" id="email" placeholder="Email" />
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelInputDemo {}`;
}
