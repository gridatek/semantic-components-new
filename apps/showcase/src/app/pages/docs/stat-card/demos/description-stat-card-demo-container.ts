import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { DescriptionStatCardDemo } from './description-stat-card-demo';

@Component({
  selector: 'app-description-stat-card-demo-container',
  imports: [DemoContainer, DescriptionStatCardDemo],
  template: `
    <app-demo-container
      title="With Description"
      demoUrl="/demos/stat-card/description-stat-card-demo"
      [code]="code"
    >
      <app-description-stat-card-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DescriptionStatCardDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScStatCard } from '@semantic-components/ui';

@Component({
  selector: 'app-description-stat-card-demo',
  imports: [ScStatCard],
  template: \`
    <div class="max-w-sm">
      <sc-stat-card
        label="Conversion Rate"
        value="3.24%"
        [change]="2.4"
        changeLabel="vs last week"
        trend="up"
        description="Percentage of visitors who completed a purchase"
        [icon]="percentIcon"
      />
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DescriptionStatCardDemo {
  readonly percentIcon = \`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" x2="5" y1="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>\`;
}`;
}
