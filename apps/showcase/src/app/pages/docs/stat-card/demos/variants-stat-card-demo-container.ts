import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { VariantsStatCardDemo } from './variants-stat-card-demo';

@Component({
  selector: 'app-variants-stat-card-demo-container',
  imports: [DemoContainer, VariantsStatCardDemo],
  template: `
    <app-demo-container
      title="Variant Styles"
      demoUrl="/demos/stat-card/variants-stat-card-demo"
      [code]="code"
    >
      <app-variants-stat-card-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VariantsStatCardDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScStatCard } from '@semantic-components/ui';

@Component({
  selector: 'app-variants-stat-card-demo',
  imports: [ScStatCard],
  template: \`
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <sc-stat-card
        label="Default"
        value="1,234"
        variant="default"
        [change]="12"
        trend="up"
      />
      <sc-stat-card
        label="Outline"
        value="5,678"
        variant="outline"
        [change]="-5"
        trend="down"
      />
      <sc-stat-card
        label="Filled"
        value="9,012"
        variant="filled"
        [change]="8"
        trend="up"
      />
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VariantsStatCardDemo {}`;
}
