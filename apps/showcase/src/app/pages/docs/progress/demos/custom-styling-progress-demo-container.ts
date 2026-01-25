import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { CustomStylingProgressDemo } from './custom-styling-progress-demo';

@Component({
  selector: 'app-custom-styling-progress-demo-container',
  imports: [DemoContainer, CustomStylingProgressDemo],
  template: `
    <app-demo-container title="Custom Styling" [code]="code">
      <app-custom-styling-progress-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomStylingProgressDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScProgress } from '@semantic-components/ui';

@Component({
  selector: 'app-custom-styling-progress-demo',
  imports: [ScProgress],
  template: \`
    <div sc-progress [value]="66" class="h-4 w-[60%]"></div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomStylingProgressDemo {}`;
}
