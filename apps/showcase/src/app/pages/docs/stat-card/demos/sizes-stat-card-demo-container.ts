import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { SizesStatCardDemo } from './sizes-stat-card-demo';

@Component({
  selector: 'app-sizes-stat-card-demo-container',
  imports: [DemoContainer, SizesStatCardDemo],
  template: `
    <app-demo-container
      title="Size Variants"
      demoUrl="/demos/stat-card/sizes-stat-card-demo"
      [code]="code"
    >
      <app-sizes-stat-card-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SizesStatCardDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScStatCard } from '@semantic-components/ui';

@Component({
  selector: 'app-sizes-stat-card-demo',
  imports: [ScStatCard],
  template: \`
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <sc-stat-card
        label="Small"
        value="1,234"
        size="sm"
        [icon]="chartIcon"
      />
      <sc-stat-card
        label="Medium"
        value="5,678"
        size="md"
        [icon]="chartIcon"
      />
      <sc-stat-card label="Large" value="9,012" size="lg" [icon]="chartIcon" />
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SizesStatCardDemo {
  readonly chartIcon = \`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>\`;
}`;
}
